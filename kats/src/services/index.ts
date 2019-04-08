import { ICurrentTicketState } from "../models/ITicket";
import { IDictionaryItem } from "../models/IDictionary";

export interface IKatsService{
    add(listItem:any):ICurrentTicketState |Comment |IDictionaryItem;
    getAll():any[];
    getById(listItemId:number):any;

}