import React from 'react';

import { Agents } from '@components/contexts';
import { Button } from '@components/atomic';
import { useAgent } from '@hooks';

export type SubmitSwapFormButtonProps = {
  marginEditMode?: boolean;
  onSubmit: () => void;
};

const SubmitSwapFormButton: React.FunctionComponent<SubmitSwapFormButtonProps> = ({ marginEditMode, onSubmit }) => {
  const { agent } = useAgent();
  
  const submitLabel = (): string | null => {
    switch (agent) {
      case Agents.FIXED_TRADER:
        return 'Trade Fixed Rate';

      case Agents.VARIABLE_TRADER:
        return 'Trade Variable Rate';

      default:
        return null;
    }
  };
  

  return (
    <Button size="large" onClick={onSubmit}>
      {marginEditMode ? "Update Margin" : submitLabel()}
    </Button>
  );
};

export default SubmitSwapFormButton;
