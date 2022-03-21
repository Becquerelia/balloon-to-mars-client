//!IMPORTS:
import axios from "axios";

//!FUNCTIONS:

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/astronomical-events`
})

service.interceptors.request.use((config)=>{
    const storedToken = localStorage.getItem("authToken")
    config.headers = storedToken && {Authorization: `Bearer ${storedToken}`}
    return config;
   })

   const addNewCommentaryService = (id) => {
    return service.post(`/${id}`)    
}

   const getForumService = (id) => {
    return service.get(`/${id}/forum`, id)
}



//!EXPORT FUNCTIONS:

export {   
    getForumService,
    addNewCommentaryService
}