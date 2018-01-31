import React from "react";

const MonthViewEvent = ({ event }) => (
    <span class={`course_level_${event.level}`}>
        <strong>{event.name}</strong>
        <p>{event.location}</p>
  </span>
);

export default MonthViewEvent;