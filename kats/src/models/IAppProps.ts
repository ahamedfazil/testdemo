import IStore from '../store/IStore';
import { IUserState } from '../models/IUser'
import * as IActions from '../actions/IUserActions';
import * as ITicketActions from '../actions/ITicketActions';
import { ICurrentTicketState } from './ITicket';
import * as IDictionaryActions from '../actions/IDictionaryActions';
import { IDictionaryItem, IDictionaryState } from './IDictionary';

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
        newItems: IDictionaryState,
        listName:string
    ) =>IDictionaryActions.IGetDictionaryActionSuccess;
    getEngagementTypeSuccess?:(
        newItems: IDictionaryState,
        listName:string
    ) =>IDictionaryActions.IGetEngagementTypeSuccess;
    getAccountingFramework?:(
        newItems: IDictionaryState,
        listName:string
    ) =>IDictionaryActions.IGetAccountingFrameworkSuccess;
    getAuditingStandardSuccess?:(
        newItems: IDictionaryState,
        listName:string
    ) =>IDictionaryActions.IGetAuditingStandardSuccess;
    getCategorySuccess?:(
        newItems: IDictionaryState,
        listName:string
    ) =>IDictionaryActions.IGetCategorySuccess;
    getTopicSuccess?:(
        newItems: IDictionaryState,
        listName:string
    ) =>IDictionaryActions.IGetTopicSuccess;
    getTicketTypeSuccess?:(
        newItems: IDictionaryState,
        listName:string
    ) =>IDictionaryActions.IGetTicketTypeSuccess;
    getStatusSuccess?:(
        newItems: IDictionaryState,
    ) =>IDictionaryActions.IGetStatusSuccess;
    
    
    getDictionaryError?:(error:Error) =>IDictionaryActions.IGetDictionaryActionError;

}