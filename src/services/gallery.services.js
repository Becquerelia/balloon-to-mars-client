//!IMPORTS:
import axios from "axios";

//!FUNCTIONS:

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/image-gallery`
})

const getAllImagesService = () => {
    return service.get("/")
}

const getOneImageService = (id) =>{
    return service.get(`/${id}`)    
}

//!EXPORT FUNCTIONS:

export {
    getAllImagesService,
    getOneImageService
}