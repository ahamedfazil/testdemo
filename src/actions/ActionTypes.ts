import {
  IGetUserActionError,
  IGetUserActionSuccess,
  IGetUserActionInProgress,
  IGetTicketDictionaryActionError,
  IGetTicketDictionaryActionInProgress,
  IGetTicketDictionaryActionSuccess,
  IGetSiteActionInProgress,
  IGetSiteActionSuccess,
  IGetSiteActionError,
  IUpdateSiteInfo
} from "./IActions";

type ActionTypes =
  | IGetUserActionInProgress
  | IGetUserActionSuccess
  | IGetUserActionError

  | IUpdateSiteInfo
  | IGetSiteActionInProgress
  | IGetSiteActionSuccess
  | IGetSiteActionError

  | IGetTicketDictionaryActionInProgress
  | IGetTicketDictionaryActionSuccess
  | IGetTicketDictionaryActionError;

export default ActionTypes;
