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
    topic:DictionaryItem[]; //TODO : add actions and reducers
    category:DictionaryItem;
    ticketType: DictionaryItem[];
    subject:string;
    detailedAnalysis:string;
    isUrgent: boolean;
    reasonForUrgency:string;
    watcher: User[];
    status:DictionaryItem;
    comments: Comment[];
    errors: any[]

}

export default Request