import {onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";
import { useEffect, useState } from "react";
import userSlice from "../reducer/user";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";
const Wrapper=styled.div`
    margin-top:30px;
    display:flex;
    justify-content:center;
    height:100vh;
`;
const Box = styled.div`

 display:flex;
 flex-direction:column;
 justify-content:space-between;
 align-items:center;
 height:40vh;
 width:30vw;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
 
`;
const Button=styled.button`
    cursor:pointer;
    border-radius:3px;
    width:10vw;
    height:5vh;
    background-color:#777a89;
    color:#fff;
    border:none;

`;
const Input = styled.input`
    width:10vw;
    height:5vh;
    font-size:25px;
`;
const Title = styled.h1`
    text-align:center;
    font-size:40px;
    font-family:'Nanum Gothic', sans-serif;
    color:#4e2273;
    margin-bottom:12px;
`;
const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [user,setUser]=useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
    },[])
    
    const submit=async()=>{
        if(email===""||password===""){
            return alert("입력을 확인해주세요");
        }
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                password,
            );
            dispatch(userSlice.actions.logIn(user));
            navigate('/');
        }catch(error){
            console.error(error);
        }
    }

    return(
    <Wrapper>
     <Box>
   <Title>로그인</Title> 
    <Input placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
    <Input placeholder="password" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
    <Button onClick={submit}>로그인</Button>
    <div style={{display:"flex" , marginBottom:"10px"}}>
    <p>계정이 없습니까?</p><Link to="/sign_up">회원가입하기</Link>
    </div>
    </Box>
    </Wrapper>
    )
}
export default Login;