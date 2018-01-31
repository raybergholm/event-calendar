import mockEvents from "../mock/mockEvents";

import eventsJson from "../mock/events.json";



import School from "../template/School";
import Schedule from "../template/Schedule";

import moment from "moment";

// import endpoint from "./endpointConfig"; // TODO: do this later

// JSON files
import hsaSpring2018 from "../data/hsa_spring_2018.json";
import hdcSpring2018 from "../data/hdc_spring_2018.json";
import sl01_03_2018 from "../data/hdc_spring_2018.json";


const data = [
    hsaSpring2018,
    hdcSpring2018,
    sl01_03_2018
];

const dataInterface = {
    fetchEvents: () => {
        let data = loadData();

        console.log("loaded data:", data);

        return data;
    }
};

function loadData (){
    let schools = importData();
    let events = generateSchedule(schools);

    return {
        schools: schools,
        events: events
    };
}

function importData() {
    return data.map((entry) => new School(entry));
}

function generateSchedule(schools) {
    return buildEventsList(schools);
}

function buildEventsList(schools) {
    let events = schools.reduce((reducer, school) => {
        const dayParser = (dayString) => {
            let day = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"].indexOf(dayString);
            return day !== -1 ? day + 1 : null;
        };

        const eventStartParser = (inputDate, day, occurrance) => {
            const time = occurrance.start.split(":");
            return inputDate.clone().isoWeekday(dayParser(day)).add(time[0], "hours").add(time[1], "minutes");
        };

        const eventEndParser = (inputDate, occurrance) => {
            return inputDate.clone().add(occurrance.duration, "minutes");
        };

        const isExceptionDay = (date, exceptions) => {
            return exceptions.some((exception) => date.isSame(moment(exception, "YYYY-MM-DD"), "day"));
        };

        school.courses.forEach((course) => {
            const schedule = course.schedule;
            let seasonStart = moment(schedule.start, "YYYY-MM-DD");
            let seasonEnd = moment(schedule.end, "YYYY-MM-DD");

            for(let date = seasonStart.clone(); date < seasonEnd; date = date.add(7, "days")){ // date.add(7, "days") works too since it's a mutator, but let's make it obvious that there's an assignment
                for(let day in schedule.days){
                    const occurrance = schedule.days[day];
                    let eventStart = eventStartParser(date, day, occurrance);
                    let eventEnd = eventEndParser(eventStart, occurrance);

                    if(eventStart < seasonStart || eventStart > seasonEnd){
                        continue;
                    }else if(isExceptionDay(eventStart, schedule.except)){
                        continue;
                    }

                    reducer.push({
                        name: course.name,
                        level: course.level,
                        location: course.location,
                        teacher: course.teacher,
                        start: eventStart.toDate(),
                        end: eventEnd.toDate()
                    });
                }
            }
        });
        return reducer;
    }, []);

    events.sort((left, right) => {
        if(!left || !left.start || !right || !right.start || left.start.getTime() === right.start.getTime()){
            return 0;
        }else if(left.start.getTime() < right.start.getTime()){
            return -1;
        }else {
            return 1;
        }
    });

    return events;
}

export default dataInterface;