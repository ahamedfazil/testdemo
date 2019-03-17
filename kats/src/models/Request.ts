import { User } from "./User";
import { DictionaryItem } from "./DictionaryItem";
import { Comment } from "./Comment";
import { Submitter } from "./Submitter";

export class Request {
    id:number;
    submitter: Submitter;
    auditTeamCc: [];
    respIndividual: User;
    engagementName: string;
    engagementChargeCode:number;
    periodEnd:Date;
    engagementType:DictionaryItem;
    auditStandards:DictionaryItem;
    accountFramework: DictionaryItem[];
    category:DictionaryItem;
    ticketType: DictionaryItem[];
    subject:string;
    detailedAnalysis:string;
    question:string;
    isUrgent: boolean;
    reasonForUrgency:string;
    watcher: User[];
    status:DictionaryItem;
    comments: Comment[];
    errors: any[]

}

export default Request