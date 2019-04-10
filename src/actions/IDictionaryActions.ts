import { Action } from "redux";
import keys from "./ActionTypeKey";
import { IDictionaryState, IDictionaryItem } from "../models/IDictionary";

export interface IGetDictionaryActionInProgress extends Action {
  readonly type: keys.GET_CURRENT_DICTIONARY_INPROGRESS;
}

export interface IGetDictionaryActionSuccess extends Action {
  type: keys.GET_CURRENT_DICTIONARY_SUCCESS;
  payload: {
    results: IDictionaryState;
    listName: string;
  };
}

export interface IGetDictionaryActionError extends Action {
  readonly type: keys.GET_CURRENT_DICTIONARY_ERROR;
  payload: {
    error: Error;
  };
}
export interface IGetEngagementTypeSuccess extends Action {
  type: keys.GET_ENGAGEMENTTYPE_SUCCESS;
  payload: {
    results: IDictionaryState;
    listName: string;
  };
}

export interface IGetAccountingFrameworkSuccess extends Action {
  type: keys.GET_ACCOUNTINGFRAMEWORK_SUCCESS;
  payload: {
    results: IDictionaryItem[];
  };
}

export interface IGetAuditingStandardSuccess extends Action {
  type: keys.GET_AUDITINGSTANDARD_SUCCESS;
  payload: {
    results: IDictionaryState;
    listName: string;
  };
}
export interface IGetCategorySuccess extends Action {
  type: keys.GET_CATEGORY_SUCCESS;
  payload: {
    results: IDictionaryState;
    listName: string;
  };
}

export interface IGetTopicSuccess extends Action {
  type: keys.GET_TOPIC_SUCCESS;
  payload: {
    results: IDictionaryState;
    listName: string;
  };
}

export interface IGetTicketTypeSuccess extends Action {
  type: keys.GET_TICKETTYPE_SUCCESS;
  payload: {
    results: IDictionaryState;
    listName: string;
  };
}

export interface IGetStatusSuccess extends Action {
  type: keys.GET_STATUS_SUCCESS;
  payload: {
    results: IDictionaryItem[];
  };
}
