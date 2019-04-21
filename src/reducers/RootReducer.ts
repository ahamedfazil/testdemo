import { combineReducers } from "redux";
import IStore from "../store/IStore";
import { routerReducer } from "react-router-redux";
import { userReducer } from "./UserReducer";
import { ticketReducer } from "./TicketReducer";
import { siteReducer } from "./SiteReducer";

const rootReducer = combineReducers<IStore>({
  routing: routerReducer,
  site: siteReducer,
  user: userReducer,
  ticket: ticketReducer
});

export default rootReducer;
