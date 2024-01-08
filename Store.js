import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Redux/CartReducer";
import UserReducer from "./Redux/UserReducer";

export default configureStore({
    reducer:{
        cart:CartReducer,
        userId:UserReducer
    }
})