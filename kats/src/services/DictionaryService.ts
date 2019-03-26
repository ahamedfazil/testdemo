import {DictionaryItem} from '../models/DictionaryItem';


export class DictionaryService  {
    public async getAllEngagementTypes() {
        try {
            let value = await fetch('https://sites.kpmg.co.uk/apps/katsdev/_api/web/lists/GetByTitle(\'Engagement%20Type\')/Items', {
                method: 'GET',
                headers: {
                    Authorization: "Bearer " + 'accessToken',
                    accept: "application/json;odata=verbose",
                    //'Content-Type': 'application/json'
                }
            });
            // dispatch(receiveEngagementTypes(info, json))
            console.log(value);

        }
        // try {
        // const siteurl = 'https://sites.kpmg.co.uk/apps/katsdev/';
        // const listName = 'Engagement Type';
        // var d = $.Deferred();

        // var url = siteurl + "/_api/web/lists/getbytitle('" + listName + "')/items";
        // $.ajax({
        //     url: url,
        //     method: "GET",
        //     headers: { "Accept": "application/json; odata=verbose" },
        //     success: function (data) {
        //         d.resolve(data.d.results);
        //     },
        //     error: function (data) {
        //        d.reject(data);
        //     }
        // });
        // return d.promise();
            
        // } 

        catch (error) {
            console.log(error);
            throw new Error;            
        }
    
    }

//     export const fetchEngagementTypes = () => {
//     return async function (dispatch) {
//         //dispatch(requestEngagmentType())
//         try {
//             let value = await fetch('https://sites.kpmg.co.uk/apps/katsdev/_api/web/lists/GetByTitle(\'Engagement%20Type\')/Items', {
//                 method: 'GET',
//                 headers: {
//                     Authorization: "Bearer " + 'accessToken',
//                     accept: "application/json;odata=verbose",
//                     //'Content-Type': 'application/json'
//                 }
//             });
//             // dispatch(receiveEngagementTypes(info, json))
//             console.log(value);

//         }
//         catch (error) {
//             console.log(error)



//         }

//     }
// }

        
    // async getAllAuditingStandards(): Promise<DictionaryItem[]> {
    //     const siteurl = 'https://sites.kpmg.co.uk/apps/katsdev/';
    //     const listName = 'EngagementType';
    //     const response = await fetch(siteurl +'/apps/katsdev/_api/web/lists/GetByTitle'${listName}'/items',)
    //     .then(    
    //         method: 'GET',
    //         headers:{
    //         Authorization: "Bearer " + accessToken,
    //         accept: "application/json;odata=verbose",

    //     )});
    //     return await response.json();

    //     throw new Error;
    // }

    async getAllAccountingFramework(): Promise<DictionaryItem[]> {
        throw new Error;
    }

    async getAllCategories(): Promise<DictionaryItem[]> {
        throw new Error;
    }

    async getAllTopics(): Promise<DictionaryItem[]> {
        throw new Error;
    }

    async getAllTicketTypes(): Promise<DictionaryItem[]> {
        throw new Error;
    }

    async getAllWatchers(): Promise<DictionaryItem[]> {
        throw new Error;
    }

    async getAllStatus(): Promise<DictionaryItem[]> {
        throw new Error;
    }

}
