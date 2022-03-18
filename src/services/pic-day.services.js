//!IMPORTS:
import axios from "axios";

//!FUNCTIONS:

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/pic-of-the-day`
})

const getPicOfTheDayService = () => {
    return service.get("/")
}

//!EXPORT FUNCTIONS:

export {
    getPicOfTheDayService
}