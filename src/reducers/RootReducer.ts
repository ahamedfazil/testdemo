import { combineReducers } from "redux";
import IStore from "../store/IStore";
import { userReducer } from "./UserReducer";
import { ticketReducer } from "./TicketReducer";

const rootReducer = combineReducers<IStore>({
  user: userReducer,
  ticket: ticketReducer
});

export default rootReducer;
