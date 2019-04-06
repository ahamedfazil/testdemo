import { ICurrentTicketState } from "../models/ITicket";
import { DictionaryItem } from "../models/IDictionary";

export interface IKatsService{
    add(listItem:any):ICurrentTicketState |Comment |DictionaryItem;
    getAll():any[];
    getById(listItemId:number):any;

}