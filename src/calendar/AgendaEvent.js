import React from "react";

const AgendaEvent = ({event}) => (
    <span>
        <em>{event.title}</em>
        <p>{`${event.place.name}${event.place.location && event.place.location.street && event.place.location.city ? `${event.place.location.street}, ${event.place.location.city}`: null}`}</p><br />
        <p>{event.description}</p>
    </span>
);

export default AgendaEvent;