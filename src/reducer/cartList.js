import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
        user:'',
        items:[],
    }]

const cartList = createSlice({
    name:"cartList",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const userIndex = state.findIndex((item) => item.user === action.payload.user);
            if(userIndex>-1){
                console.log("on");
                state[userIndex].items.push({...action.payload.items});
            }
            else{
            state.push({
                    user:action.payload.user,
                    items:[{...action.payload.items}]
                });
            }
        },
        addQuantity:(state,action)=>{
            const userIndex = state.findIndex((item) => item.user === action.payload.user);
            if(userIndex>-1){
                const itemIndex = state[userIndex].items.findIndex((item) => item.id === action.payload.itemId);
                if(itemIndex>-1){
                    state[userIndex].items[itemIndex].quantity += 1;
                }
            }
        },
        minusQuantity:(state,action)=>{
            const userIndex = state.findIndex((item) => item.user === action.payload.user);
            if(userIndex>-1){
                const itemIndex = state[userIndex].items.findIndex((item) => item.id === action.payload.itemId);
                if(itemIndex>-1){
                    state[userIndex].items[itemIndex].quantity -= 1;
                }
            }
        },
        clearToCart:(state,action)=>{
            const userIndex = state.findIndex((item) => item.user === action.payload.email);
           state[userIndex].items = [];
        }
    }
})

export default cartList;