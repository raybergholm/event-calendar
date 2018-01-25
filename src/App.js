import React from "react";
import "./App.css";

import EventCalendar, { formatEvents } from "./calendar/EventCalendar";

import eventsInterface from "./interface/eventsInterface";

let events;
const rawEvents = eventsInterface.fetchEvents();
if(rawEvents){
    events = formatEvents(rawEvents);
}

const App = () => (
    <EventCalendar 
        events={events}
        />
);

export default App;
