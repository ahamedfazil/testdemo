export interface ISiteState {
  siteInfo: ISite;
  error?: any;
}

export interface ISite {
  isFetched: boolean;
  serverRelativeURL: string;
  itemID: number;
  isNewForm?: boolean;
  isEditForm?: boolean;
  isViewForm?: boolean;
}
