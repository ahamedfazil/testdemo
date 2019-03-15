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
    return function (dispatch){
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

export default requestSubmitterInfo