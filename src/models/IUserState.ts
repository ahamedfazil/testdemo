export interface IUserState {
  isInitialised: boolean;
  error?: any;
  currentUser: ICurrentUserState;
}

export interface ICurrentUserState {
  isFetched: boolean;
  isSupportUser: boolean;
  isUser: boolean;
  id: number;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  title: string;
  loginName: string;
  accountName: string;
  department: string;
  managerId: string;
  memberOf: string[];
  office: string;
  officeNumber: number
}
