import { legacy_createStore,applyMiddleware ,combineReducers , compose} from "redux";
import thunk from "redux-thunk"
import {reducer as AppReducer} from "./AppReducer/reducer"
import { reducer as AuthReducer } from "./AuthReducer/reducer";
// import { reducer as AuthReducer } from "./AuthReducer/reducer";

// const rootReducer = combineReducers({ product : AppReducer});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const composeEnhancers=
typeof window ==="object" && window.
__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
?window.__DEVTOOLS_EXTENSION_COMPOSE__
({

    
}):compose;
const rootreducer=combineReducers({
    product : AppReducer,AuthReducer
})
export const store = legacy_createStore (rootreducer ,composeEnhancers(applyMiddleware(thunk)))