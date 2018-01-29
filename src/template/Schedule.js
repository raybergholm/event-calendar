import Course from "./Course";

const Schedule = (data = null) => {
    let schedule = {
        mon: null,
        tue: null,
        wed: null,
        thu: null,
        fri: null,
        sat: null,
        sun: null
    };

    const occurrenceParser = (courseSchedule) => {
        courseSchedule.forEach((occurrence) => {

        });
    };

    if (data instanceof Array) {
        data.forEach((course) => {
            if(course.schedule){
                occurrenceParser(course.schedule);
            }
        });
    }else if(typeof data === "object"){
        occurrenceParser(data);
    }

    return schedule;
};

export default Schedule;