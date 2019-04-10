import { combineReducers } from "redux";

import {
  //allTickets,
  ticketReducer
} from "./TicketReducer";
import { userReducer } from "./UserReducer";
import IStore from "../store/IStore";
// import ticketEngagementType from './ticket';

export default combineReducers<IStore>({
  ticket: ticketReducer,
  user: userReducer
});
