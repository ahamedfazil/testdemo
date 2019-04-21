import { applyMiddleware, createStore, Store } from "redux";
import promise from "redux-promise-middleware";
import thunkMiddleware from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
// import createHistory from "history/createHashHistory";
import { createHashHistory as createHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import rootReducer from "../reducers/RootReducer";
import IStore from "./IStore";

export const history = createHistory();

export default function configureStore(): Store<IStore> {
  return createStore<IStore>(
    rootReducer,
    composeWithDevTools(applyMiddleware(promise(), routerMiddleware(history), thunkMiddleware))
  );
}
