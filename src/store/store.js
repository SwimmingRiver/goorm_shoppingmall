import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "../reducer/item";
import userSlice from "../reducer/user";
import cartList from "../reducer/cartList";

const store= configureStore({
    reducer:{
        items:itemSlice.reducer,
        users:userSlice.reducer,
        cartList:cartList.reducer,
    }
})
export default store;