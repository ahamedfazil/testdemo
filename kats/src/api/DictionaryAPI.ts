import update from 'immutability-helper';

import { url } from '../config/pnp.config';
import { IDictionaryState, IDictionaryItem } from '../models/IDictionary';
import { IAppProps } from '../models/IAppProps';


export function fetchDictionary(listName: string) {
    return fetch(`${url}/_api/web/lists/GetByTitle('${listName}')/Items?$select=Id,Title`, {
        method: 'GET',
        headers: {
            accept: "application/json;odata=verbose",
        },
    });
}

export function dictionaryParse(text: string) {
    console.log('text is: ', text);
    let dictionaryText = JSON.parse(text);
    let dictionaryItems = dictionaryText.d as IDictionaryState;
    return dictionaryItems;
}

export async function getDictionary(props: IAppProps) {
      
    let dictionary: IDictionaryState = update(props.store.status, {
                results: { $set: [] },
            });

            if (!props.store.status.isFetched) {

                //Dispatch get IDictionaryState action
                props.getDictionaryInProgress();
                try {
                    let listName = 'Status';
                    fetchDictionary(`${listName}`)
                        .then(function (response) {
                            return response.text()

                        }).then(function (text) {
                            dictionary = dictionaryParse(text);
                            console.log(dictionary);
                            
                            //Dispatch success
                            props.getStatusSuccess(dictionary)
                            // dispatch(receiveEngagementTypes(dictionaryItems.results))

                        })
                }
                catch (error) {
                    console.log(error);
                    //Dispatch error action
                    props.getDictionaryError(error);

                }

            }}

    // switch (props) {

    //     case props.store.engagementType:
            
    //         dictionary = update(props.store.engagementType, {
    //             results: { $set: [] },
    //         });

    //         if (!props.store.engagementType.isFetched) {

    //             //Dispatch get IDictionaryState action
    //             props.getDictionaryInProgress();
    //             try {
    //                 let listName = 'Engagement%20Type';
    //                 fetchDictionary(`${listName}`)
    //                     .then(function (response) {
    //                         return response.text()

    //                     }).then(function (text) {
    //                         let dictionary = dictionaryParse(text);

    //                         //Dispatch success
    //                         props.getEngagementTypeSuccess(dictionary, listName)
    //                         // dispatch(receiveEngagementTypes(dictionaryItems.results))

    //                     })
    //             }
    //             catch (error) {
    //                 console.log(error);
    //                 //Dispatch error action
    //                 props.getDictionaryError(error);

    //             }

    //         }
    //         case props.store.accountingFramework:
            
    //         dictionary = update(props.store.accountingFramework, {
    //             results: { $set: [] },
    //         });

    //         if (!props.store.accountingFramework.isFetched) {

    //             //Dispatch get IDictionaryState action
    //             props.getDictionaryInProgress();
    //             try {
    //                 let listName = 'Accounting%20Framework';
    //                 fetchDictionary(`${listName}`)
    //                     .then(function (response) {
    //                         return response.text()

    //                     }).then(function (text) {
    //                         let dictionary = dictionaryParse(text);

    //                         //Dispatch success
    //                         props.getAccountingFramework(dictionary, listName)
    //                         // dispatch(receiveEngagementTypes(dictionaryItems.results))

    //                     })
    //             }
    //             catch (error) {
    //                 console.log(error);
    //                 //Dispatch error action
    //                 props.getDictionaryError(error);

    //             }

    //         }
    //         case props.store.auditingStandard:
            
    //         dictionary = update(props.store.auditingStandard, {
    //             results: { $set: [] },
    //         });

    //         if (!props.store.auditingStandard.isFetched) {

    //             //Dispatch get IDictionaryState action
    //             props.getDictionaryInProgress();
    //             try {
    //                 let listName = 'Auditing%20Standard';
    //                 fetchDictionary(`${listName}`)
    //                     .then(function (response) {
    //                         return response.text()

    //                     }).then(function (text) {
    //                         let dictionary = dictionaryParse(text);

    //                         //Dispatch success
    //                         props.getAuditingStandardSuccess(dictionary, listName)
    //                         // dispatch(receiveEngagementTypes(dictionaryItems.results))

    //                     })
    //             }
    //             catch (error) {
    //                 console.log(error);
    //                 //Dispatch error action
    //                 props.getDictionaryError(error);

    //             }

    //         }
    //         case props.store.category:
            
    //         dictionary = update(props.store.category, {
    //             results: { $set: [] },
    //         });

    //         if (!props.store.category.isFetched) {

    //             //Dispatch get IDictionaryState action
    //             props.getDictionaryInProgress();
    //             try {
    //                 let listName = 'Category';
    //                 fetchDictionary(`${listName}`)
    //                     .then(function (response) {
    //                         return response.text()

    //                     }).then(function (text) {
    //                         let dictionary = dictionaryParse(text);

    //                         //Dispatch success
    //                         props.getCategorySuccess(dictionary, listName)
    //                         // dispatch(receiveEngagementTypes(dictionaryItems.results))

    //                     })
    //             }
    //             catch (error) {
    //                 console.log(error);
    //                 //Dispatch error action
    //                 props.getDictionaryError(error);

    //             }

    //         }
    //         case props.store.topic:
            
    //         dictionary = update(props.store.topic, {
    //             results: { $set: [] },
    //         });

    //         if (!props.store.topic.isFetched) {

    //             //Dispatch get IDictionaryState action
    //             props.getDictionaryInProgress();
    //             try {
    //                 let listName = 'Topic';
    //                 fetchDictionary(`${listName}`)
    //                     .then(function (response) {
    //                         return response.text()

    //                     }).then(function (text) {
    //                         let dictionary = dictionaryParse(text);

    //                         //Dispatch success
    //                         props.getTopicSuccess(dictionary, listName)
    //                         // dispatch(receiveEngagementTypes(dictionaryItems.results))

    //                     })
    //             }
    //             catch (error) {
    //                 console.log(error);
    //                 //Dispatch error action
    //                 props.getDictionaryError(error);

    //             }

    //         }

    //         case props.store.ticketType:
            
    //         dictionary = update(props.store.ticketType, {
    //             results: { $set: [] },
    //         });

    //         if (!props.store.ticketType.isFetched) {

    //             //Dispatch get IDictionaryState action
    //             props.getDictionaryInProgress();
    //             try {
    //                 let listName = 'Ticket%20Type';
    //                 fetchDictionary(`${listName}`)
    //                     .then(function (response) {
    //                         return response.text()

    //                     }).then(function (text) {
    //                         let dictionary = dictionaryParse(text);

    //                         //Dispatch success
    //                         props.getTicketTypeSuccess(dictionary, listName)
    //                         // dispatch(receiveEngagementTypes(dictionaryItems.results))

    //                     })
    //             }
    //             catch (error) {
    //                 console.log(error);
    //                 //Dispatch error action
    //                 props.getDictionaryError(error);

    //             }

    //         }
            
    // }

