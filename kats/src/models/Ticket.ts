import Request from "./Request";
import { User } from "./User";
import { DictionaryItem } from "./DictionaryItem";

export class Ticket{
    public id: number | null;
    public requestId: number;
    public submitter: User;
    public submitterJobTitle: string;
    public submitterSegment:string;
    public submitterDepartment: string;
    public submitterOffice: string;
    public submitterOfficeNumber: number;
    public submitterMobileNumber: number;
    public auditTeamCc: User[];
    public respIndividual: User;
    public engagementName: string;
    public engagementChargeCode:number;
    public periodEnd:Date;
    public engagementType:DictionaryItem;
    public auditStandards:DictionaryItem;
    public accountFramework: DictionaryItem[];
    public category:DictionaryItem;
    public topics:DictionaryItem[];
    public ticketType: DictionaryItem[];
    public subject:string;
    public detailedAnalysis:string;
    public isUrgent: boolean;
    public reasonForUrgency:string;
    public watcher: User[];
    public status:DictionaryItem;
    public comments: Comment[];
    errors: any[];

    public supportTeam:DictionaryItem;
    public training:boolean;
    public faq: boolean;
    public assignee:User;
    public reviewer:User;
    public supportTeamComments:Comment[];
    public finalConsultation:string;
    public conclusion:string;
    public addToKb: boolean



}