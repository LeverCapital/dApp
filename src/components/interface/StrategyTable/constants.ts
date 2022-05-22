import { TableFields } from './types';

export const TableLabels: Record<TableFields, string> = {
  strategy: 'Strategy',
  dailyROI: 'Last 24hrs ROI',
  weeklyROI: 'Last week ROI',
};

export const labels: [TableFields, string][] = [
  ['strategy', TableLabels.strategy],
  ['dailyROI', TableLabels.dailyROI],
  ['weeklyROI', TableLabels.weeklyROI],
];
