import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from './weather';
import logger from "redux-logger";

const store = configureStore({
    reducer:{
        weather:weatherSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
}
)

export default store