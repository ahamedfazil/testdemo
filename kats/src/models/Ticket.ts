import { User } from "./User";

export class Ticket{
    id: number | null;
   // requestId: number;
    submitterId: number;
    auditTeam: number[];
    respIndividual: number;
    engagementName: string;
    engagementChargeCode:number;
    periodEnd:Date;
    engagementType:number[];
    auditingStandard:number[];
    accountingFramework: number[];
    category:number;
    topic:number[];
    ticketType: number;
    subject:string;
    detailedAnalysis:string;
    priority: 'Normal' | 'Urgent';
    reasonForUrgency:string;
    watcher: number[];
    status:number;
    comments: number[];
    label:number[];
    supportTeam:number;
    training:'Yes' | 'No';
    faq: 'Yes' | 'No';
    assignee:number;
    assignedTo:number;
    reviewer:number;
    supportTeamComments:number[];
    finalConsultation:string;
    conclusion:string;
    addToKb: 'Yes' | 'No'
    
}