import { ICurrentTicketState } from "../models/ITicket";
import { IDictionaryItem } from "../models/IDictionaryState";

export interface IKatsService{
    add(listItem:any):ICurrentTicketState |Comment |IDictionaryItem;
    getAll():any[];
    getById(listItemId:number):any;

}