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

//!EXPORT FUNCTIONS:

export {
    getAllEventsService,
    addNewEventService,
    getEventDetailsService,
    deleteEventService,
    editEventService
}