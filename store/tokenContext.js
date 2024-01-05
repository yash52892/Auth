import React from "react"

const TokenContext=React.createContext({
    token:'',
    time:null,
    handTok: (id)=>{}
});

export default TokenContext;