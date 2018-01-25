import moment from "moment";

export default [
    {
        id: 0,
        title: "THIS IS A TEST",
        allDay: true,
        start: moment().toDate(),
        end: moment().add(1, "day").toDate()
    },
    {
        id: 0,
        title: "THIS IS A TEST",
        start: moment().add(2, "days").toDate(),
        end: moment().add(2, "days").add(3, "hours").toDate()
    }
];