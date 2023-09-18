import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { auth } from "../api/firebase";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "../reducer/user";

const HeadWrapper = styled.div`
  border:solid 1px black;
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100vw;
  padding:auto;
`;
const NavWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    width:10vw;

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
    return(<HeadWrapper>
        <h1 onClick={()=>navigate('/')}>shop</h1>
        <NavWrapper>
            <p>cart</p>
            {loggedUser?<p>{loggedUser.email}</p>:null}
            <p onClick={()=>navigate('/login')}>login</p>
            <p onClick={logout}>logout</p>
        </NavWrapper>
    </HeadWrapper>)
}
export default HeadNav;