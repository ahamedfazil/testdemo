import { User } from "./User";
import { DictionaryItem } from "./DictionaryItem";
import { Comment } from "./Comment";


export class Request {
    public id: number;
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

}

export default Request