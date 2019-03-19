import { Submitter } from '../models/Submitter';
import { SubmitterService } from './SubmitterService';
import { classToClass } from 'class-transformer';

export class SubmitterServiceMock extends SubmitterService{

    // private static readonly submitters: Submitter[] = [];
    
    // async get(userId:string): Promise<Submitter>{
    //     const submitter = SubmitterServiceMock.submitters.find(x=>x.user.id === userId);
    //         if(submitter){
    //             return classToClass(submitter)
    //         }
    //         return undefined;
    // }


}