import { createSlice } from "@reduxjs/toolkit";

const initialState=[];



const itemSlice = createSlice({
    name:'items',
    initialState,
    reducers:{
        loadProductInit:(state,action)=>{
             state.push(...action.payload);
        },
    }
})

export default itemSlice;