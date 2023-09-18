import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import Login from "../components/login";
import SignUp from "../components/signUp";

const Routers=()=>{
    return(
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/sign_up" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>)
}
export default Routers;