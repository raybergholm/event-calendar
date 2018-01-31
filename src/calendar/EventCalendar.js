import React from "react";
import BigCalendar from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

import MonthViewEvent from "./MonthViewEvent";
import AgendaViewEvent from "./AgendaViewEvent";

import moment from "moment";

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

const EventCalendar = ({ events }) => (
    <div className="calendar-wrapper">
        <BigCalendar
            events={events}
            defaultDate={new Date()}
            showMultiDayTimes={true}
            components= {{
                month: {
                    event: MonthViewEvent
                },
                agenda: {
                    event: AgendaViewEvent
                }
            }}
        />
    </div>
);

export const formatEvents = (input) => {
    return input.map((entry) => {
        return {
            id: entry.id,
            title: entry.name,
            start: entry.start,
            end: entry.end,
            level: entry.level,
            location: entry.location,
            teacher: entry.teacher
        };
    });
};

export default EventCalendar;