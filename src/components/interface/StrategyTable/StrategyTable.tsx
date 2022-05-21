import React, { useMemo } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { SystemStyleObject, Theme } from '@mui/system';
import { data, AugmentedAMM } from '@utilities';
import { Panel } from '@components/atomic';
import { TableFields } from './types';
import { labels } from './constants';
import { AMMTableFooter, AMMTableHead, StratTableRow } from './components';
import { useAgent } from '@hooks';
import { Agents } from '@components/contexts';

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

  const handleSelectRow = (index: number) => () => {
    console.debug('Deposit button clicked!');
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
