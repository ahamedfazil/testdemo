import IStore from "../store/IStore";
import * as IActions from "../actions/IActions";
import { RouterState } from "react-router-redux";
import { Dispatch } from "react-redux";

export interface ISiteProps {
  store: IStore;
  onChangePath: (key: string) => Dispatch<RouterState>;
  updateSiteInfo: (value: any, key?: string) => IActions.IUpdateSiteInfo;
}
