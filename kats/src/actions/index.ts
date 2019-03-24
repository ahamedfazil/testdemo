import C from '../constants';
import { User } from '../models/User'
import { DictionaryItem } from '../models/DictionaryItem';
import { Comment } from '../models/Comment';
import { UserService } from '../services/UserService'


export const visibilityFilters = {
    SHOW_ALL_FIELDS: "SHOW_ALL_FIELDS",
    HIDE_SUPPORT_FIELDS: "HIDE_SUPPORT_FIELDS",

}

export const setVisibilityFilter = (filter) =>
({
    type: C.SET_VISIBILITY_FILTER,
    payload: filter
})

// export const setSubmitter = (userId: string) => dispatch => {

//     dispatch({
//         type: C.REQUEST_SUBMITTER_INFO
//     })

//     let svc = new UserService();
//     let submitter = svc.get(userId);

//     return submitter
// }



export const uploadFile = (text:string) =>
({
    type: C.UPLOAD_FILE,
    payload: text
})

export const removeFile = (index:number) =>
({
    type: C.REMOVE_FILE,
    payload: index
})

export const addComment = (item:number) =>
({
    type: C.ADD_COMMENT,
    payload: item
})

export const removeComment = (index:number) =>
({
    type:C.REMOVE_COMMENT,
    payload:index
})


export const editComment = (item:number) =>
({
    type: C.EDIT_COMMENT,
    payload: item
})

export const addError = (message:string) =>
({
    type: C.ADD_ERROR,
    payload: message
})

export const clearError = (index:number) =>
({
    type: C.CLEAR_ERROR,
    payload:index
})


//TODO : Refactor label suggestions later -24/03/2018

export const changeSuggestions = suggestions =>
({
    type:C.CHANGE_SUGGESTIONS,
    payload: suggestions
})

export const clearSuggestions = () => 
    ({
        type: C.CLEAR_SUGGESTIONS
    })

export const suggestLabelName = value => dispatch => {
    dispatch({
        type: C.FETCH_LABELS
    })
    //TODO: Add rest API call to term store for enterprise keywords/term set
}
