//!IMPORTS:
import axios from "axios";

//!FUNCTIONS:

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/image-gallery`
})

const getAllImagesService = () => {
    return service.get("/")
}

//!EXPORT FUNCTIONS:

export {
    getAllImagesService
}