import C from '../constants';
import fetch from 'cross-fetch'

export const selectEngagementType = (item) =>
({
    type: C.SELECT_ENGAGEMENT_TYPE,
    payload:item
})

export const requestEngagmentType = (item) => ({
    type: C.REQUEST_ENGAGEMENT_TYPES,
    payload: item
})

export const receiveEngagementTypes = (info, json) =>({
    type: C.RECEIVE_ENGAGEMENT_TYPES,
    payload: info,
    engagementType: json.data.children.map(child => child.data)
})

export const invalidateEngagamentType = (item) => ({
    type: C.INVALIDATE_ENGAGEMENT_TYPES,
    payload: item
})

export function fetchEngagementTypes (info) {
    return function (dispatch) {
        dispatch(requestEngagmentType(info))
        return fetch('https://sites.kpmg.co.uk/apps/katsdev/_api/web/lists/GetByTitle(\'Engagement%20Type\')/Items',{
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + "accessToken",
            "accept": "application/json;odata=verbose",
            'Content-Type': 'application/json'
        }})
        .then(
            response => response.json(),
            error => console.log('An error occurred.',error)
            )
            .then(json =>

            dispatch(receiveEngagementTypes(info,json))
    )}
}


// export const shouldFetchEngagementType = (state, action) => {
//     const engagementType = state.
// }