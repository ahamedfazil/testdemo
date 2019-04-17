import { Reducer } from "redux";
import ActionTypeKeys from "../actions/ActionTypeKey";
import ActionTypes from "../actions/ActionTypes";

import { initialState } from "../store/initialState";
import { ISiteState } from "../models/ISiteState";
import { IGetSiteActionInProgress, IGetSiteActionSuccess, IGetSiteActionError } from "../actions/IActions";

export const siteReducer: Reducer<ISiteState> = (
  state: ISiteState = initialState.site,
  action: ActionTypes
): ISiteState => {
  switch (action.type) {
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
