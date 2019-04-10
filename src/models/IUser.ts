export interface IUser {
  isInitialised: boolean;
  isFetched: boolean;
  isError: boolean;
  currentUser: IUserState;
  otherUsers: IUserState[];
}

export interface IUserState {
  isSupportUser: boolean;
  isUser: boolean;
  id: number;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  title: string;
  loginName: string;
  department: string;
  memberOf: string[];
  office: string;
  officeNumber: number;
}
