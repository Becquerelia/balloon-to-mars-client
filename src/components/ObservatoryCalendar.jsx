import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"
import momentPlugin from "@fullcalendar/moment"
//import esLocale from '@fullcalendar/core/locales/es';
import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom"
import {getAllBookingsService} from "../services/booking.services"
import RingLoader from "react-spinners/RingLoader";

function ObservatoryCalendar(props) {

  const {setDate} = props

    const [allBookings, setAllBookings] = useState([])
   
    const navigate = useNavigate()
  
    useEffect(()=>{
        getAllBookings()
      }, [])

    const getAllBookings = async () => {
        try {
            const response = await getAllBookingsService()            
            let resultArr = response.data
            let cloneArr = [...allBookings]
            resultArr.map((eachBooking)=>{
              cloneArr.push(eachBooking.date.split("T")[0])
              setAllBookings(cloneArr)
            })        
          }
        catch(err){
            if (err.response.status === 401) {
                navigate("/login");
            } else {
                navigate("/error");
            }
        }
    } 

    let usedDates = allBookings.map((eachBooking)=>{
      return JSON.parse(JSON.stringify({
        title:"Busy",
        start: eachBooking,
        color: "white",
        textColor: "red",
        eventOverlap: false,
        editable: false
      }))
    })
  
  //!LOADING SYSTEM:
  if(!allBookings){ 
    return (
      <div className="loadingRing" >
        <h2>Loading...</h2>
        <RingLoader color="#C83B30" size="10rem" />
      </div>
    )
  } 

  //!RENDER VIEW:
  return (
    <div>
        <FullCalendar 
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, momentPlugin]}
        //dateClick={(e)=>alert(e.dateStr)}
        dateClick={(e)=>setDate(e.dateStr.split("T")[0])}        
        headerToolbar={{
              left: 'prev',
              center: 'title',
              right: 'next'
            }}
        events={usedDates}
        eventColor= "white"
        //locale={esLocale}        
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
        height={500}
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