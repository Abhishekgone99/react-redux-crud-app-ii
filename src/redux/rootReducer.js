import { combineReducers } from "redux";
import studentReducer from "./reducers";


const rootReducer = combineReducers({
    students: studentReducer
})

export default rootReducer