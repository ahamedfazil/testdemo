import { Submitter } from "../models/Submitter";
import { sp } from '@pnp/sp'

export class SubmitterService{
    
async get (userId:string) {
    sp
    .profiles
    .getPropertiesFor(userId).then((profile:any) => {
    
        console.log(profile.DisplayName);
        console.log(profile.Email);
        console.log(profile.Title);
        console.log(profile.UserProfileProperties.length);
        
        let properties = new Submitter;

        properties.user.fullname = profile.DisplayName;
        properties.user.id = profile.Username;
        properties.jobTitle = profile.Title;
        properties.department = profile.Department;
        properties.office = profile.Office;

        })
        
        return new Submitter;
    }
}

    // private url: string = 'https://localhost:44399/api'
    
    // async get(_userId: string): Promise<Submitter[]> {

    //     try{
    //         if(!_userId){
    //             _userId = "larry.akin@kpmg.co.uk";
    //         }
    //         let b = await fetch(this.url + "/_api/SP.UserProfiles.PeopleManager/GetMyProperties",
    //         {
    //             headers: { "Accept": "application/json; odata=verbose" }, 
    //             method: 'GET',
    //             success: function (data){
    //                 console.log(data);
                    
    //             }),
    //             error: function(error) {
    //                 console.log(error)

    //         }
    //     }
    // }
