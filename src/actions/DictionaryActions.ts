import keys from "./ActionTypeKey";
import "whatwg-fetch";
import { IDictionaryState, IDictionaryItem } from "../models/IDictionary";
import * as IDictionaryActions from "./IDictionaryActions";

export function getDictionaryInProgress(): IDictionaryActions.IGetDictionaryActionInProgress {
  return {
    type: keys.GET_CURRENT_DICTIONARY_INPROGRESS
  };
}

export function getDictionarySuccess(
  results: IDictionaryState,
  listName: string
): IDictionaryActions.IGetDictionaryActionSuccess {
  return {
    type: keys.GET_CURRENT_DICTIONARY_SUCCESS,
    payload: {
      results,
      listName
    }
  };
}

export function getEngagementTypeSuccess(
  results: IDictionaryState,
  listName: string
): IDictionaryActions.IGetEngagementTypeSuccess {
  return {
    type: keys.GET_ENGAGEMENTTYPE_SUCCESS,
    payload: {
      results,
      listName
    }
  };
}

export function getAccountingFrameworkSuccess(
  results: IDictionaryItem[]
): IDictionaryActions.IGetAccountingFrameworkSuccess {
  return {
    type: keys.GET_ACCOUNTINGFRAMEWORK_SUCCESS,
    payload: {
      results
    }
  };
}

export function getAuditingStandardSuccess(
  results: IDictionaryState,
  listName: string
): IDictionaryActions.IGetAuditingStandardSuccess {
  return {
    type: keys.GET_AUDITINGSTANDARD_SUCCESS,
    payload: {
      results,
      listName
    }
  };
}

export function getCategorySuccess(
  results: IDictionaryState,
  listName: string
): IDictionaryActions.IGetCategorySuccess {
  return {
    type: keys.GET_CATEGORY_SUCCESS,
    payload: {
      results,
      listName
    }
  };
}

export function getTicketTypeSuccess(
  results: IDictionaryState,
  listName: string
): IDictionaryActions.IGetTicketTypeSuccess {
  return {
    type: keys.GET_TICKETTYPE_SUCCESS,
    payload: {
      results,
      listName
    }
  };
}

export function getTopicSuccess(
  results: IDictionaryState,
  listName: string
): IDictionaryActions.IGetTopicSuccess {
  return {
    type: keys.GET_TOPIC_SUCCESS,
    payload: {
      results,
      listName
    }
  };
}

export function getStatusSuccess(
  results: IDictionaryItem[]
): IDictionaryActions.IGetStatusSuccess {
  return {
    type: keys.GET_STATUS_SUCCESS,
    payload: {
      results
    }
  };
}

export function getDictionaryError(
  error: Error
): IDictionaryActions.IGetDictionaryActionError {
  return {
    type: keys.GET_CURRENT_DICTIONARY_ERROR,
    payload: {
      error
    }
  };
}

// // export interface IDictionary {
// //     results: IDictionaryState;
// // }

// export const selectEngagementType = item => ({
//   type: C.SELECT_ENGAGEMENT_TYPE,
//   payload: item
// });

// export const receiveEngagementTypes = items => ({
//   type: C.RECEIVE_ENGAGEMENT_TYPES,
//   payload: items
// });

// // export const getAllEngagementTypes = (props:IAppProps) => {
// //     let listName = 'Engagement%20Type';
// //     //Dispatch IDictionaryState action
// //     props.getDictionaryInProgress();

// //     fetchDictionary(`${listName}`)
// //         .then(function (response) {
// //             return response.text()

// //         }).then(function (text) {
// //             let dictionary = dictionaryParse(text);

// //             //Dispatch success
// //             props.getDictionarySuccess(dictionary,listName)
// //             // dispatch(receiveEngagementTypes(dictionaryItems.results))

// //         })
// // }

// export const addEngTypeFromState = itemId => ({
//   type: C.SELECT_ENGAGEMENT_TYPE,
//   payload: itemId
// });

// export const addEngTypeToTicket = itemId => (dispatch, getState) => {
//   if (getState().engagementType.byId > 0) {
//     dispatch(addEngTypeFromState(itemId));
//   }
// };

// //Accounting Framework action types
// export const SELECT_ACCOUNTING_FRAMEWORK = "SELECT_ACCOUNTING_FRAMEWORK";
// export const RECEIVE_ACCOUNTING_FRAMEWORK = "RECEIVE_ACCOUNTING_FRAMEWORK";

// //Accounting Framework action creators
// export const selectAccountingFramework = item => ({
//   type: SELECT_ACCOUNTING_FRAMEWORK,
//   payload: item
// });

// export const receiveAccountingFrameworks = items => ({
//   type: RECEIVE_ACCOUNTING_FRAMEWORK,
//   payload: items
// });

// // export const getAllAccountingFrameworks = () => dispatch => {
// //     fetchDictionary('Accounting%20Framework')
// //         .then(function (response) {
// //             return response.text()

// //         }).then(function (text) {
// //             let dictionaryItems = dictionaryParse(text);
// //             dispatch(receiveAccountingFrameworks(dictionaryItems.results))

// //         })
// // }

// export const addAccFramwkFromState = itemId => ({
//   type: SELECT_ACCOUNTING_FRAMEWORK,
//   payload: itemId
// });

// export const addAccFramwkToTicket = itemId => (dispatch, getState) => {
//   if (getState().accountingFrameworks.byId > 0) {
//     dispatch(addAccFramwkFromState(itemId));
//   }
// };

// //Auditing standards

// //Action types
// export const SELECT_AUDITING_STANDARDS = "SELECT_AUDITING_STANDARDS";
// export const RECEIVE_AUDITING_STANDARDS = "RECEIVE_AUDITING_STANDARDS";

// //Action creators
// export const selectAuditingStandards = item => ({
//   type: SELECT_AUDITING_STANDARDS,
//   payload: item
// });

// export const receiveAuditingStandards = items => ({
//   type: RECEIVE_AUDITING_STANDARDS,
//   payload: items
// });

// // export const getAllAuditingStandards = () => dispatch => {
// //     fetchDictionary('Auditing%20Standard')
// //         .then(function (response) {
// //             return response.text()

// //         }).then(function (text) {
// //             let dictionaryItems = dictionaryParse(text);
// //             dispatch(receiveAuditingStandards(dictionaryItems.results))

// //         })
// // }

// export const addAudStandFromState = itemId => ({
//   type: SELECT_AUDITING_STANDARDS,
//   payload: itemId
// });

// export const addAudStandToTicket = itemId => (dispatch, getState) => {
//   if (getState().auditingStandards.byId > 0) {
//     dispatch(addAudStandFromState(itemId));
//   }
// };

// //Category
// //Action types
// export const SELECT_CATEGORY = "SELECT_CATEGORY";
// export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";

// //Action creators
// export const selectCategory = item => ({
//   type: SELECT_CATEGORY,
//   payload: item
// });

// export const receiveCategory = items => ({
//   type: RECEIVE_CATEGORY,
//   payload: items
// });

// // export const getAllCategories = () => dispatch => {
// //     fetchDictionary('Category')
// //         .then(function (response) {
// //             return response.text()

// //         }).then(function (text) {
// //             let dictionaryItems = dictionaryParse(text);
// //             dispatch(receiveCategory(dictionaryItems.results))

// //         })
// // }

// export const addCategoryFromState = itemId => ({
//   type: SELECT_CATEGORY,
//   payload: itemId
// });

// export const addCategoryToTicket = itemId => (dispatch, getState) => {
//   if (getState().category.byId > 0) {
//     dispatch(addCategoryFromState(itemId));
//   }
// };

// //Topic
// //Action types
// export const SELECT_TOPIC = "SELECT_TOPIC";
// export const RECEIVE_TOPIC = "RECEIVE_TOPIC";

// //Action creators
// export const selectTopic = item => ({
//   type: SELECT_TOPIC,
//   payload: item
// });

// export const receiveTopic = items => ({
//   type: RECEIVE_TOPIC,
//   payload: items
// });

// // export const getAllTopics = () => dispatch => {
// //     fetchDictionary('Topic')
// //         .then(function (response) {
// //             return response.text()

// //         }).then(function (text) {
// //             let dictionaryItems = dictionaryParse(text);
// //             dispatch(receiveTopic(dictionaryItems.results))

// //         })
// // }

// export const addTopicFromState = itemId => ({
//   type: SELECT_TOPIC,
//   payload: itemId
// });

// export const addTopicToTicket = itemId => (dispatch, getState) => {
//   if (getState().topic.byId > 0) {
//     dispatch(addTopicFromState(itemId));
//   }
// };

// //Ticket Type
// //Action types
// export const SELECT_TICKET_TYPE = "SELECT_TICKET_TYPE";
// export const RECEIVE_TICKET_TYPE = "RECEIVE_TICKET_TYPE";

// //Action creators
// export const selectTicketType = item => ({
//   type: SELECT_TICKET_TYPE,
//   payload: item
// });

// export const receiveTicketType = items => ({
//   type: RECEIVE_TICKET_TYPE,
//   payload: items
// });

// // export const getAllTicketTypes = () => dispatch => {
// //     fetchDictionary('Ticket%20Type')
// //         .then(function (response) {
// //             return response.text()

// //         }).then(function (text) {
// //             let dictionaryItems = dictionaryParse(text);
// //             dispatch(receiveTicketType(dictionaryItems.results))

// //         })
// // }

// export const addTicketTypeFromState = itemId => ({
//   type: SELECT_TICKET_TYPE,
//   payload: itemId
// });

// export const addTicketTypeToTicket = itemId => (dispatch, getState) => {
//   if (getState().ticketType.byId > 0) {
//     dispatch(addTicketTypeFromState(itemId));
//   }
// };

// //Status
// //Action types
// export const SELECT_STATUS = "SELECT_STATUS";
// export const RECEIVE_STATUS = "RECEIVE_STATUS";

// //Action creators
// export const selectStatus = item => ({
//   type: SELECT_STATUS,
//   payload: item
// });

// export const receiveStatus = items => ({
//   type: RECEIVE_STATUS,
//   payload: items
// });

// // export const getAllStatuses = () => dispatch => {
// //     fetchDictionary('Status')
// //         .then(function (response) {
// //             return response.text()

// //         }).then(function (text) {
// //             let dictionaryItems = dictionaryParse(text);
// //             dispatch(receiveStatus(dictionaryItems.results))

// //         })
// // }

// export const addStatusToTicketFromState = itemId => ({
//   type: SELECT_STATUS,
//   payload: itemId
// });

// export const addStatusToTicket = itemId => (dispatch, getState) => {
//   if (getState().status.byId > 0) {
//     dispatch(addStatusToTicketFromState(itemId));
//   }
// };
