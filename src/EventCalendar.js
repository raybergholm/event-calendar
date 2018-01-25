import React from 'react';
import BigCalendar from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

import moment from "moment";

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

const EventCalendar = ({events}) => (
    <BigCalendar
        events={events}
        defaultDate={new Date()}
    />
);

export default EventCalendar;