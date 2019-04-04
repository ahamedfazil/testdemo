import { ITicket } from "../models/ITicket";
import { DictionaryItem } from "../models/DictionaryItem";

export interface IKatsService{
    add(listItem:any):ITicket |Comment |DictionaryItem;
    getAll():any[];
    getById(listItemId:number):any;

}