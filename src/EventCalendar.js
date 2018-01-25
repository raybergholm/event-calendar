import React from 'react';
import BigCalendar from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

import moment from "moment";

import { parseTimezoneOffset, correctTimezoneOffset } from "./utils/utils";

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

const EventCalendar = ({events}) => (
    <BigCalendar
        events={events}
        defaultDate={new Date()}
    />
);

export const formatEvents = (input) => {
    return input.map((entry) => {
        return {
            id: entry.id,
            title: entry.name,
            desc: entry.description,
            start: formatDate(entry.start_time),
            end: formatDate(entry.end_time)
        };
    });
};

function formatDate(inputDate){
    let offset = parseTimezoneOffset(inputDate);
    let formattedDate = correctTimezoneOffset(moment(inputDate), offset);
    return formattedDate.toDate();
}

export default EventCalendar;