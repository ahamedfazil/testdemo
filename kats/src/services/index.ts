import { Ticket } from "../models/Ticket";
import { DictionaryItem } from "../models/DictionaryItem";

export interface IKatsService{
    add(listItem:any):Ticket |Comment |DictionaryItem;
    getAll():any[];
    getById(listItemId:number):any;

}