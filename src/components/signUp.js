import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../api/firebase";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper=styled.div`
    margin-top:30px;
    display:flex;
    justify-content:center;
    height:60vh;
`;
const Box = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:space-between;
 align-items:center;
 height:30vh;
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
    margin-bottom:10px;
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
    return(
    <Wrapper>
        <Box>
        <Title>SignUp</Title>
    <Input placeholder="email" value={email} type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
    <Input placeholder="password" value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
    <Button onClick={register}>sign up</Button>
        </Box>
    </Wrapper>
    )
}
export default SignUp;