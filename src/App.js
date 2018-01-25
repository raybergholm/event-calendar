import React from "react";
import "./App.css";
import EventCalendar from "./EventCalendar";

import eventsInterface from "./interface/eventsInterface";

const events = eventsInterface.fetchEvents();

const App = () => (
    <EventCalendar 
        events={events}
        />
);

export default App;
