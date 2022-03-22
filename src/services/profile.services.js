//!IMPORTS:
import axios from "axios";

//!FUNCTIONS:

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/profile`
})

 service.interceptors.request.use((config)=>{
    const storedToken = localStorage.getItem("authToken")
    config.headers = storedToken && {Authorization: `Bearer ${storedToken}`}
    return config;
})

const getProfileService = () => {
    return service.get("/")   
}

const getMyBookingsService = () => {
    return service.get("/my-bookings")   
}

const getBookingsService = () => {
    return service.get("/admin/all-bookings")    
}

//!EXPORT FUNCTIONS:

export {
    getProfileService,   
    getMyBookingsService,
    getBookingsService
}