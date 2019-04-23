import * as IActions from "../actions/IActions";
import { ITicketDictionary } from "./ITicketState";
import { ICurrentUserState } from "./IUserState";
import { ISiteProps } from "./ISiteProps";

export interface ITicketProps extends ISiteProps {
  getTicketDictionaryInProgress?: () => IActions.IGetTicketDictionaryActionInProgress;
  getTicketDictionarySuccess?: (
    ticketDictionary: ITicketDictionary
  ) => IActions.IGetTicketDictionaryActionSuccess;
  getTicketDictionaryError?: (
    error: Error
  ) => IActions.IGetTicketDictionaryActionError;
  getCurrentUserSuccess: (
    userVal: ICurrentUserState
  ) => IActions.IGetUserActionSuccess;
}
