import { TableFields } from './types';

export const TableLabels: Record<TableFields, string> = {
  strategy: 'Strategy',
  dailyROI: 'Est Daily ROI',
  weeklyROI: 'Est Weekly ROI',
};

export const labels: [TableFields, string][] = [
  ['strategy', TableLabels.strategy],
  ['dailyROI', TableLabels.dailyROI],
  ['weeklyROI', TableLabels.weeklyROI],
];
