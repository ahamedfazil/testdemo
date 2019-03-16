import fetch from 'cross-fetch'
import C from '../constants'


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

export function fetchSubmitterInfo (userId:string) {
    return function (dispatch:any){
        dispatch(requestSubmitterInfo(userId))
        return fetch('https://sites.kpmg.co.uk/apps/katsdev/_api/sp.userprofiles.peoplemanager/getpropertiesfor(@v)?@v=${userId}.json')
        .then(
            response => response.json(),
            error => console.log('An error occurred.',error)
            )
            .then(json =>

                dispatch(receiveSubmitterInfo(userId,json))
                )
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