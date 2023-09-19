import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { auth } from "../api/firebase";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "../reducer/user";

const HeadWrapper = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100vw;
  padding:auto;
  box-shadow:0px 5px 10px rgba(0, 0, 0, 0.2)
`;
const NavWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    width:3vw;
    margin-right:100px;

`;
const HeadNav=()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loggedUser = useSelector(state=>state.users);
    const logout=async()=>{
        try{
            await signOut(auth);
            dispatch(userSlice.actions.logOut());
        }catch(error){
            console.error(error);
        }
    }
    const ClickCart=()=>{
        loggedUser.email?navigate(`/cart/${loggedUser.email}`):alert('로그인이 필요합니다.')}
    
    return(<HeadWrapper>
        <h1 id="title"style={{cursor:"pointer"}} onClick={()=>navigate('/')}>shop</h1>
        <NavWrapper>
            <span class="material-symbols-outlined" style={{cursor:"pointer"}} onClick={ClickCart}>shopping_cart</span>
            
            {loggedUser.email?(
            <>
            <p>{loggedUser.email}</p>
            <span class="material-symbols-outlined" style={{cursor:"pointer"}}onClick={()=>{
                return logout()
                }}>logout</span>
            </>)
            :
            <span class="material-symbols-outlined" style={{cursor:"pointer"}}onClick={()=>navigate('/login')}>login</span>

            }
            
        </NavWrapper>
    </HeadWrapper>)
}
export default HeadNav;