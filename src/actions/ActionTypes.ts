import {
  IGetUserActionError,
  IGetUserActionSuccess,
  IGetUserActionInProgress,
  IGetTicketDictionaryActionError,
  IGetTicketDictionaryActionInProgress,
  IGetTicketDictionaryActionSuccess
} from "./IActions";

type ActionTypes =
  | IGetUserActionInProgress
  | IGetUserActionSuccess
  | IGetUserActionError

  | IGetTicketDictionaryActionInProgress
  | IGetTicketDictionaryActionSuccess
  | IGetTicketDictionaryActionError;

export default ActionTypes;
