import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { authApi } from "./services/AuthService";

const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (defaultMiddleWare) => defaultMiddleWare().concat(authApi.middleware)
})
