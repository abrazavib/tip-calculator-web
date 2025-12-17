export type Tip =
  | { type: 'none' }
  | { type: 'tenPercent' }
  | { type: 'fifteenPercent' }
  | { type: 'twentyPercent' }
  | { type: 'custom'; value: number };
