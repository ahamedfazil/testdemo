import IStore from "../store/IStore";
import * as IActions from "../actions/IActions";
import { ITicketDictionary } from "./ITicketState";

export interface ITicketProps {
  readonly store?: IStore;
  getTicketDictionaryInProgress?: () => IActions.IGetTicketDictionaryActionInProgress;
  getTicketDictionarySuccess?: (
    ticketDictionary: ITicketDictionary
  ) => IActions.IGetTicketDictionaryActionSuccess;
  getTicketDictionaryError?: (
    error: Error
  ) => IActions.IGetTicketDictionaryActionError;
}
