import { url } from '../../config/pnp.config';



export function fetchDictionary(listName:string) {
    return fetch(`${url}/_api/web/lists/GetByTitle('${listName}')/Items?$select=Id,Title`, {
        method: 'GET',
        headers: {
            accept: "application/json;odata=verbose",
        },
    });
}
