export interface ISiteState {
  siteInfo: ISiteInfo;
}

export interface ISiteInfo {
  isFetched: boolean;
  error?: any;
  serverRelativeURL: string;
  itemID: number;
  isNewForm?: boolean;
  isEditForm?: boolean;
  isViewForm?: boolean;
}
