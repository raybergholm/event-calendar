import React from "react";

const AgendaViewEvent = ({ event }) => (
    <span class={`course_level_${event.level}`}>
        <strong>{event.title}</strong>
        <p>{event.location}</p>
        <p>{`level: ${event.level}, taught by ${event.teacher}`}</p>
    </span>
);

export default AgendaViewEvent;