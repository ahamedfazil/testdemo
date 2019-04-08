import { IUser } from '../models/IUser'
import { IDictionaryState } from '../models/IDictionary';
import { ITicketState } from '../models/ITicket';

export default interface IStore {
    user: IUser;
    users?:IUser[];
    engagementType:IDictionaryState;
    accountingFramework:IDictionaryState;
    auditingStandard:IDictionaryState;
    category:IDictionaryState;
    topic:IDictionaryState;
    ticketType:IDictionaryState;
    status:IDictionaryState;
    ticket: ITicketState


    
}