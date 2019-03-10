import { Query } from "../models/Query";

export interface IRequestService{
    add(request:Query):Query;
    getAll():Request[];
    getById(requestID:number):Query;
    toggle(requestID:number):void;
}