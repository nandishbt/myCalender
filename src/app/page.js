// import Image from "next/image";
'use client'
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import { Calendar } from '@fullcalendar/core';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

export default function Home() {

  const [view, setView] = useState("dayGridMonth");

  // console.log(view);
  


  
  return (

    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white p-4 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold mb-4  text-center ">Calendar App</h1>

        {/* Calendar */}
        <FullCalendar
          key={view}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={view}
          headerToolbar={{
            start: "prev,next today",
            center: "title",
            end: "dayGridMonth timeGridWeek timeGridDay",
          }}
          themeSystem = "bootstrap5"
          height="auto"

          nowIndicator={true}
          selectable={true}
          selectMirror={true}

          dayMaxEventRows={true}
       


          events={[
            { title: "Project", start: "2025-05-08T10:00:00", end: "2025-05-09T12:00:00" },
            { title: "Workout", start: "2025-05-10T18:00:00", end: "2025-05-10T19:00:00" },
            { title: "Dinner", start: "2025-05-11T20:00:00", end: "2025-05-11T21:00:00" },
            { title: "Meeting", start: "2025-05-18T10:00:00", end: "2025-05-18T12:00:00" },
          ]}
          eventColor="green"
         
          
        />
      </div>
    </div>
   
  );
}
