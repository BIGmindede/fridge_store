import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { authApi } from "./services/AuthService";
import { detailsApi } from "./services/DetailsService";
import { goodsApi } from "./services/GoodsService";
import { customersApi } from "./services/CustomersService";
import { employeesApi } from "./services/EmployeesService";
import { waresApi } from "./services/WarehousesSrvice";
import { piecesApi } from "./services/PiecesService";

const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [customersApi.reducerPath]: customersApi.reducer,
    [employeesApi.reducerPath]: employeesApi.reducer,
    [waresApi.reducerPath]: waresApi.reducer,
    [goodsApi.reducerPath]: goodsApi.reducer,
    [piecesApi.reducerPath]: piecesApi.reducer,
    [detailsApi.reducerPath]: detailsApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (defaultMiddleWare) => defaultMiddleWare()
        .concat(
            authApi.middleware,
            customersApi.middleware,
            employeesApi.middleware,
            waresApi.middleware,
            goodsApi.middleware,
            piecesApi.middleware,
            detailsApi.middleware,
        )
})
