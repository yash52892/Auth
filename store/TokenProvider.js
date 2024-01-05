import TokenContext from "./tokenContext";
import React, { useState } from "react";

const TokenProvider=(props)=>{
    const [token, setToken]=useState(null);

    const handleToken=(id)=>{
        setToken(id);
    }
    const Final={
        token:token,
        handTok:handleToken
    }
    console.log(token)
     return (
        <TokenContext.Provider value={Final}>{props.children}</TokenContext.Provider>
     )
}
export default TokenProvider;