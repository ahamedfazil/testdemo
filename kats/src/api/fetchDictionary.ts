import update from 'immutability-helper';

import { url } from '../config/pnp.config';
import { IDictionary, IDictionaryItem } from '../models/IDictionary';
import { IAppProps } from '../models/IAppProps';
import { dictionaryParse } from '../actions/DictionaryActions';


export function fetchDictionary(listName: string) {
    return fetch(`${url}/_api/web/lists/GetByTitle('${listName}')/Items?$select=Id,Title`, {
        method: 'GET',
        headers: {
            accept: "application/json;odata=verbose",
        },
    });
}

// export async function getDictionaryInProgress(props: IAppProps) {
//     let dictionary: IDictionary;
//     switch (props) {
//         case props.store.accountingFramework:
//             dictionary = update(props.store.accountingFramework.items, {
//                 results: { $set: [] },
//             });
            
//             if (!props.store.accountingFramework.isFetched) {

//                 //Dispatch get IDictionary action
//                 props.getDictionaryInProgress();
//                 try {
//                     const dictionaryDataResponse = await fetchDictionary(
//                         props.store.accountingFramework.name)
//                         .then(response => response.text())
//                         .then(function (text) {
//                             let dictionaryText = JSON.parse(text);
//                             dictionary.results = dictionaryText.d as IDictionaryItem;
//                             return dictionary;
//                         }
//                         )
//                     }
//                 catch (error) {
//                     console.log(error);
//                     //Dispatch error action
//                     props.getDictionaryError(error);

//                 }
        
//             }

//     }

// }