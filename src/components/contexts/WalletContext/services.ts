import { WalletName, WalletRiskAssessment } from './types';
import detectEthereumProvider from '@metamask/detect-provider';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { BigNumber, ethers } from 'ethers';

/**
 * Will throw an error if the connected ethereum network does not match required network set in .env file
 * @param provider - The ethers-wrapped provider
 */
export const checkForCorrectNetwork = async (provider: ethers.providers.JsonRpcProvider) => {
  const network = await provider.getNetwork();
  if (network.name !== process.env.REACT_APP_REQUIRED_ETHEREUM_NETWORK) {
    throw new Error('Wrong network');
  }
};

/**
 * Will throw an error if the given wallet address is deemed as risky (has a shady history)
 * @param walletAddress - the wallet address to check
 */
export const checkForRiskyWallet = async (walletAddress: string) => {
  const riskAssessment = await getWalletRiskAssessment(walletAddress);
  if (isWalletRisky(riskAssessment)) {
    throw new Error('Risky Account Detected');
  }
};

/**
 * Will make the wallet open a prompt, asking the user to agree to the T&Cs. It will throw an
 * error if the user disagrees / closes the window. The signature is stored in localStorage to
 * avoid having to sign the terms every time you connect your wallet.
 * @param signer - The ethers signer
 */
export const checkForTOSSignature = async (
  signer: ethers.providers.JsonRpcSigner,
  walletAddress: string,
) => {
  const existingSignatureKey = `TOS_SIGNATURE_${walletAddress}`;
  const existingSignature = localStorage.getItem(existingSignatureKey);
  const signerAddress = await signer.getAddress();
  let termsAccepted = false;

  if (existingSignature) {
    const existingTOSSignerAddress = ethers.utils.verifyMessage(getTOSText(), existingSignature);
    if (existingTOSSignerAddress === signerAddress) {
      termsAccepted = true;
    }
  }

  if (!termsAccepted) {
    try {
      const signature = await signer.signMessage(getTOSText());
      localStorage.setItem(existingSignatureKey, signature);
    } catch (e) {
      throw new Error(' ');
    }
  }
};

/**
 * Gets the balance for a specific contract ID (you can pass in token IDs here)
 * @param provider - The ethers-wrapped provider
 * @param tokenId - the ID of the contract (token) you wish to check for
 * @param accountId - the ID of the account (wallet) to check
 */
export const getTokenBalance = async (
  provider: ethers.providers.JsonRpcProvider,
  tokenId: string,
  accountId: string,
) => {
  const contract = new ethers.Contract(
    tokenId,
    ['function balanceOf(address _owner) public view returns (uint256 balance)'],
    provider,
  );

  // eslint-disable-next-line
  const currentBalance: string = await contract.balanceOf(accountId);
  return BigNumber.from(currentBalance);
};

/**
 * Returns the terms of service text that users have to agree to to connect their wallet.
 * Note - Any changes, including whitespace, will mean a new signature is required.
 */
export const getTOSText = () => {
  const text = `
Please sign this message to log in. This won't cost you any ETH!

By signing, you accept Voltz's Terms of Service, which you can find here:
${process.env.REACT_APP_TOS_URL || ''}

If you're connecting a hardware wallet, you'll need to sign the message on your device too.`;

  return text.trim();
};

/**
 * Attemps to get an ethers-wrapped provider for the given wallet name
 * @param name - The wallet name (E.G: metamask)
 */
export const getWalletProvider = async (name: WalletName) => {
  switch (name) {
    case 'metamask':
      return await getWalletProviderMetamask();
    case 'walletConnect':
      return await getWalletProviderWalletConnect();
  }
};

/**
 * Returns an ethers Web3Provider, which wraps the Metamask instance
 */
export const getWalletProviderMetamask = async () => {
  const externalProvider = await detectEthereumProvider();
  if (externalProvider) {
    try {
      const provider = new ethers.providers.Web3Provider(
        externalProvider as ethers.providers.ExternalProvider,
      );

      // There is a login issue with metamask: https://github.com/MetaMask/metamask-extension/issues/10085

      // Triggers metamask login window, but always asks for permissions to allow site to use wallet. However, it handles
      // the user closing the login modal correctly (cancels login request so modal pops up next time).
      // await provider.send("wallet_requestPermissions", [{ eth_accounts: {} }]);

      // Triggers login modal, but if the user closes the login modal, the request isnt cancelled, so the modal
      // does not pop up again the next time they choose login with metamask (unless they refresh the page).
      await provider.send('eth_requestAccounts', []);

      return provider;
    } catch (e) {
      return undefined; // Assume user cancelled
    }
  }
  throw new Error('Metamask not installed');
};

/**
 * Returns an ethers Web3Provider, which wraps the WalletConnect instance
 */
export const getWalletProviderWalletConnect = async () => {
  let provider;

  // Try to init WalletConnect - could fail if INFURA_ID is incorrect
  try {
    provider = new WalletConnectProvider({
      infuraId: process.env.REACT_APP_WALLETCONNECT_INFURA_ID,
    });
  } catch (e) {
    throw new Error('WalletConnect not available');
  }

  // Now try and get the user to log into their wallet
  try {
    await provider.enable(); //  Enable session (triggers QR Code modal)
  } catch (e) {
    return undefined; // assume user cancelled login
  }

  if (provider) {
    return new ethers.providers.Web3Provider(provider as ethers.providers.ExternalProvider);
  }

  return undefined;
};

/**
 * Makes a request to TRM to get a risk assessment for the given wallet ID
 * @param walletId - ID of the wallet to check
 */
export async function getWalletRiskAssessment(walletId: string) {
  const result = await fetch('https://api.trmlabs.com/public/v2/screening/addresses', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: 'Basic ' + btoa(process.env.REACT_APP_TRM_API_KEY || ''),
    },
    body: JSON.stringify([
      {
        address: walletId,
        chain: 'ethereum',
      },
    ]),
  });

  if (result.ok) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data: WalletRiskAssessment[] = await result.json();
    return data[0];
  } else {
    const txt = await result.text();
    // eslint-disable-next-line
    console.warn('Wallet screening failed', txt);
  }
}

/**
 * Returns true or false based upon if the given risk assessment would suggest the wallet is risky
 * @param riskAssessment - Risk report foir a wallet obtained from using walletSecurityCheck
 */
export const isWalletRisky = (riskAssessment?: WalletRiskAssessment) => {
  const indicators = riskAssessment?.addressRiskIndicators;
  const redFlag =
    Array.isArray(indicators) && indicators.find((i) => i.categoryRiskScoreLevel >= 10);
  return Boolean(redFlag);
};
