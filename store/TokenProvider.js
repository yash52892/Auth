import TokenContext from "./tokenContext";
import React, { useState } from "react";

const TokenProvider=(props)=>{
    const initToken=localStorage.getItem("id")

    const [token, setToken]=useState(initToken);
    const userLoggin=!!token;

    const handleLogin=(id)=>{
        setToken(id);
        localStorage.setItem("id",token);
    }
    const handleLogout=()=>{
        setToken(null);
        localStorage.removeItem("id");
    }

    const Final={
        token:token,
        isLoggedin:userLoggin,
        handleLoggedin:handleLogin,
        handleLogout:handleLogout
    }
    console.log(token);
     return (
        <TokenContext.Provider value={Final}>{props.children}</TokenContext.Provider>
     )
}
export default TokenProvider;
