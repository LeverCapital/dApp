import React from 'react';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';

export type AMMTableFooterProps = {
  columns: number;
  pages: number;
  page: number;
  onChangePage: (page: number) => void;
  size: number | null;
  onChangeSize: (size: number) => void;
};

const AMMTableFooter: React.FunctionComponent<AMMTableFooterProps> = ({ columns }) => {
  if (columns) {
    return null;
  }

  return (
    <TableFooter>
      <TableRow>
        <TableCell colSpan={columns}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>Hello there</Box>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
};

export default AMMTableFooter;
