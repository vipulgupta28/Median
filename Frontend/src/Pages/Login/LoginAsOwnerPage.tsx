import React from "react";
import LoginAsOwner from "../../Components/Login/LoginAsOwner";
import Navbar from "../../Components/Navbar/Navbar";

const LoginAsOwnerPage:React.FC = () =>{
    return(
        <>
        <Navbar/>
        <LoginAsOwner/>
        </>
    )
}

export default LoginAsOwnerPage;