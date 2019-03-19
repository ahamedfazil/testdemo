import Request from "./Request";
import { Submitter } from "./Submitter";
import { User } from "./User";
import { DictionaryItem } from "./DictionaryItem";

export class Ticket{
    id: number;
    requestId: Request;
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
    isUrgent: boolean;
    reasonForUrgency:string;
    watcher: User[];
    status:DictionaryItem;
    comments: Comment[];
    errors: any[];

    supportTeam:DictionaryItem;
    training:boolean;
    faq: boolean;
    assignee:User;
    reviewer:User;
    supportTeamComments:Comment[];
    finalConsultation:string;
    conclusion:string;
    addToKb: boolean



}