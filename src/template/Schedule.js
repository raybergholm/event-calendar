import Course from "./Course";

const Schedule = (data = null) => {
    let schedule = {
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: [],
        sun: [],

        addEvent: function(entry) {
            if(entry.day && entry.payload){
                this[entry.day].push(entry.payload);
            }
        }
    };

    const occurrenceParser = (courseSchedule) => {
        courseSchedule.forEach((occurrence) => {

        });
    };
    if (data && data instanceof Array) {
        data.forEach((season) => {
            
        });
    }

    return schedule;
};

export default Schedule;