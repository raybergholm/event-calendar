import React from "react";
import "./App.css";

import EventCalendar, { formatEvents } from "./calendar/EventCalendar";

import dataInterface from "./interface/dataInterface";

let events;
const rawEvents = dataInterface.fetchEvents();
if(rawEvents){
    events = formatEvents(rawEvents);
}

const App = () => (
    <EventCalendar 
        events={events}
        />
);

export default App;
