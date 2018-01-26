import React from "react";

const MonthViewEvent = ({ event }) => (
    <span>
        <strong>{event.title}</strong>
        {(event.analysis && event.analysis.type) && 
            <p>{event.analysis.type.confidence}% {event.analysis.type.name}</p>
        }
  </span>
);

export default MonthViewEvent;