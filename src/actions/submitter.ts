import fetch from 'cross-fetch'
import C from '../constants'
import { url } from '.././config/pnp.config';



export const requestSubmitterInfo =(userId:string) =>({
    type: C.REQUEST_SUBMITTER_INFO,
    payload: userId
})

export const receiveSubmitterInfo = (info,json) =>  ({
    type: C.RECEIVE_SUBMITTER_INFO,
    payload: info,
    submitter: json.data.children.map(child=>child.data)

})

export const invalidateSubmitterInfo = (userId) => ({
    type: C.INVALIDATE_SUBMITTER,
    payload:userId
})

export async function fetchSubmitterInfo (userId:string) {
    return function (dispatch){
        dispatch(requestSubmitterInfo(userId))
        return fetch(`${url}/_api/sp.userprofiles.peoplemanager/getpropertiesfor(@v)?@v=${userId}`,{
        method: 'GET',
        headers: {
            accept: "application/json;odata=verbose",
        },
    })
        .then(
            response => response.json(),
            error => console.log('An error occurred.',error)
            )
            .then(json =>dispatch(receiveSubmitterInfo(userId,json))
                
                
                );
              
                
    }
}

export const shouldFetchUserInfo= (state,action)=>{
    const userInfo = state.infoBySubmitter[action]
    if(!userInfo) {
        return true
    }
    if(userInfo.isFetching){
        return false
    }
    return userInfo.didInvalidate
}

export const fetchUserInfoIfNeeded=(userInfo)=>
(dispacth,getState)=>{
    if(shouldFetchUserInfo(getState(),userInfo)){
        return dispacth(fetchSubmitterInfo(userInfo))

    }
}


export default requestSubmitterInfo