import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"
import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom"
import {getAllBookingsService} from "../services/booking.services"

function ObservatoryCalendar() {

    const [bookings, setAllBookings] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
        getAllBookings()
      }, [])

    const getAllBookings = async () => {
        try {
            const response = await getAllBookingsService()
            setAllBookings(response.data)
        }
        catch(err){
            navigate("/error")
        }
    }

    const notAvailableDates = () => bookings.map((eachBooking) => {
        return eachBooking.date
    })    
    
  return (
    <div>
        <FullCalendar 
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        //dateClick={(e)=>alert(e.dateStr)}
        dateClick={(e)=>console.log("Fecha seleccionada:" + e.dateStr)}        
        headerToolbar={{
              left: 'prev,next',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek'
            }}
        events={notAvailableDates}        
        businessHours= {{
        daysOfWeek: [ 0, 4, 5, 6 ],
        startTime: '22:00', 
        endTime: '24:00', 
        }}
        allDaySlot={false}
        slotMinTime="21:30"
        slotMaxTime="24:00"
        defaultTimedEventDuration='01:00'
        eventDurationEditable={false}
        eventOverlap={false}
        droppable={true}
        longPressDelay='500'
        dayMaxEvents={true}
        eventLongPressDelay='500'
        selectLongPressDelay='500'
        />
    </div>
  )
}

export default ObservatoryCalendar