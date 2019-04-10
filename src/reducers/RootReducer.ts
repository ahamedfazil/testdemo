import { combineReducers } from "redux";
import { userReducer } from "./UserReducer";
import IStore from "../store/IStore";
// import ticketEngagementType from './ticket';

export default combineReducers<IStore>({
  user: userReducer
});
