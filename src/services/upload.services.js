//!IMPORTS:
import axios from "axios";

//!FUNCTIONS:

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/upload-pic`
})

 service.interceptors.request.use((config)=>{
    const storedToken = localStorage.getItem("authToken")
    config.headers = storedToken && {Authorization: `Bearer ${storedToken}`}
    return config;
})

const uploadPicService = (file) => {
    return service.post("/", file)
}

//!EXPORT FUNCTIONS:

export {
    uploadPicService    
}