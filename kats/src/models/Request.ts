import { IUser } from "./IUser";
import { IDictionary } from "./IDictionary";
import { IComment } from "./IComment";


export class Request {
    public id: number;
    public requestId: number;
    public submitter: IUser;
    public submitterJobTitle: string;
    public submitterSegment:string;
    public submitterDepartment: string;
    public submitterOffice: string;
    public submitterOfficeNumber: number;
    public submitterMobileNumber: number;
    public auditTeamCc: IUser[];
    public respIndividual: IUser;
    public engagementName: string;
    public engagementChargeCode:number;
    public periodEnd:Date;
    public engagementType:IDictionary;
    public auditStandards:IDictionary;
    public accountFramework: IDictionary;
    public category:IDictionary;
    public topics:IDictionary;
    public ticketType: IDictionary;
    public subject:string;
    public detailedAnalysis:string;
    public isUrgent: boolean;
    public reasonForUrgency:string;
    public watcher: IUser[];
    public status:IDictionary;
    public comments: Comment[];
    errors: any[];

}

export default Request