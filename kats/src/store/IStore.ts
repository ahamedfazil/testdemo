import { User } from '../models/User'
import { IDictionaryState } from '../models/IDictionary';
import { ITicketState } from '../models/ITicket';

export default interface IStore {
    user: User;
    users?:User[];
    engagementType:IDictionaryState;
    accountingFramework:IDictionaryState;
    auditingStandard:IDictionaryState;
    category:IDictionaryState;
    topic:IDictionaryState;
    ticketType:IDictionaryState;
    status:IDictionaryState;
    ticket: ITicketState


    
}