import { Reducer } from "redux";
import ActionTypeKeys from "../actions/ActionTypeKey";
import ActionTypes from "../actions/ActionTypes";

import { initialState } from "../store/initialState";
import { ISiteState } from "../models/ISiteState";
import { IGetSiteActionInProgress, IGetSiteActionSuccess, IGetSiteActionError, IUpdateSiteInfo } from "../actions/IActions";
import update from "immutability-helper";

export const siteReducer: Reducer<ISiteState> = (
  state: ISiteState = initialState.site,
  action: ActionTypes
): ISiteState => {
  switch (action.type) {
    case ActionTypeKeys.UPDATE_SITE_INFO:
      return updateFormAndGUID(state, action);
    case ActionTypeKeys.GET_SITE_INPROGRESS:
      return onGetSiteDetailsInProgress(state, action);
    case ActionTypeKeys.GET_SITE_SUCCESS:
      return onGetSiteDetailsSuccess(state, action);
    case ActionTypeKeys.GET_SITE_ERROR:
      return onGetSiteDetailsError(state, action);
    default:
      return state;
  }
};


function updateFormAndGUID(
  currentState: ISiteState,
  action: IUpdateSiteInfo
) {
  if (action.payload.key) {
    return update(currentState, {
      siteInfo: {
        [action.payload.key]: {
          $set: action.payload.value
        }
      }
    });
  } else {
    return update(currentState, {
      siteInfo: {
        $set: action.payload.value
      }
    });
  }
}

function onGetSiteDetailsInProgress(
  currentState: ISiteState,
  action: IGetSiteActionInProgress
) {
  return {
    ...currentState,
    isInitialised: true
  };
}

function onGetSiteDetailsSuccess(
  currentState: ISiteState,
  action: IGetSiteActionSuccess
) {
  return {
    ...currentState,
    siteInfo: action.payload.siteInfo
  };
}

function onGetSiteDetailsError(
  currentState: ISiteState,
  action: IGetSiteActionError
) {
  return {
    ...currentState,
    error: action.payload.error.message
  };
}
