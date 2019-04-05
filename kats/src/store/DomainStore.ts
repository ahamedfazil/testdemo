import {ITicket } from '../models/ITicket' 
import { User } from '../models/User'
import { DictionaryItem } from '../models/DictionaryItem'


export class DomainStore{
    public tickets: ITicket[];
    public watchers: User[];
    public auditTeam: User[];
    public engagementTypes:DictionaryItem[];
}
