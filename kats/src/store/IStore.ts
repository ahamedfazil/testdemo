import { User } from '../models/User'
import { DictionaryItem } from '../models/DictionaryItem';
import { Ticket } from '../models/Ticket';

export default interface IStore {
    users: User[];
    engagementType: DictionaryItem[];
    accountingFramework: DictionaryItem[];
    auditingStandard: DictionaryItem[];
    category: DictionaryItem[];
    topic: DictionaryItem[];
    ticketType: DictionaryItem[];
    status: DictionaryItem[];
    ticket: Ticket


    
}