import React from "react";

const MonthViewEvent = ({ event }) => (
    <span class={`course_level_${event.level}`}>
        <strong>{event.title}</strong>
        <p>{event.location}</p>
  </span>
);

export default MonthViewEvent;