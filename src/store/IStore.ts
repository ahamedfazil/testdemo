import { IUserState } from "../models/IUserState";
import { ITicketState } from "../models/ITicketState";
import { ISiteState } from "../models/ISiteState";

export default interface IStore {
    site: ISiteState;
    user: IUserState;
    ticket: ITicketState;
}
