import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "../reducer/item";
import userSlice from "../reducer/user";

const store= configureStore({
    reducer:{
        items:itemSlice.reducer,
        users:userSlice.reducer,
    }
})
export default store;