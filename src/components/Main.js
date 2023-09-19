import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
    padding:10px;
`;
const Title = styled.h1`
    text-align:center;
    font-size:40px;
    font-family:'Nanum Gothic', sans-serif;
    color:#4e2273;
    margin-bottom:12px;
`;
const ButtonGroup = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    height:10vh;
    margin-bottom:10px;
`;
const Button =styled.button`
    border-radius:5px;
    width:10vw;
    height:10vh;
    cursor:pointer;
    background-color:#fff;
    font-size:20px;
    font-family:'Noto Sans KR', sans-serif;
    font-weight:800;
    &:hover{
        background-color:#777a89;
        color:#fff;
        border:none;
    }
`;
    
const Main=()=>{

const productArr = useSelector((state)=>state.items);
const [showingList,setShowingList]=useState([]);
const [categories,setCategories]=useState('');

useEffect(()=>{
    setShowingList(()=>[...productArr])
},[productArr])
useEffect(()=>{
    if(categories===""){
        setShowingList(()=>[...productArr])
    }
    if(categories!==""){
    let arr = productArr.filter((v)=>v.category === categories);
    setShowingList(()=>[...arr]);
    }
},[categories]);

return(

    <Wrapper>
    <Title>Products</Title>
    <ButtonGroup>
    <Button onClick={()=>{setCategories('')}}>모두</Button>
    <Button onClick={()=>{setCategories('electronics')}}>전자기기</Button>
    <Button onClick={()=>{setCategories(`jewelery`)}}>쥬얼리</Button>
    <Button onClick={()=>{setCategories(`men's clothing`)}}>남성의류</Button>
    <Button onClick={()=>{setCategories(`women's clothing`)}}>여성의류</Button>
    </ButtonGroup>
    <h1 style={{color:"gray"}}>Showing: {showingList.length} items</h1>
    <ItemList list={showingList}/>
    </Wrapper>    
    )
}
export default Main;