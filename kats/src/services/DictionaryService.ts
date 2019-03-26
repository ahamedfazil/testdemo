import {DictionaryItem} from '../models/DictionaryItem';


export interface Idd{
    d:LarryProperties[];
}

export interface LarryProperties{
        Title:string;
        Id:number;
}


export class DictionaryService  {
    public async getAllEngagementTypes() {
        try {

            let value = await fetch(`https://xlitconsultinge.sharepoint.com/sites/katsdev/_api/web/lists/GetByTitle('Engagement%20Type')/Items`, {
                method: 'GET',
                headers: {
                    accept: "application/json;odata=verbose"
                    // ,
                    // 'Content-Type': 'application/json'
                }
            });
           //let val = await value.json.data.children.map(child => child.data)

           let val1 = await value.json();
            console.log(val1);


           
            let val = (await value.json()) as Idd;
        val.d.forEach((item)=>{
            alert(item.Title);
        });
            console.log(`Items are `, val.d);

        }


        catch (error) {
            console.log(error);
            throw new Error;            
        }
    
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
