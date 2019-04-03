import {
    IGetCurrentUserAction,
    IGetCurrentUserActionSuccess,
    IGetCurrentUserActionError,
    IGetUserInfoAction,
    IGetUserInfoActionSuccess,
    IGetUserInfoActionError
} from './IUserActions'

type ActionTypes =
| IGetCurrentUserAction
| IGetCurrentUserActionSuccess
| IGetCurrentUserActionError
| IGetUserInfoAction
| IGetUserInfoActionSuccess
| IGetUserInfoActionError

export default ActionTypes