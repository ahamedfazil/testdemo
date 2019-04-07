import update from 'immutability-helper';

import { url } from '../../config/pnp.config';
import { DictionaryItem, IDictionaryState } from '../../models/IDictionary';
import { IAppProps } from '../../models/IAppProps';
import { dictionaryParse } from '../DictionaryActions';


export function fetchDictionary(listName: string) {
    return fetch(`${url}/_api/web/lists/GetByTitle('${listName}')/Items?$select=Id,Title`, {
        method: 'GET',
        headers: {
            accept: "application/json;odata=verbose",
        },
    });
}

export async function getDictionaryInProgress(props: IAppProps) {
    let dictionaryState: IDictionaryState;
    switch (props) {
        case props.store.accountingFramework:
            dictionaryState = update(props.store.accountingFramework, {
                items: { $set: [] },
            });
            let arrDictionaryItems = dictionaryState.items;
            if (!props.store.accountingFramework.isFetched) {

                //Dispatch get dictionary action
                props.getDictionaryInProgress();
                try {
                    const dictionaryDataResponse = await fetchDictionary(
                        props.store.accountingFramework.name)
                        .then(response => response.text())
                        .then(function (text) {
                            let dictionaryText = JSON.parse(text);
                            arrDictionaryItems = dictionaryText.d.results as DictionaryItem[];
                            return arrDictionaryItems;
                        }
                        )
                    }
                catch (error) {
                    console.log(error);
                    //Dispatch error action
                    props.getDictionaryError(error);

                }
        
            }

    }

}