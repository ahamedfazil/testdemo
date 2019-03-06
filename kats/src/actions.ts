import C from './constants';
import { User } from './models/User'

export function addSubmitter(user:User){
    return{
        type:C.ADD_SUBMITTER,
        payload: {User}
    }
}

export const removeSubmitter = function(user:User){
    return {
        type: C.REMOVE_SUBMITTER,
        payload: user
    }
}

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
// export function addUser (user:User) {
//     switch (user) {
//         case C.ADD_WATCHER:

            
//             break;
    
//         default:
//             break;
//     }
// }