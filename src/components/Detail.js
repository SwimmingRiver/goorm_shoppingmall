import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import cartList from "../reducer/cartList";
import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    border:solid 1px black;
    height:80vh;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
const StyledImg = styled.img`
    width:10vw;
    margin-right:50px;
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
const ButtonGroup = styled.div`
    width:21vw;
    display:flex;
    justify-content:space-between;
`;
const ButtonToCart = styled.button`
;
`;

const Detail=(props)=>{
    const [clickToggle,setClickToggle]=useState(false);
    const {productId} = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state)=>state.items)[productId-1];
    const nowUser = useSelector(state=>state.users?.email);
    const myCart = useSelector(state=>state.cartList.filter((v)=>v.user === nowUser));
    const navigate = useNavigate();
   
    const addMyCart =(e)=>{
        setClickToggle(true);
        if(!clickToggle){
        dispatch(cartList.actions.addToCart({
            user:nowUser,
            items:{
                ...product,
                quantity:1
                },
            }));
        }
    }
    return(
    <Wrapper>
        <StyledImg src={product.image} alt={product.title}/>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <h1 style={{fontSize:"30px",fontWeight:"700",color:"gray"}}>{product.category}</h1>
    <h1 style={{fontSize:"30px"}}>{product.title}</h1>
    <h1 style={{fontSize:"30px",fontWeight:"900"}}>${product.price}</h1>
    <p style={{width:"16vw",color:"gray"}}>{product.description}</p>
    <ButtonGroup>
    <button style={{
        cursor:'pointer',
        borderRadius:'3px',
        width:'10vw',
        height:'5vh',
        backgroundColor:`${clickToggle?'#777a89':'#fff'}`,
        color:`${clickToggle?'#fff':'#777a89'}`,
    }} onClick={addMyCart}>장바구니 담기</button>
    <Button onClick={()=>navigate(`/cart/${nowUser}`)}>장바구니 보기</Button>    
    </ButtonGroup>
    
    </div>
    
    </Wrapper>
    )
}
export default Detail;