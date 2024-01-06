import React from "react"

const TokenContext=React.createContext({
    isLoggedin:false,
    handleLoggedin: (id)=>{},
    handleLogout: ()=>{}
});

export default TokenContext;
