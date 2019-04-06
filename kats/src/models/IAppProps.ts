import IStore from '../store/IStore';
import { IUserState } from '../models/User'
import * as IActions from '../actions/IUserActions';
import * as ITicketActions from '../actions/ITicketActions';
import { ICurrentTicketState } from './ITicket';
import * as IDictionaryActions from '../actions/IDictionaryActions';
import { DictionaryItem } from './IDictionary';

export interface IAppProps {
    store?:IStore;
    getCurrentUser?: () =>IActions.IGetCurrentUserAction;
    getCurrentUserSuccess?: (
        userVal:IUserState) =>IActions.IGetCurrentUserActionSuccess;
    getCurrentUserError?: (
        error:Error ) => IActions.IGetCurrentUserActionError;
    getUserInfo?: () =>IActions.IGetUserInfoAction;
    getUserInfoSuccess?: (
        userVal:IUserState) =>IActions.IGetUserInfoActionSuccess;
    getUserInfoError?: (error:Error ) => IActions.IGetUserInfoActionError;
    addTicketInProgress?:(
        newTicket:ICurrentTicketState,
        listName:string
        ) => ITicketActions.IAddTicketActionInProgress;
    addTicketError?: (error:Error) => ITicketActions.IAddTicketActionError;
    addTicketSuccess?: () => ITicketActions.IAddTicketActionSuccess;
    getDictionaryInProgress?:()=>IDictionaryActions.IGetDictionaryInProgress;
    getDictionarySuccess?:(
        newItem: DictionaryItem
    ) =>IDictionaryActions.IGetDictionarySuccess;
    getDictionaryError?:(error:Error) =>IDictionaryActions.IGetDictionaryError;
}