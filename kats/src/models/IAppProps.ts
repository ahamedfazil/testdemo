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
    getUsersInProgress?: () =>IActions.IGetUsersActionInProgress;
    getUsersSuccess?: (
        userVal:IUserState) =>IActions.IGetUsersActionSuccess;
    getUsersError?: (error:Error ) => IActions.IGetUsersActionError;
    addTicketInProgress?:(
        newTicket:ICurrentTicketState,
        listName:string
        ) => ITicketActions.IAddTicketActionInProgress;
    addTicketError?: (error:Error) => ITicketActions.IAddTicketActionError;
    addTicketSuccess?: () => ITicketActions.IAddTicketActionSuccess;
    getDictionaryInProgress?:()=>IDictionaryActions.IGetDictionaryActionInProgress;
    getDictionarySuccess?:(
        newItem: DictionaryItem
    ) =>IDictionaryActions.IGetDictionaryActionSuccess;
    getDictionaryError?:(error:Error) =>IDictionaryActions.IGetDictionaryActionError;
}