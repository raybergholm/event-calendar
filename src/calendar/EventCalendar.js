import React from "react";
import BigCalendar from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

import AgendaEvent from "./AgendaEvent";

import moment from "moment";

import { parseTimezoneOffset, correctTimezoneOffset } from "../utils/utils";

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

const EventCalendar = ({events}) => (
    <BigCalendar
        events={events}
        defaultDate={new Date()}
        showMultiDayTimes={true}
        components= {{
            agenda: {
                event: AgendaEvent
            }
        }}
    />
);

export const formatEvents = (input) => {
    const formatDate = (inputDate) => {
        let offset = parseTimezoneOffset(inputDate);
        let formattedDate = correctTimezoneOffset(moment(inputDate), offset);
        return formattedDate.toDate();
    };

    return input.map((entry) => {
        return {
            id: entry.id,
            title: entry.name,
            start: formatDate(entry.start_time),
            end: formatDate(entry.end_time),
            description: entry.description,
            place: entry.place,

        };
    });
};

export default EventCalendar;