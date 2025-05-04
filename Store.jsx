import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice.js";

const store=configureStore({
    reducer :
    {
        cart: cartSlice
    }}
);


export default store;
