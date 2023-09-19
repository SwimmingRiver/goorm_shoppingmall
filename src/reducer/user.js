import { createSlice } from "@reduxjs/toolkit";

const initialState={};



const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        logIn:(state,action)=>{
            return state = {email:action.payload.user.email};
        },
        logOut:(state)=>{
            state.email = null;
        },
    }
})

export default userSlice;