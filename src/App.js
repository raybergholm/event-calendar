import React from "react";
import "./App.css";

import EventCalendar, { formatEvents } from "./calendar/EventCalendar";

import dataInterface from "./interface/dataInterface";

let events;
const data = dataInterface.fetchEvents();

const App = () => (
    <EventCalendar 
        events={data ? formatEvents(data.events) : null}
        />
);

export default App;
