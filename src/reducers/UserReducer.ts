import { Reducer } from "redux";
import ActionTypeKeys from "../actions/ActionTypeKey";
import { IUser, IUserState } from "../models/IUser";
import ActionTypes from "../actions/ActionTypes";
import InitialState from "../store/InitialState";

export const userReducer: Reducer<IUser> = (
  state: IUser = InitialState.users,
  action: ActionTypes
): IUser => {
  switch (action.type) {
    case ActionTypeKeys.GET_USERS_INPROGRESS:
      return onGetUserDetailsInProgress(state, action);
    case ActionTypeKeys.GET_CURRENT_USER_SUCCESS:
      return onGetUserDetails(state, action);
    case ActionTypeKeys.GET_USERS_ERROR:
      return onGetUserDetailsError(state, action);
    default:
      return state;
  }
};

function onGetUserDetailsInProgress(
  currentState: IUserState,
  action: IGetUserActionInProgress
) {
  return {
    ...currentState,
    isInitialized: true,
  };
}

function onGetUserDetails(currentState: IUserState, action: IGetUserActionSuccess) {
  return {
    ...currentState,
    isInitialized: true,
    currentUser: action.payload.currentUser
  };
}

function onGetUserDetailsError(
  currentState: IUserState,
  action: IGetUserActionError
) {
  return {
    ...currentState,
    error: action.payload.error.message
  };
}
