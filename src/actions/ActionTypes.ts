import {
  IGetUserActionError,
  IGetUserActionSuccess,
  IGetUserActionInProgress,
  IGetTicketDictionaryActionError,
  IGetTicketDictionaryActionInProgress,
  IGetTicketDictionaryActionSuccess,
  IGetSiteActionInProgress,
  IGetSiteActionSuccess,
  IGetSiteActionError
} from "./IActions";

type ActionTypes =
  | IGetUserActionInProgress
  | IGetUserActionSuccess
  | IGetUserActionError

  | IGetSiteActionInProgress
  | IGetSiteActionSuccess
  | IGetSiteActionError

  | IGetTicketDictionaryActionInProgress
  | IGetTicketDictionaryActionSuccess
  | IGetTicketDictionaryActionError;

export default ActionTypes;
