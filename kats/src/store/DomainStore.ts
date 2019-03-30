import {Ticket } from '../models/Ticket' 
import { User } from '../models/User'
import { DictionaryItem } from '../models/DictionaryItem'


export class DomainStore{
    public tickets: Ticket[];
    public watchers: User[];
    public auditTeam: User[];
    public engagementTypes:DictionaryItem[];
}
