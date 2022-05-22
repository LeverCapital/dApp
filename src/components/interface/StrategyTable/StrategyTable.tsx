import React, { useMemo } from 'react';
// import { DydxClient } from '@dydxprotocol/v3-client';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { SystemStyleObject, Theme } from '@mui/system';
import { data, AugmentedAMM } from '@utilities';
import { Panel } from '@components/atomic';
import { TableFields } from './types';
import { labels } from './constants';
import { AMMTableFooter, AMMTableHead, StratTableRow } from './components';
import { Agents } from '@components/contexts';
import { getProvider } from '@store';
import { ethers } from 'ethers';
import { useAgent, useWallet } from '@hooks';
import Web3 from 'web3';

export type StrategyTableProps = {
  order: data.TableOrder;
  onSetOrder: (order: data.TableOrder) => void;
  orderBy: TableFields;
  onSetOrderBy: (orderBy: TableFields) => void;
  page: number;
  pages: number;
  onSetPage: (page: number) => void;
  size: number | null;
  onSetSize: (size: number) => void;
};

const StrategyTable: React.FunctionComponent<StrategyTableProps> = ({
  order,
  onSetOrder,
  orderBy,
  onSetOrderBy,
  page,
  pages,
  onSetPage,
  size,
  onSetSize,
}) => {
  const commonOverrides: SystemStyleObject<Theme> = {
    '& .MuiTableCell-root': {
      borderColor: 'transparent',
      paddingRight: (theme) => theme.spacing(4),
      paddingLeft: (theme) => theme.spacing(4),
      paddingTop: (theme) => theme.spacing(3),
      paddingBottom: (theme) => theme.spacing(4),
      '&:first-of-type': {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
      },
      '&:last-of-type': {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
      },
    },
    '.MuiInputLabel-root': {
      marginBottom: (theme) => theme.spacing(1),
    },
  };
  const handleSort = (field: TableFields) => {
    onSetOrder(field === orderBy ? (order === 'asc' ? 'desc' : 'asc') : 'asc');
    onSetOrderBy(field);
  };
  const wallet = useWallet();

  const handleSelectRow = (index: number) => () => {
    // Send 2000 USDC to my account
    // Connect to the contract
    var contractAddress = '0x07865c6E87B9F70255377e024ace6630C1Eaa37F';
    // Our trading account address
    var targetAddress = '0xC2FdE45f9E0a77005493930f72819Fcf70210464';
    var contractAbiFragment = [
      {
        name: 'transfer',
        type: 'function',
        inputs: [
          {
            name: '_to',
            type: 'address',
          },
          {
            type: 'uint256',
            name: '_tokens',
          },
        ],
        constant: false,
        outputs: [],
        payable: false,
      },
    ];
    const provider = new ethers.providers.Web3Provider(Web3.givenProvider, 'any');
    const signer = provider.getSigner();
    var contract = new ethers.Contract(contractAddress, contractAbiFragment, signer);

    // How many tokens?
    var numberOfDecimals = 6;
    var numberOfTokens = ethers.utils.parseUnits('200.0', numberOfDecimals);

    // Send tokens
    contract.transfer(targetAddress, numberOfTokens).then(function (tx: any) {
      console.log(tx);
    });
    // Ask for testnet tokens on that account!
    //  Time to add some deposit logic here!
    // const web3 = new Web3(Web3.givenProvider);

    // const client: DydxClient = new DydxClient('https://api.stage.dydx.exchange', {
    //   apiTimeout: 3000,
    //   web3Provider: Web3.givenProvider,
    // });
  };

  const { agent } = useAgent();
  const _variant = agent === Agents.LIQUIDITY_PROVIDER ? 'darker' : 'dark';

  return (
    <Panel
      variant={_variant}
      borderRadius="large"
      padding="container"
      sx={{ paddingTop: 0, paddingBottom: 0 }}
    >
      <TableContainer>
        <Table
          sx={{
            borderCollapse: 'separate',
            borderSpacing: '0px 16px',
            ...commonOverrides,
          }}
          aria-labelledby="tableTitle"
          size="medium"
        >
          <AMMTableHead order={order} orderBy={orderBy} onSort={handleSort} />
          <TableBody sx={{ position: 'relative', top: (theme) => `-${theme.spacing(3)}` }}>
            <StratTableRow index={0} onSelect={handleSelectRow(0)} />
          </TableBody>
          <AMMTableFooter
            columns={labels.length + 1}
            pages={pages}
            page={page}
            onChangePage={onSetPage}
            size={size}
            onChangeSize={onSetSize}
          />
        </Table>
      </TableContainer>
    </Panel>
  );
};

export default StrategyTable;
