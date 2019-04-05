import {
    IGetCurrentUserAction,
    IGetCurrentUserActionSuccess,
    IGetCurrentUserActionError,
    IGetUserInfoAction,
    IGetUserInfoActionSuccess,
    IGetUserInfoActionError
} from './IUserActions'
import { 
    IAddTicketActionInProgress, 
    IAddTicketActionSuccess,
    IAddTicketActionError,
    IUpdateTicketAction, 
    IRemoveTicketAction } from './ITicketActions';

type ActionTypes =
| IGetCurrentUserAction
| IGetCurrentUserActionSuccess
| IGetCurrentUserActionError
| IGetUserInfoAction
| IGetUserInfoActionSuccess
| IGetUserInfoActionError
| IAddTicketActionInProgress
| IAddTicketActionInProgress
| IAddTicketActionSuccess
| IAddTicketActionError
| IRemoveTicketAction
| IUpdateTicketAction

export default ActionTypes