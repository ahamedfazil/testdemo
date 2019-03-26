export interface Ticket{
    id: number | null;
   // requestId: number;
    submitter: number;
    auditTeam: number[];
    respIndividual: number;
    engagementName: string;
    engagementChargeCode:number;
    periodEnd:string;
    engagementType:number[];
    auditingStandard:number[];
    accountingFramework: number[];
    category:number;
    topic:number[];
    ticketType: number;
    subject:string;
    detailedAnalysis:string;
    isUrgent: boolean;
    reasonForUrgency:string;
    watcher: number[];
    status:number;
    comments: number[];
    label:number[];
    supportTeam:number;
    training:boolean;
    faq: boolean;
    assignee:number;
    assignedTo:number;
    reviewer:number;
    supportTeamComments:number[];
    finalConsultation:string;
    conclusion:string;
    addToKb: boolean
}