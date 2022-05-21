import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { SystemStyleObject, Theme } from '@mui/system';
import isNull from 'lodash/isNull';

import { Agents } from '@components/contexts';
import { Button, Typography } from '@components/atomic';
import { useAgent, useWallet } from '@hooks';
import { labels } from '../../constants';
import { Label } from '@mui/icons-material';

export type StratTableRowProps = {
  index: number;
  onSelect: () => void;
};

// todo: panel component, adjust the styling
const StratTableRow: React.FunctionComponent<StratTableRowProps> = ({ index, onSelect }) => {
  const wallet = useWallet();
  const { agent } = useAgent();
  const variant = agent === Agents.LIQUIDITY_PROVIDER ? 'darker' : 'main';

  // add object to sx prop
  // todo:
  //
  // const anotherObject = {
  //   margin: ...
  // }

  const typeStyleOverrides = (): SystemStyleObject<Theme> => {
    if (!variant) {
      return {
        backgroundColor: `primary.dark`,
      };
    }

    switch (variant) {
      case 'main':
        return {
          backgroundColor: `secondary.darken040`, // this affects the colour of the Pool table rows
          borderRadius: 2,
        };

      case 'darker':
        return {
          backgroundColor: `secondary.darken045`,
          borderRadius: 2,
        };

      default:
        return {};
    }
  };

  const handleClick = () => {
    if (isNull(wallet.account)) {
      wallet.setRequired(true);
    } else {
      onSelect();
    }
  };

  return (
    // todo: <TableRow key={index} sx={{...anotherObject,  ...typeStyleOverrides() }}>
    <TableRow key={index} sx={{ ...typeStyleOverrides() }}>
      {labels.map(([field, label]) => {
        if (field === 'strategy') {
          return (
            <TableCell>
              <Typography variant="body2" label={label} agentStyling sx={{ fontSize: 18 }}>
                Zeno
              </Typography>
            </TableCell>
          );
        }

        if (field === 'dailyROI') {
          return (
            <TableCell>
              <Typography variant="body2" label={label} agentStyling sx={{ fontSize: 18 }}>
                1.01%
              </Typography>
            </TableCell>
          );
        }

        if (field === 'weeklyROI') {
          return (
            <TableCell>
              <Typography variant="body2" label={label} agentStyling sx={{ fontSize: 18 }}>
                8.5%
              </Typography>
            </TableCell>
          );
        }
      })}
      <TableCell align="center">
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            paddingTop: (theme) => theme.spacing(3),
            paddingBottom: (theme) => theme.spacing(3),
            paddingLeft: (theme) => theme.spacing(4),
            paddingRight: (theme) => theme.spacing(4),
            fontSize: 18,
            lineHeight: 1,
            boxShadow: 'none',
          }}
        >
          {'DEPOSIT'}
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default StratTableRow;
