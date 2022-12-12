import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "../features/shoppingSlice";
const store = configureStore({
    reducer:{
        shopping:shoppingReducer
    }
})
export default store