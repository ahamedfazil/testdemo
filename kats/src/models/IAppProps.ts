import IStore from '../store/IStore';
import { IUserState } from '../models/User'
import * as IActions from '../actions/IUserActions';

export interface IAppProps {
    store:IStore;
    getCurrentUser: () =>IActions.IGetCurrentUserAction;
    getCurrentUserSuccess: (
        userVal:IUserState) =>IActions.IGetCurrentUserActionSuccess;
    getCurrentUserError: (error:Error ) => IActions.IGetCurrentUserActionError;
    getUserInfo: () =>IActions.IGetUserInfoAction;
    getUserInfoSuccess: (
        userVal:IUserState) =>IActions.IGetUserInfoActionSuccess;
    getUserInfoError: (error:Error ) => IActions.IGetUserInfoActionError;
}