import { createContext, useState } from "react";

const LoggedUserContext = createContext();

function LoggedUserWrapper (props){

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const passedContext = {
        isLoggedIn, setIsLoggedIn 
    }

    return (
        <LoggedUserContext.Provider value={passedContext} >
            {props.children}
        </LoggedUserContext.Provider>
    ) 
}

export {LoggedUserContext, LoggedUserWrapper}