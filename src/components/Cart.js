import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import CartItem from "./CartItem";
import cartList from "../reducer/cartList";



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


    return(
        <>
        <h1>{userId}'s Cart</h1>
        {myItems.items.map((item,index)=><CartItem id={item.id} title={item.title} price={item.price} quantity={item.quantity}/>)}
        <h1>비용${cost}</h1>
        <button onClick={()=>{dispatch(cartList.actions.clearToCart({email:userId}))}}>계산하기</button>
        </>
    )
}
export default Cart;