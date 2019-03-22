import { Submitter } from '../models/Submitter';
import { UserService } from './UserService';
import { classToClass } from 'class-transformer';

export class UserServiceMock extends UserService{

    // private static readonly submitters: Submitter[] = [];
    
    // async get(userId:string): Promise<Submitter>{
    //     const submitter = SubmitterServiceMock.submitters.find(x=>x.user.id === userId);
    //         if(submitter){
    //             return classToClass(submitter)
    //         }
    //         return undefined;
    // }


}