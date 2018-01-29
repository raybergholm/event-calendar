import React from "react";
import BigCalendar from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

import MonthViewEvent from "./MonthViewEvent";
import AgendaViewEvent from "./AgendaViewEvent";

import moment from "moment";

import { correctTimezoneOffset } from "../utils/dateTimeUtils";

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
    const formatDate = (inputDate) => {
        return correctTimezoneOffset(inputDate).toDate();
    };

    return input.map((entry) => {
        return {
            id: entry.id,
            title: entry.name,
            start: formatDate(entry.start_time),
            end: formatDate(entry.end_time),
            description: entry.description,
            place: entry.place,
            analysis: entry._bh
        };
    });
};

export default EventCalendar;