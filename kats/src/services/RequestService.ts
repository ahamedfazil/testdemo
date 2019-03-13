import { Query } from "../models/Query";
import { setup as pnpSetup } from "@pnp/common";

export interface IRequestService{
    add(request:Query):Query;
    getAll():Request[];
    getById(requestID:number):Query;
    toggle(requestID:number):void;
}