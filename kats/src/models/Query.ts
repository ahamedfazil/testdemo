import { User } from "./User";
import { DictionaryItem } from "./DictionaryItem";
import { Comment } from "./Comment";

export class Query {
    id:number;
    submitter: User;
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

}