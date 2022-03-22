import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"
import momentPlugin from "@fullcalendar/moment"
import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom"
import {getAllBookingsService} from "../services/booking.services"
import RingLoader from "react-spinners/RingLoader";

function ObservatoryCalendar(props) {

  const {date, setDate} = props

    const [allBookings, setAllBookings] = useState([])
    const [newBooking, setNewBooking] = useState(null)
    //events?


    const navigate = useNavigate()

    // const seeBookingOnCalendar = () => {
    //     return(
    //         <div>
    //             {dateSelected.timeText}
    //         </div>
    //     )
    // }

    useEffect(()=>{
        getAllBookings()
      }, [])

    const getAllBookings = async () => {
        try {
            const response = await getAllBookingsService()
            //let dateOfBookingsDone
            //response.data.map((eachBookingDone)=>{
            //    return dateOfBookingsDone = eachBookingDone.lastname
            //})
            setAllBookings(response.data)
            console.log(response.data)
        }
        catch(err){
            if (err.response.status === 401) {
                navigate("/login");
            } else {
                navigate("/error");
            }
        }
    } 
  
  //!LOADING SYSTEM:
  if(!allBookings){ 
    return (
      <div>
        <RingLoader color="#C83B30" size="10rem" />
        <h2>Loading...</h2>
      </div>
    )
  } 

  //!RENDER VIEW:
  return (
    <div>
        <FullCalendar 
        initialView="timeGridWeek"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, momentPlugin]}
        //dateClick={(e)=>alert(e.dateStr)}
        dateClick={(e)=>setDate(e.dateStr.split("T")[0])}        
        headerToolbar={{
              left: 'prev,next',
              center: 'title',
              right: 'timeGridWeek,dayGridMonth'
            }}
        events={allBookings}
        eventColor= "white"        
        selectMirror={true}
        businessHours= {{
        daysOfWeek: [ 4, 5, 6 ],
        startTime: '21:30', 
        endTime: '24:00', 
        }}
        timeZone="UTC"
        allDaySlot={false}
        slotMinTime="21:30"
        slotMaxTime="24:00"
        height={300}
        selectable
        defaultTimedEventDuration='01:00'
        eventDurationEditable={false}
        eventOverlap={false}
        droppable={true}
        longPressDelay='500'
        dayMaxEvents={true}
        //eventContent ={seeBookingOnCalendar}
        />
    </div>
  )
}

export default ObservatoryCalendar