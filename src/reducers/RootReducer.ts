import { combineReducers } from "redux";
import IStore from "../store/IStore";
import { userReducer } from "./UserReducer";
import { ticketReducer } from "./TicketReducer";
import { siteReducer } from "./SiteReducer";

const rootReducer = combineReducers<IStore>({
  site: siteReducer,
  user: userReducer,
  ticket: ticketReducer
});

export default rootReducer;
