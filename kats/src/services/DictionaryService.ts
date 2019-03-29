import { DictionaryItem } from '../models/DictionaryItem';
import { fetch } from 'cross-fetch'
import 'whatwg-fetch'


export interface Idd {
    d: DictionaryProperties[];
}

export interface DictionaryProperties {
    Title: string;
    Id: number;
}


export class DictionaryService {
    public async getAllEngagementTypes() {
        try {

            let value = await fetch(`https://sites.kpmg.co.uk/apps/katsdev/_api/web/lists/GetByTitle('Engagement%20Type')/Items?$select=Id,Title`, {
                method: 'GET',
                headers: {
                    accept: "application/json;odata=verbose",
                },
            })
            let val = await value.json();
            console.log(val);
            
                // .then(res => res.json())
                // .then(function (response) {
                //     if (response.ok) {
                //         return response.blob();
                //     }
                //     throw new Error('Network issues detected');
                // })
                // .then(response => console.log('Success:', JSON.stringify(response)));
        //     const val = await value.json() as Idd
        //     val.d.forEach((item) => {
        //         alert(item.Title)
        // });
        //     console.log('Items are ', val.d);
            
            // let engagementTypesArray = listItems.map(val =>{
            //     return <DictionaryProperties>
            //     {
            //         Title: val.Title,
            //         Id: val.Id
            //     };
            // });

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


    async getAllAuditingStandards(): Promise<DictionaryItem[]> {


        throw new Error;
    }

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
