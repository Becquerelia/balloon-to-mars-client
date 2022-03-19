//!IMPORTS:
import axios from "axios";

//!FUNCTIONS:

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/auth`
})

const signupService = (user) => {
    return service.post("/signup", user)
}

const loginService = (user) => {
    return service.post("/login", user)
}

//!EXPORT FUNCTIONS:

export {
    signupService,
    loginService    
}