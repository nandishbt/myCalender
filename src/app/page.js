// import Image from "next/image";
'use client'
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Home() {

  const [view, setView] = useState("dayGridMonth");

  // console.log(view);
  


  
  return (

    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white p-4 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Calendar App</h1>

        {/* View Tabs */}
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => setView("dayGridMonth")}
            className={`px-4 py-2 rounded ${
              view === "dayGridMonth"
                ? "bg-blue-600 text-white"
                : "bg-gray-500"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setView("timeGridWeek")}
            className={`px-4 py-2 rounded ${
              view === "timeGridWeek" ? "bg-blue-600 text-white" : "bg-gray-600"
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setView("timeGridDay")}
            className={`px-4 py-2 rounded ${
              view === "timeGridDay" ? "bg-blue-600 text-white" : "bg-gray-600"
            }`}
          >
            Daily
          </button>
        </div>

       
        

        {/* Calendar */}
        <FullCalendar
          key={view}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={view}
          headerToolbar={{
            start: "prev,next today",
            center: "title",
            end: "",
          }}
          height="auto"
          events={[
            { title: "Meeting", date: "2025-05-07" },
            { title: "Workout", date: "2025-05-08T10:00:00" },
          ]}
        />
      </div>
    </div>
   
  );
}
