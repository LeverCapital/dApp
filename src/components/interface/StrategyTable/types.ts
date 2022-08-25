import { DateTime } from 'luxon';

export type TableFields = 'vault' | 'manager' | 'dailyROI' | 'weeklyROI';

export type TableDatum = {
  id: string;
  protocol: string;
  startDate: DateTime;
  endDate: DateTime;
};
