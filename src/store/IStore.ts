import { IUserState } from "../models/IUserState";
import { ITicketState } from "../models/ITicketState";

export default interface IStore {
    user: IUserState;
    ticket: ITicketState;
}
