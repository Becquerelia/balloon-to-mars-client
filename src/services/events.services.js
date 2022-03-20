//!IMPORTS:
import axios from "axios";

//!FUNCTIONS:

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/astronomical-events`
})

const getAllEventsService = () => {
    return service.get("/")
}

const addNewEventService = (newEvent) => {
    return service.post("/", newEvent)    
}

const getEventDetailsService = (id) =>{
    return service.get(`/${id}`)
}

const deleteEventService = (id) =>{
    return service.delete(`/${id}`)
}

const editEventService = (id, updatedEvent) =>{
    return service.patch(`/${id}`, updatedEvent)
}

const getForumService = (id) => {
    return service.get(`/${id}/forum`, id)
}

const addNewCommentaryService = (id, newCommentary) => {
    return service.post(`/${id}/forum`, newCommentary)    
}

//!EXPORT FUNCTIONS:

export {
    getAllEventsService,
    addNewEventService,
    getEventDetailsService,
    deleteEventService,
    editEventService,
    getForumService,
    addNewCommentaryService
}