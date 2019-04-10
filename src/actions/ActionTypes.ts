import {
  IGetCurrentUserAction,
  IGetCurrentUserActionSuccess,
  IGetCurrentUserActionError,
  IGetUsersActionInProgress,
  IGetUsersActionSuccess,
  IGetUsersActionError
} from "./IUserActions";
import {
  IAddTicketActionInProgress,
  IAddTicketActionSuccess,
  IAddTicketActionError,
  IUpdateTicketAction,
  IRemoveTicketAction
} from "./ITicketActions";
import {
  IGetDictionaryActionInProgress,
  IGetDictionaryActionSuccess,
  IGetDictionaryActionError,
  IGetEngagementTypeSuccess,
  IGetAccountingFrameworkSuccess,
  IGetAuditingStandardSuccess,
  IGetCategorySuccess,
  IGetTopicSuccess,
  IGetStatusSuccess,
  IGetTicketTypeSuccess
} from "./IDictionaryActions";

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
  | IGetEngagementTypeSuccess
  | IGetAccountingFrameworkSuccess
  | IGetAuditingStandardSuccess
  | IGetCategorySuccess
  | IGetTicketTypeSuccess
  | IGetTopicSuccess
  | IGetStatusSuccess;

export default ActionTypes;
