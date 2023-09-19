import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import CartItem from "./CartItem";
import cartList from "../reducer/cartList";

import styled from "styled-components";
const Title = styled.h1`
    text-align:center;
    font-size:40px;
    font-family:'Nanum Gothic', sans-serif;
    margin-bottom:12px;
`;
const List = styled.div`
    border:1px black solid;
    height:30vh;
    overflow:auto;
`;
const Button=styled.button`
    cursor:pointer;
    border-radius:3px;
    width:5vw;
    height:5vh;
    background-color:#777a89;
    color:#fff;
    border:none;

`;
const Cart =(props)=>{
    const [cost,setCost] = useState(0);
    const {userId} = useParams();
    const myItems = useSelector((state)=>state.cartList.filter(v=>v.user === userId))[0];
    const dispatch = useDispatch();
    useEffect(()=>{
        let total = 0;
        myItems.items.map((i)=>total+=i.price*i.quantity);
        setCost(total);
    },[myItems]);

    console.log(myItems)
    return(
        <>
        <Title>장바구니</Title>
        {myItems.items?
        <div>
        <List>
        {myItems.items.map((item,index)=><CartItem image={item.image} category={item.category} id={item.id} title={item.title} price={item.price} quantity={item.quantity}/>)}
        </List>
        <div style={{display:"flex",justifyContent:'flex-end'}}>
        <h1 style={{fontWeight:"800",marginRight:"10px"}}>비용${cost}</h1>
        <Button onClick={()=>{dispatch(cartList.actions.clearToCart({email:userId}))}}>계산하기</Button>
        </div>
        </div>:<div>
          <h1>장바구니가 비었습니다.</h1>
            <span style={{fontSize:'30vw'}} class="material-symbols-outlined">
remove_shopping_cart
</span>
            </div>}
        </>
    )
}
export default Cart;