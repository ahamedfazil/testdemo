import { IUserState } from "../models/IUser";

export const InitialUserState: IUserState = {
  isSupportUser: false,
  isUser: false,
  id: null,
  name: "",
  email: "",
  firstName: "",
  lastName: "",
  title: "",
  loginName: "",
  department: "",
  memberOf: [],
  office: "",
  officeNumber: null
};
