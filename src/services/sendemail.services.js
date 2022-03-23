//!IMPORTS:
import axios from "axios";

//!FUNCTIONS:

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/send-email`
})

const sendEmailService = () => {
    return service.post("/")
}

//!EXPORT FUNCTIONS:

export {
    sendEmailService 
}
