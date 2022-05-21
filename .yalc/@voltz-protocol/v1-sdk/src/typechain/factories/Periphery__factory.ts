/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Periphery, PeripheryInterface } from "../Periphery";

const _abi = [
  {
    inputs: [],
    name: "AavePoolGetReserveNormalizedIncomeReturnedZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "unlocked",
        type: "bool",
      },
    ],
    name: "CanOnlyTradeIfUnlocked",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotLiquidate",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotSettleBeforeMaturity",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    name: "DebugError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "amount0",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1",
        type: "int256",
      },
    ],
    name: "ExpectedOppositeSigns",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
    ],
    name: "ExpectedSqrtPriceZeroBeforeInit",
    type: "error",
  },
  {
    inputs: [],
    name: "IRSNotionalAmountSpecifiedMustBeNonZero",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidMarginDelta",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "LiquidityDeltaMustBePositiveInBurn",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "LiquidityDeltaMustBePositiveInMint",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "marginRequirement",
        type: "int256",
      },
    ],
    name: "MarginLessThanMinimum",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "marginRequirement",
        type: "int256",
      },
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        internalType: "int256",
        name: "fixedTokenDelta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "variableTokenDelta",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "cumulativeFeeIncurred",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "fixedTokenDeltaUnbalanced",
        type: "int256",
      },
    ],
    name: "MarginRequirementNotMet",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "marginRequirement",
        type: "int256",
      },
    ],
    name: "MarginRequirementNotMetFCM",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requested",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "available",
        type: "uint256",
      },
    ],
    name: "NotEnoughFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "OOO",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyFCM",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyMarginEngine",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyOwnerCanUpdatePosition",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyVAMM",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "x",
        type: "int256",
      },
    ],
    name: "PRBMathSD59x18__FromIntOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "x",
        type: "int256",
      },
    ],
    name: "PRBMathSD59x18__FromIntUnderflow",
    type: "error",
  },
  {
    inputs: [],
    name: "PRBMathSD59x18__MulInputTooSmall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rAbs",
        type: "uint256",
      },
    ],
    name: "PRBMathSD59x18__MulOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "PRBMathUD60x18__Exp2InputTooBig",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "PRBMathUD60x18__FromUintOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "PRBMathUD60x18__LogInputTooSmall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "prod1",
        type: "uint256",
      },
    ],
    name: "PRBMath__MulDivFixedPointOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "prod1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "denominator",
        type: "uint256",
      },
    ],
    name: "PRBMath__MulDivOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "PositionNetZero",
    type: "error",
  },
  {
    inputs: [],
    name: "PositionNotSettled",
    type: "error",
  },
  {
    inputs: [],
    name: "WithdrawalExceedsCurrentMargin",
    type: "error",
  },
  {
    inputs: [],
    name: "closeToOrBeyondMaturity",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IMarginEngine",
        name: "_marginEngine",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_lpNotionalCapNew",
        type: "uint256",
      },
    ],
    name: "NotionalCap",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IMarginEngine",
        name: "marginEngine",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "int24",
        name: "_tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "_tickUpper",
        type: "int24",
      },
    ],
    name: "estimatedCashflowAtMaturity",
    outputs: [
      {
        internalType: "int256",
        name: "estimatedSettlementCashflow",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarginEngine",
        name: "marginEngine",
        type: "address",
      },
    ],
    name: "getCurrentTick",
    outputs: [
      {
        internalType: "int24",
        name: "currentTick",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarginEngine",
        name: "",
        type: "address",
      },
    ],
    name: "lpNotionalCaps",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarginEngine",
        name: "",
        type: "address",
      },
    ],
    name: "lpNotionalCumulatives",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IMarginEngine",
            name: "marginEngine",
            type: "address",
          },
          {
            internalType: "int24",
            name: "tickLower",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "tickUpper",
            type: "int24",
          },
          {
            internalType: "uint256",
            name: "notional",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isMint",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "marginDelta",
            type: "uint256",
          },
        ],
        internalType: "struct IPeriphery.MintOrBurnParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "mintOrBurn",
    outputs: [
      {
        internalType: "int256",
        name: "positionMarginRequirement",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarginEngine",
        name: "_marginEngine",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_lpNotionalCapNew",
        type: "uint256",
      },
    ],
    name: "setLPNotionalCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IMarginEngine",
            name: "marginEngine",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isFT",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "notional",
            type: "uint256",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
          {
            internalType: "int24",
            name: "tickLower",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "tickUpper",
            type: "int24",
          },
          {
            internalType: "uint256",
            name: "marginDelta",
            type: "uint256",
          },
        ],
        internalType: "struct IPeriphery.SwapPeripheryParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "int256",
        name: "_fixedTokenDelta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "_variableTokenDelta",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "_cumulativeFeeIncurred",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "_fixedTokenDeltaUnbalanced",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "_marginRequirement",
        type: "int256",
      },
      {
        internalType: "int24",
        name: "_tickAfter",
        type: "int24",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612c3c806100206000396000f3fe608060405234801561001057600080fd5b506004361061006d5760003560e01c8063040a5dc11461007257806314d2348e1461009d578063274cbcce146100be57806334907e34146100de5780637ae3714c14610121578063dbe848f614610134578063ed56928e14610149575b600080fd5b610085610080366004612529565b610169565b60405160029190910b81526020015b60405180910390f35b6100b06100ab3660046125a5565b61025b565b604051908152602001610094565b6100b06100cc366004612529565b60016020526000908152604090205481565b6100f16100ec36600461264d565b61068d565b604080519687526020870195909552938501929092526060840152608083015260020b60a082015260c001610094565b6100b061012f366004612707565b610b0c565b610147610142366004612763565b610d72565b005b6100b0610157366004612529565b60006020819052908152604090205481565b600080826001600160a01b031663e098372c6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101a557600080fd5b505afa1580156101b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101dd919061278f565b9050806001600160a01b03166380a0f76c6040518163ffffffff1660e01b815260040160606040518083038186803b15801561021857600080fd5b505afa15801561022c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025091906127ac565b602001519392505050565b8051606082015160808301516001600160a01b0383166000908152602081905260408120549093929190811561031e576001600160a01b038416600090815260016020526040812080548592906102b3908490612847565b90915550508015610319576001600160a01b03841660009081526001602052604090205481116103195760405162461bcd60e51b815260206004820152600c60248201526b1b1c0818d85c081b1a5b5a5d60a21b60448201526064015b60405180910390fd5b61034c565b6001600160a01b0384166000908152600160205260408120805485929061034690849061285f565b90915550505b61035e86602001518760400151610ef0565b600086600001516001600160a01b031663e098372c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561039d57600080fd5b505afa1580156103b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d5919061278f565b90506000816001600160a01b03166380a0f76c6040518163ffffffff1660e01b815260040160606040518083038186803b15801561041257600080fd5b505afa158015610426573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044a91906127ac565b805160208a01519192506001600160a01b031615159060009061046c90610fb5565b9050600061047d8b60400151610fb5565b90508261051557600060028c604001518d6020015161049c9190612876565b6104a691906128d3565b905060006104b382610fb5565b6040516323fbaf6f60e11b81526001600160a01b038083166004830152919250908816906347f75ede90602401600060405180830381600087803b1580156104fa57600080fd5b505af115801561050e573d6000803e3d6000fd5b5050505050505b60a08b01511561053b5761053b8b600001518c602001518d604001518e60a001516113c7565b600061054c83838e60600151611563565b905060009a508b60800151156105ef5760208c01516040808e01519051635c6651a760e11b81526001600160a01b0389169263b8cca34e926105969233929190879060040161290d565b602060405180830381600087803b1580156105b057600080fd5b505af11580156105c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e89190612940565b9a5061067e565b60208c01516040808e01519051631f2f089360e01b81526001600160a01b03891692631f2f0893926106299233929190879060040161290d565b602060405180830381600087803b15801561064357600080fd5b505af1158015610657573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067b9190612940565b9a505b50505050505050505050919050565b6000806000806000806106a887608001518860a00151610ef0565b600087600001516001600160a01b031663e098372c6040518163ffffffff1660e01b815260040160206040518083038186803b1580156106e757600080fd5b505afa1580156106fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071f919061278f565b9050876080015160020b600014801561073d575060a088015160020b155b156108aa576000816001600160a01b031663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561077d57600080fd5b505afa158015610791573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b59190612959565b90506000826001600160a01b03166380a0f76c6040518163ffffffff1660e01b815260040160606040518083038186803b1580156107f257600080fd5b505afa158015610806573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061082a91906127ac565b9050600082826020015161083e9190612976565b905060008383602001516108529190612876565b905062010deb19600283900b121561086c5762010deb1991505b61087962010deb196129be565b60020b8160020b13156108965761089362010deb196129be565b90505b600291820b60808d0152900b60a08b015250505b60c0880151156108d0576108d0886000015189608001518a60a001518b60c001516113c7565b60008860200151156108f0576108e989604001516115b6565b9050610909565b6108fd89604001516115b6565b610906906129e1565b90505b60006040518060a00160405280336001600160a01b031681526020018381526020018b606001516001600160a01b031660001461094a578b60600151610988565b8b60200151156109715761096c60016c1fa71f3f5f68a90479ee3f8fec6129fe565b610988565b6109886b0816769404766de590afe04e6001612a26565b6001600160a01b031681526020018b6080015160020b81526020018b60a0015160020b8152509050826001600160a01b03166367758e6e826040518263ffffffff1660e01b8152600401610a239190600060a08201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160020b6060830152608083015160020b608083015292915050565b60a060405180830381600087803b158015610a3d57600080fd5b505af1158015610a51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a759190612a51565b809950819a50829b50839c50849d505050505050826001600160a01b03166380a0f76c6040518163ffffffff1660e01b815260040160606040518083038186803b158015610ac257600080fd5b505afa158015610ad6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610afa91906127ac565b60200151935050505091939550919395565b600080856001600160a01b031663e3f083746040518163ffffffff1660e01b8152600401602060405180830381600087803b158015610b4a57600080fd5b505af1158015610b5e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b829190612940565b90506000866001600160a01b031663652c30b76040518163ffffffff1660e01b815260040160206040518083038186803b158015610bbf57600080fd5b505afa158015610bd3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf79190612940565b90506000876001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b158015610c3457600080fd5b505afa158015610c48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6c9190612940565b90506000610c82610c7d848461285f565b611624565b90506000610c906001611641565b610cae86610c9e6001611641565b610ca89190612847565b8461168e565b610cb8919061285f565b604051634904f4dd60e11b81526001600160a01b038b8116600483015260028b810b60248401528a900b60448301529192506000918c1690639209e9ba9060640161014060405180830381600087803b158015610d1457600080fd5b505af1158015610d28573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4c9190612ab3565b9050610d638160a001518260c001518787866116cd565b9b9a5050505050505050505050565b816001600160a01b038116610db85760405162461bcd60e51b815260206004820152600c60248201526b6d652061646472207a65726f60a01b6044820152606401610310565b6000816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610df357600080fd5b505afa158015610e07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2b919061278f565b9050336001600160a01b03821614610e755760405162461bcd60e51b815260206004820152600d60248201526c37b7363c9036b29037bbb732b960991b6044820152606401610310565b6001600160a01b0384166000908152602081905260409020548314610eea576001600160a01b03841660009081526020819052604090819020849055517f989c864d9449ef5350b668d0474c973fa25903a7d33a8747e062075f3bc56e7790610ee19086908690612b48565b60405180910390a15b50505050565b8060020b8260020b12610f2b5760405162461bcd60e51b8152602060048201526003602482015262544c5560e81b6044820152606401610310565b62010deb19600283900b1215610f695760405162461bcd60e51b8152602060048201526003602482015262544c4d60e81b6044820152606401610310565b610f7662010deb196129be565b60020b8160020b1315610fb15760405162461bcd60e51b815260206004820152600360248201526254554d60e81b6044820152606401610310565b5050565b60008060008360020b12610fcc578260020b610fd9565b8260020b610fd9906129e1565b9050610fe862010deb196129be565b60020b81111561101e5760405162461bcd60e51b81526020600482015260016024820152601560fa1b6044820152606401610310565b60006001821661103257600160801b611044565b6ffffcb933bd6fad37aa2d162d1a5940015b6001600160881b031690506002821615611079576080611074826ffff97272373d413259a46990580e213a612b61565b901c90505b60048216156110a357608061109e826ffff2e50f5f656932ef12357cf3c7fdcc612b61565b901c90505b60088216156110cd5760806110c8826fffe5caca7e10e4e61c3624eaa0941cd0612b61565b901c90505b60108216156110f75760806110f2826fffcb9843d60f6159c9db58835c926644612b61565b901c90505b602082161561112157608061111c826fff973b41fa98c081472e6896dfb254c0612b61565b901c90505b604082161561114b576080611146826fff2ea16466c96a3843ec78b326b52861612b61565b901c90505b6080821615611175576080611170826ffe5dee046a99a2a811c461f1969c3053612b61565b901c90505b6101008216156111a057608061119b826ffcbe86c7900a88aedcffc83b479aa3a4612b61565b901c90505b6102008216156111cb5760806111c6826ff987a7253ac413176f2b074cf7815e54612b61565b901c90505b6104008216156111f65760806111f1826ff3392b0822b70005940c7a398e4b70f3612b61565b901c90505b61080082161561122157608061121c826fe7159475a2c29b7443b29c7fa6e889d9612b61565b901c90505b61100082161561124c576080611247826fd097f3bdfd2022b8845ad8f792aa5825612b61565b901c90505b612000821615611277576080611272826fa9f746462d870fdf8a65dc1f90e061e5612b61565b901c90505b6140008216156112a257608061129d826f70d869a156d2a1b890bb3df62baf32f7612b61565b901c90505b6180008216156112cd5760806112c8826f31be135f97d08fd981231505542fcfa6612b61565b901c90505b620100008216156112f95760806112f4826f09aa508b5b7a84e1c677de54f3e99bc9612b61565b901c90505b6202000082161561132457608061131f826e5d6af8dedb81196699c329225ee604612b61565b901c90505b6204000082161561134e576080611349826d2216e584f5fa1ea926041bedfe98612b61565b901c90505b62080000821615611376576080611371826b048a170391f7dc42444e8fa2612b61565b901c90505b60008460020b13156113915761138e81600019612b80565b90505b61139f600160201b82612b94565b156113ab5760016113ae565b60005b6113bf9060ff16602083901c612847565b949350505050565b6000846001600160a01b0316632495a5996040518163ffffffff1660e01b815260040160206040518083038186803b15801561140257600080fd5b505afa158015611416573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061143a919061278f565b90506114516001600160a01b03821633308561172e565b60405163095ea7b360e01b81526001600160a01b0382169063095ea7b39061147f9088908690600401612b48565b602060405180830381600087803b15801561149957600080fd5b505af11580156114ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d19190612ba8565b50846001600160a01b0316637717797f3386866114ed876115b6565b6040516001600160e01b031960e087901b1681526001600160a01b039094166004850152600292830b6024850152910b60448301526064820152608401600060405180830381600087803b15801561154457600080fd5b505af1158015611558573d6000803e3d6000fd5b505050505050505050565b6000826001600160a01b0316846001600160a01b03161115611583579192915b6115ac6115a783600160601b61159988886129fe565b6001600160a01b03166117c2565b6118d5565b90505b9392505050565b60006001600160ff1b038211156116205760405162461bcd60e51b815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2061604482015267371034b73a191a9b60c11b6064820152608401610310565b5090565b600061163b826a1a1601fc4ea7109e0000006118f0565b92915050565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f2182111561168057604051633492ffd960e01b815260048101839052602401610310565b50670de0b6b3a76400000290565b6000826116b35781156116a25760006116ac565b670de0b6b3a76400005b905061163b565b6115af6116c86116c285611905565b846119b5565b6119c1565b6000806116d987611a07565b905060006116e687611a07565b905060006117006116f960018989611a84565b8490611b5e565b9050600061170e8387611b5e565b9050600061171c8284612bc5565b9050670de0b6b3a76400008105610d63565b60006040516323b872dd60e01b81526001600160a01b03851660048201526001600160a01b038416602482015282604482015260008060648360008a5af191505061177881611c23565b6117bb5760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606401610310565b5050505050565b60008080600019858709858702925082811083820303915050806000141561183257600084116118275760405162461bcd60e51b815260206004820152601060248201526f4469766973696f6e206279207a65726f60801b6044820152606401610310565b5082900490506115af565b80841161186c5760405162461bcd60e51b81526020600482015260086024820152676f766572666c6f7760c01b6044820152606401610310565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b806001600160801b03811681146118eb57600080fd5b919050565b60006115af83670de0b6b3a764000084611c6a565b6000670de0b6b3a764000082101561193357604051633621413760e21b815260048101839052602401610310565b6000611948670de0b6b3a76400008404611ccf565b670de0b6b3a7640000808202935090915083821c9081141561196b575050919050565b6706f05b59d3b200005b80156119ad57670de0b6b3a7640000828002049150671bc16d674ec8000082106119a5579283019260019190911c905b60011c611975565b505050919050565b60006115af8383611dad565b6000680a688906bd8b00000082106119ef57604051634a4f26f160e01b815260048101839052602401610310565b670de0b6b3a7640000604083901b046115af81611e6f565b60007809392ee8e921d5d073aff322e62439fcf32d7f344649470f8f19821215611a475760405163e608e18b60e01b815260048101839052602401610310565b7809392ee8e921d5d073aff322e62439fcf32d7f344649470f90821315611680576040516371f72a3160e01b815260048101839052602401610310565b6000828211611abe5760405162461bcd60e51b815260040161031090602080825260049082015263453c3d5360e01b604082015260600190565b6000611ac8612501565b905083811015611b025760405162461bcd60e51b8152602060048201526005602482015264422e543c5360d81b6044820152606401610310565b60008580611b105750838210155b15611b2657611b1f858561285f565b9050611b33565b611b30858361285f565b90505b6000611b3e82611624565b9050611b538168056bc75e2d631000006118f0565b979650505050505050565b6000600160ff1b831480611b755750600160ff1b82145b15611b9357604051630d01a11b60e21b815260040160405180910390fd5b60008060008512611ba45784611ba9565b846000035b915060008412611bb95783611bbe565b836000035b90506000611bcc8383611dad565b90506001600160ff1b03811115611bf95760405163bf79e8d960e01b815260048101829052602401610310565b600019808713908613808218600114611c125782611c17565b826000035b98975050505050505050565b60003d82611c3557806000803e806000fd5b8060208114611c4d578015611c5e5760009250611c63565b816000803e60005115159250611c63565b600192505b5050919050565b600080806000198587098587029250828110838203039150508060001415611ca557838281611c9b57611c9b6128bd565b04925050506115af565b83811061186c57604051631dcf306360e21b81526004810182905260248101859052604401610310565b6000600160801b8210611cef57608091821c91611cec9082612847565b90505b600160401b8210611d0d57604091821c91611d0a9082612847565b90505b600160201b8210611d2b57602091821c91611d289082612847565b90505b620100008210611d4857601091821c91611d459082612847565b90505b6101008210611d6457600891821c91611d619082612847565b90505b60108210611d7f57600491821c91611d7c9082612847565b90505b60048210611d9a57600291821c91611d979082612847565b90505b600282106118eb5761163b600182612847565b60008080600019848609848602925082811083820303915050670de0b6b3a76400008110611df15760405163698d9a0160e11b815260048101829052602401610310565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff811182611e2b5780670de0b6b3a764000085040194505050505061163b565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b600160bf1b6001603f1b821615611e8f5768016a09e667f3bcc9090260401c5b6001603e1b821615611eaa576801306fe0a31b7152df0260401c5b6001603d1b821615611ec5576801172b83c7d517adce0260401c5b6001603c1b821615611ee05768010b5586cf9890f62a0260401c5b6001603b1b821615611efb576801059b0d31585743ae0260401c5b6001603a1b821615611f1657680102c9a3e778060ee70260401c5b600160391b821615611f315768010163da9fb33356d80260401c5b600160381b821615611f4c57680100b1afa5abcbed610260401c5b600160371b821615611f675768010058c86da1c09ea20260401c5b600160361b821615611f82576801002c605e2e8cec500260401c5b600160351b821615611f9d57680100162f3904051fa10260401c5b600160341b821615611fb8576801000b175effdc76ba0260401c5b600160331b821615611fd357680100058ba01fb9f96d0260401c5b600160321b821615611fee5768010002c5cc37da94920260401c5b600160311b821615612009576801000162e525ee05470260401c5b600160301b8216156120245768010000b17255775c040260401c5b6001602f1b82161561203f576801000058b91b5bc9ae0260401c5b6001602e1b82161561205a57680100002c5c89d5ec6d0260401c5b6001602d1b8216156120755768010000162e43f4f8310260401c5b6001602c1b82161561209057680100000b1721bcfc9a0260401c5b6001602b1b8216156120ab5768010000058b90cf1e6e0260401c5b6001602a1b8216156120c6576801000002c5c863b73f0260401c5b600160291b8216156120e157680100000162e430e5a20260401c5b600160281b8216156120fc576801000000b1721835510260401c5b600160271b82161561211757680100000058b90c0b490260401c5b600160261b8216156121325768010000002c5c8601cc0260401c5b600160251b82161561214d576801000000162e42fff00260401c5b600160241b8216156121685768010000000b17217fbb0260401c5b600160231b821615612183576801000000058b90bfce0260401c5b600160221b82161561219e57680100000002c5c85fe30260401c5b600160211b8216156121b95768010000000162e42ff10260401c5b600160201b8216156121d457680100000000b17217f80260401c5b63800000008216156121ef5768010000000058b90bfc0260401c5b634000000082161561220a576801000000002c5c85fe0260401c5b632000000082161561222557680100000000162e42ff0260401c5b6310000000821615612240576801000000000b17217f0260401c5b630800000082161561225b57680100000000058b90c00260401c5b63040000008216156122765768010000000002c5c8600260401c5b6302000000821615612291576801000000000162e4300260401c5b63010000008216156122ac5768010000000000b172180260401c5b628000008216156122c6576801000000000058b90c0260401c5b624000008216156122e057680100000000002c5c860260401c5b622000008216156122fa5768010000000000162e430260401c5b6210000082161561231457680100000000000b17210260401c5b6208000082161561232e5768010000000000058b910260401c5b62040000821615612348576801000000000002c5c80260401c5b6202000082161561236257680100000000000162e40260401c5b6201000082161561237b5761b172600160401b010260401c5b618000821615612393576158b9600160401b010260401c5b6140008216156123ab57612c5d600160401b010260401c5b6120008216156123c35761162e600160401b010260401c5b6110008216156123db57610b17600160401b010260401c5b6108008216156123f35761058c600160401b010260401c5b61040082161561240b576102c6600160401b010260401c5b61020082161561242357610163600160401b010260401c5b61010082161561243a5760b1600160401b010260401c5b6080821615612450576059600160401b010260401c5b604082161561246657602c600160401b010260401c5b602082161561247c576016600160401b010260401c5b601082161561249257600b600160401b010260401c5b60088216156124a8576006600160401b010260401c5b60048216156124be576003600160401b010260401c5b60028216156124d4576001600160401b010260401c5b60018216156124ea576001600160401b010260401c5b670de0b6b3a76400000260409190911c60bf031c90565b600061250c42611641565b905090565b6001600160a01b038116811461252657600080fd5b50565b60006020828403121561253b57600080fd5b81356115af81612511565b60405161014081016001600160401b038111828210171561257757634e487b7160e01b600052604160045260246000fd5b60405290565b8060020b811461252657600080fd5b80356118eb8161257d565b801515811461252657600080fd5b600060c082840312156125b757600080fd5b60405160c081016001600160401b03811182821017156125e757634e487b7160e01b600052604160045260246000fd5b60405282356125f581612511565b815260208301356126058161257d565b602082015260408301356126188161257d565b604082015260608381013590820152608083013561263581612597565b608082015260a0928301359281019290925250919050565b600060e0828403121561265f57600080fd5b60405160e081016001600160401b038111828210171561268f57634e487b7160e01b600052604160045260246000fd5b604052823561269d81612511565b815260208301356126ad81612597565b60208201526040838101359082015260608301356126ca81612511565b606082015260808301356126dd8161257d565b60808201526126ee60a0840161258c565b60a082015260c083013560c08201528091505092915050565b6000806000806080858703121561271d57600080fd5b843561272881612511565b9350602085013561273881612511565b925060408501356127488161257d565b915060608501356127588161257d565b939692955090935050565b6000806040838503121561277657600080fd5b823561278181612511565b946020939093013593505050565b6000602082840312156127a157600080fd5b81516115af81612511565b6000606082840312156127be57600080fd5b604051606081016001600160401b03811182821017156127ee57634e487b7160e01b600052604160045260246000fd5b60405282516127fc81612511565b8152602083015161280c8161257d565b6020820152604083015160ff8116811461282557600080fd5b60408201529392505050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561285a5761285a612831565b500190565b60008282101561287157612871612831565b500390565b60008160020b8360020b6000821282627fffff0382138115161561289c5761289c612831565b82627fffff190382128116156128b4576128b4612831565b50019392505050565b634e487b7160e01b600052601260045260246000fd5b60008160020b8360020b806128ea576128ea6128bd565b627fffff1982146000198214161561290457612904612831565b90059392505050565b6001600160a01b03949094168452600292830b6020850152910b60408301526001600160801b0316606082015260800190565b60006020828403121561295257600080fd5b5051919050565b60006020828403121561296b57600080fd5b81516115af8161257d565b60008160020b8360020b6000811281627fffff190183128115161561299d5761299d612831565b81627fffff0183138116156129b4576129b4612831565b5090039392505050565b60008160020b627fffff198114156129d8576129d8612831565b60000392915050565b6000600160ff1b8214156129f7576129f7612831565b5060000390565b60006001600160a01b0383811690831681811015612a1e57612a1e612831565b039392505050565b60006001600160a01b03828116848216808303821115612a4857612a48612831565b01949350505050565b600080600080600060a08688031215612a6957600080fd5b5050835160208501516040860151606087015160809097015192989197509594509092509050565b80516118eb81612597565b80516001600160801b03811681146118eb57600080fd5b60006101408284031215612ac657600080fd5b612ace612546565b612ad783612a91565b8152612ae560208401612a9c565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b6001600160a01b03929092168252602082015260400190565b6000816000190483118215151615612b7b57612b7b612831565b500290565b600082612b8f57612b8f6128bd565b500490565b600082612ba357612ba36128bd565b500690565b600060208284031215612bba57600080fd5b81516115af81612597565b600080821280156001600160ff1b0384900385131615612be757612be7612831565b600160ff1b8390038412811615612c0057612c00612831565b5050019056fea2646970667358221220e029d8a33afa3747c6471d6717f334c8b0b5f580e5fa9188b5b0cb6c5e123fdc64736f6c63430008090033";

export class Periphery__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Periphery> {
    return super.deploy(overrides || {}) as Promise<Periphery>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Periphery {
    return super.attach(address) as Periphery;
  }
  connect(signer: Signer): Periphery__factory {
    return super.connect(signer) as Periphery__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PeripheryInterface {
    return new utils.Interface(_abi) as PeripheryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Periphery {
    return new Contract(address, _abi, signerOrProvider) as Periphery;
  }
}