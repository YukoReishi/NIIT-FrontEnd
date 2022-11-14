import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import employeeReducer from "./Reducer/Reducer";

//import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(employeeReducer,applyMiddleware(thunk));

export default store;