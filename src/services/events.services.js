import axios from "axios";

//FUNCTIONS:

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/astronomical-events`
})

const getAllEventsService = () => {
    return service.get("/")
}

const addNewEventService = (newEvent) => {
    return service.post("/", newEvent)    
}

//EXPORT FUNCTIONS:

export {
    getAllEventsService,
    addNewEventService
}