import React, { useState } from 'react';

import { data } from '@utilities';
import { StrategyTable, TableFields } from '@components/interface';

export type ConnectedStratTableProps = {};

const ConnectedStratTable: React.FunctionComponent<ConnectedStratTableProps> = () => {
  const [order, setOrder] = useState<data.TableOrder>('desc');
  const [orderBy, setOrderBy] = useState<TableFields>('vault');
  const [page, setPage] = useState(0);
  const [size, setSize] = useState<number | null>(null);

  const pages = 0;

  return (
    <StrategyTable
      order={order}
      onSetOrder={setOrder}
      orderBy={orderBy}
      onSetOrderBy={setOrderBy}
      page={page}
      pages={pages}
      onSetPage={setPage}
      size={size}
      onSetSize={setSize}
    />
  );
};

export default ConnectedStratTable;
