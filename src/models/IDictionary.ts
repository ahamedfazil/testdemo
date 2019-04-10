export interface IDictionaryState {
  isFetched: boolean;
  isInitialised: boolean;
  name?: string;
  error?: any;
  results: IDictionaryItem[];
}

// export interface IDictionaryState {
//     results: IDictionaryItem[];
// }

export interface IDictionaryItem {
  id: number;
  title: string;
}
