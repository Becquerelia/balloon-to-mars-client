//!IMPORTS:
import axios from "axios";

//!FUNCTIONS:

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/astronomical-events`
})

const getForumService = (id) => {
    return service.get(`/${id}/forum`, id)
}

const addNewCommentaryService = (id, newCommentary) => {
    return service.post(`/${id}/forum`, newCommentary)    
}

//!EXPORT FUNCTIONS:

export {   
    getForumService,
    addNewCommentaryService
}