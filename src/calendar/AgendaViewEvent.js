import React from "react";

const AgendaViewEvent = ({ event }) => (
    <span>
        <strong>{event.title}</strong>
        <p>{event.place && event.place.name ? `${event.place.name}${event.place.location && event.place.location.street && event.place.location.city ? `, ${event.place.location.street}, ${event.place.location.city}`: null}` : null}</p>
        <p>{event.description}</p>
    </span>
);

export default AgendaViewEvent;