import {combineReducers} from "redux";
import personReducer from "./person/person.reducer";

const baseReducer = combineReducers({
    person: personReducer,
})

export default baseReducer;
