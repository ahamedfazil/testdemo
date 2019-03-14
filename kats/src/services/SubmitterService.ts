import { Submitter } from "../models/Submitter";

export class SubmitterService{
    
    private url: string = 'https://localhost:44399/api'
    
    async get(_userId: string): Promise<Submitter[]> {

        try{
            if(!_userId){
                _userId = "larry.akin@kpmg.co.uk";
            }
            let b = await fetch(this.url + "/_api/SP.UserProfiles.PeopleManager/GetMyProperties",
            {
                headers: { "Accept": "application/json; odata=verbose" }, 
                method: 'GET',
                success: function (data){
                    console.log(data);
                    
                }),
                error: function(error) {
                    console.log(error)

            }
        }
    }
}