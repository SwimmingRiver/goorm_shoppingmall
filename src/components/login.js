import {onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";
import { useEffect, useState } from "react";
import userSlice from "../reducer/user";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SignUp from "./signUp";

const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [user,setUser]=useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{
        onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
    },[])
    
    const submit=async()=>{
        try{
            const user =await signInWithEmailAndPassword(
                auth,
                email,
                password,
            );
            dispatch(userSlice.actions.logIn(user));
        }catch(error){
            console.error(error);
        }
    }

    return(<>
    Login
    <input placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
    <input placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
    <button onClick={submit}>login</button>
    <Link to="/sign_up">sign up</Link>
    </>)
}
export default Login;