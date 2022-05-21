import { DateTime } from 'luxon';

export type TableFields = 'strategy' | 'dailyROI' | 'weeklyROI';

export type TableDatum = {
  id: string;
  protocol: string;
  startDate: DateTime;
  endDate: DateTime;
};
