import {
    IGetCurrentUserAction,
    IGetCurrentUserActionSuccess,
    IGetCurrentUserActionError,
    IGetUsersActionInProgress,
    IGetUsersActionSuccess,
    IGetUsersActionError
} from './IUserActions'
import { 
    IAddTicketActionInProgress, 
    IAddTicketActionSuccess,
    IAddTicketActionError,
    IUpdateTicketAction, 
    IRemoveTicketAction } from './ITicketActions';
import { IGetDictionaryActionInProgress, IGetDictionaryActionSuccess, IGetDictionaryActionError } from './IDictionaryActions';

type ActionTypes =
| IGetCurrentUserAction
| IGetCurrentUserActionSuccess
| IGetCurrentUserActionError
| IGetUsersActionInProgress
| IGetUsersActionSuccess
| IGetUsersActionError
| IAddTicketActionInProgress
| IAddTicketActionInProgress
| IAddTicketActionSuccess
| IAddTicketActionError
| IRemoveTicketAction
| IUpdateTicketAction
| IGetDictionaryActionInProgress
| IGetDictionaryActionSuccess
| IGetDictionaryActionError

export default ActionTypes