import { Comment } from '../models/Comment';

export const ADD_COMMENT = "ADD_COMMENT"
export const REMOVE_COMMENT= "REMOVE_COMMENT"
export const EDIT_COMMENT = "EDIT_COMMENT"

interface AddCommentAction {

    type: typeof ADD_COMMENT;
    payload: Comment
}

interface DeleteCommentAction{ 

    type:typeof REMOVE_COMMENT;
    payload:number
    meta: {
        timestamp: number;
      };
}


interface EditCommentAction{

    type: typeof EDIT_COMMENT;
    payload: number
}

export type CommentActionsTypes = AddCommentAction | DeleteCommentAction | EditCommentAction; 