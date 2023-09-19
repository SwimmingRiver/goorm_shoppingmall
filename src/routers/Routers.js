import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import Login from "../components/Login";
import SignUp from "../components/signUp";
import Detail from "../components/Detail";
import Cart from "../components/Cart";

const Routers=()=>{
    return(
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/sign_up" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="item/:productId" element={<Detail/>}/>
        <Route path="cart/:userId" element={<Cart/>}/>
    </Routes>)
}
export default Routers;