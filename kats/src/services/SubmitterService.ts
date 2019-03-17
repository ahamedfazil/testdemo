import { Submitter } from "../models/Submitter";
import { sp } from '@pnp/sp'

export class SubmitterService{
    
    async get (userId:string):Promise<Submitter> {
  
        const userInfo = new Submitter;
      
        try {
      
        sp
        .profiles
        .getPropertiesFor(userId).then((profile:any) => {
        
            console.log(profile.DisplayName);
            console.log(profile.Email);
            console.log(profile.Title);
            console.log(profile.UserProfileProperties.length);
            
           
      
           userInfo.user.fullname = profile.DisplayName;
           userInfo.user.id = profile.Username;
           userInfo.jobTitle = profile.Title;
           userInfo.department = profile.Department;
           userInfo.office = profile.Office;
      
            
      
            })}
            catch (ex) {
              console.log(ex);
              
          }
          return userInfo;
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
