import { Request } from "../models/Request";

export interface IRequestService{
    add(request:Request):Request;
    getAll():Request[];
    getById(requestID:number):Request;
    toggle(requestID:number):void;
}