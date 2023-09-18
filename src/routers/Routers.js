import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import Login from "../components/Login";
import SignUp from "../components/signUp";
import Detail from "../components/Detail";

const Routers=()=>{
    return(
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/sign_up" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="item/:productId" element={<Detail/>}/>
    </Routes>)
}
export default Routers;