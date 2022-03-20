//!IMPORTS:
import axios from "axios";

//!FUNCTIONS:

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/observatory`
})

const bookVisitService = (newBooking) => {
    return service.post("/", newBooking)    
}

//!EXPORT FUNCTIONS:

export {
    bookVisitService
}