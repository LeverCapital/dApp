import React, { useEffect } from 'react';
import isUndefined from 'lodash/isUndefined';

import { useAMMContext } from '@hooks';
import { Typography } from '@components/atomic';
import { IconLabel } from '@components/composite';

export type MintBurnMinimumMarginAmountProps = {
  fixedLow?: number;
  fixedHigh?: number;
  notional?: number;
};

const MintBurnMinimumMarginAmount: React.FunctionComponent<MintBurnMinimumMarginAmountProps> = ({
  fixedLow,
  fixedHigh,
  notional,
}) => {
  const { mintMinimumMarginRequirement } = useAMMContext();
  const { result, loading, call } = mintMinimumMarginRequirement;

  useEffect(() => {
    if (!isUndefined(fixedLow) && !isUndefined(fixedHigh) && !isUndefined(notional)) {
      call({ fixedLow, fixedHigh, notional });
    }
  }, [call, fixedLow, fixedHigh, notional]);

  const renderMarginAmount = () => {
    if (loading) {
      return 'Loading...';
    }

    if (!result) {
      return '0';
    }

    return result.toFixed(2);
  };

  return (
    <Typography
      variant="h3"
      label={
        <IconLabel
          label="minimum required margin"
          icon="information-circle"
          info="Your minimum required margin is defined based on your leverage and notional amount traded. You are required to deposit margin in order to execute a trade."
        />
      }
    >
      {renderMarginAmount()}
    </Typography>
  );
};

export default MintBurnMinimumMarginAmount;
