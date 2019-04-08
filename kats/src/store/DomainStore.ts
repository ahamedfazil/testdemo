import {ICurrentTicketState } from '../models/ITicket' 
import { IUser } from '../models/IUser'
import { IDictionary } from '../models/IDictionary'


export class DomainStore{
    public tickets: ICurrentTicketState[];
    public watchers: IUser[];
    public auditTeam: IUser[];
    public engagementTypes:IDictionary;
}
