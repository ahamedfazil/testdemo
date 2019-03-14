import { Request } from "../models/Request";

export class RequestService {

    // async getAll(userId?:string): Promise<Request[]> {
    //     return undefined;
    // }

    // async get(_id: number): Promise<Request> {
    //     return undefined;
    // }


    // async add(_request:Request): Promise<number>{

    // }

    async update (_request:Request): Promise<void> {
        throw new Error();
    }

    async delete(request:Request): Promise<void> {
        throw new Error();
    }

}

export interface IRequestService{
    add(request:Request):Request;
    getAll():Request[];
    getById(requestID:number):Request;
    toggle(requestID:number):void;
}