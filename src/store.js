import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import loginSlice from "./slices/loginSlice";

export default configureStore({
    reducer :{
        "loginSlice": loginSlice,
        "cartSlice": cartSlice
    }
})