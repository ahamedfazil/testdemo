export class Ticket{
    public id: number | null;
   // public requestId: number;
    public submitter: number;
    public auditTeam: number[];
    public respIndividual: number;
    public engagementName: string;
    public engagementChargeCode:number;
    public periodEnd:string;
    public engagementType:number[];
    public auditingStandard:number[];
    public accountingFramework: number[];
    public category:number;
    public topic:number[];
    public ticketType: number;
    public subject:string;
    public detailedAnalysis:string;
    public isUrgent: boolean;
    public reasonForUrgency:string;
    public watcher: number[];
    public status:number;
    public comments: number[];
    errors: any[];
    public label:number[];
    public supportTeam:number;
    public training:boolean;
    public faq: boolean;
    public assignee:number;
    public assignedTo:number;
    public reviewer:number;
    public supportTeamComments:number[];
    public finalConsultation:string;
    public conclusion:string;
    public addToKb: boolean
}