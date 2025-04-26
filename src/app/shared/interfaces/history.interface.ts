export interface HistoryElement {
  number: number;
  values: HistoryValue[];
}

export interface HistoryValue {
  value: number;
  color: 'green' | 'red' | 'blue' | 'black';
}
