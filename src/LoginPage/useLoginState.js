import React from "react";

const useLoginState = () => {
    const[username,setUserName] = React.useState("")
    const[password,setPassword] = React.useState("")

    const getter = [username,password]
    const setter = [setUserName,setPassword]

    return{
        getter,setter
    }
}

export default useLoginState;