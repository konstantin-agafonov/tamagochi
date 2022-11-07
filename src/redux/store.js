import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";
import baseReducer from "./base.reducer";

let store = configureStore({
    reducer: baseReducer,
    middleware: [logger]
})

export default store;
