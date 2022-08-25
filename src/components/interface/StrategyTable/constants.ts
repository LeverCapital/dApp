import { TableFields } from './types';

export const TableLabels: Record<TableFields, string> = {
  vault: 'Vault',
  manager: 'Managed by',
  dailyROI: 'Last 24hrs ROI',
  weeklyROI: 'Last week ROI',
};

export const labels: [TableFields, string][] = [
  ['vault', TableLabels.vault],
  ['manager', TableLabels.manager],
  ['dailyROI', TableLabels.dailyROI],
  ['weeklyROI', TableLabels.weeklyROI],
];
