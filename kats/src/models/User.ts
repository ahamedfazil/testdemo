export interface User {
   isInitialised:boolean;
   userState: IUserState
}

export interface IUserState{
   isFetched:boolean;
   isSupportUser:boolean;
   isUser:boolean;
   id:number;
   name:string;
   email:string;
   firstName:string;
   lastName:string;
   title:string;
   loginName:string;
   department:string;
   memberOf:string[];
   office:string;
   officeNumber:null
}