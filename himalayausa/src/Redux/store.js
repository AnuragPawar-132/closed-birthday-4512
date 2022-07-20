import { legacy_createStore,applyMiddleware ,combineReducers , compose} from "redux";
// import { reducer } from "./reducer";
import thunk from "redux-thunk"
import {reducer as AppReducer} from "./AppReducer/reducer"
// import { reducer as AuthReducer } from "./AuthReducer/reducer";

const rootReducer = combineReducers({ product : AppReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore (rootReducer ,composeEnhancers(applyMiddleware(thunk)))