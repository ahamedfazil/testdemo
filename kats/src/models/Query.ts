import { User } from "./User";

export class Query {
    id:number;
    submitter: User;
    auditTeamCc: [];
    respIndividual: User;
    engagementName: string;
    engagementChargeCode:number;
    periodEnd:number;
    engagementType:any[];
    auditStandardsId:number;
    accountFramework: any[];
    categoryId:number;
    ticketTypeId: number;
    subject:string;
    detailedAnalysis:string;
    question:string;
    priorityId: number;
    reasonForUrgency:string;
    watcher: User;
    status:string;
    commentsId: number;

}