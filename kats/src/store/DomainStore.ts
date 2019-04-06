import {ICurrentTicketState } from '../models/ITicket' 
import { User } from '../models/User'
import { DictionaryItem } from '../models/IDictionary'


export class DomainStore{
    public tickets: ICurrentTicketState[];
    public watchers: User[];
    public auditTeam: User[];
    public engagementTypes:DictionaryItem[];
}
