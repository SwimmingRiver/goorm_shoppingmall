import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../api/firebase";
import { useNavigate } from "react-router-dom";

const SignUp=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();
    const register = async()=>{
        try{
            await createUserWithEmailAndPassword(
                auth,
                email,
                password,
            );
            navigate('/');
        }catch(error){
            console.error(error);
        }
    }
    return<>
    SignUp
    <input placeholder="email" value={email} type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
    <input placeholder="password" value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
    <button onClick={register}>sign up</button>
    </>
}
export default SignUp;