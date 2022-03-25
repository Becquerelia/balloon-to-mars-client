//!CONTEXT FOR USECONTEXT HOOK WITH USER LOGGIN:

import { createContext, useState } from "react";

//CREATE CONTEXT:
const LoggedUserContext = createContext();

//CREATE WRAPPER FUNCTION:
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