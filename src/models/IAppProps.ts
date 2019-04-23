import IStore from "../store/IStore";
import { ICurrentUserState } from "./IUserState";
import * as IActions from "../actions/IActions";
import { Dispatch } from "redux";
import { RouterState } from "react-router-redux";
import { RouteComponentProps } from "react-router-dom";

export interface IAppProps extends RouteComponentProps<any> {
  store: IStore;
  getCurrentUserInProgress: () => IActions.IGetUserActionInProgress;
  getCurrentUserSuccess: (
    userVal: ICurrentUserState
  ) => IActions.IGetUserActionSuccess;
  getCurrentUserError: (error: Error) => IActions.IGetUserActionError;
  onChangePath: (key: string) => Dispatch<RouterState>;
}
