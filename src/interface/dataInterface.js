import mockEvents from "../mock/mockEvents";

import eventsJson from "../mock/events.json";

// import bailaBaila from "../data/bailabaila.json";

import hsa from "../data/hsa.json";

import School from "../template/School";
import Schedule from "../template/Schedule";

import moment from "moment";

// import endpoint from "./endpointConfig"; // TODO: do this later

const data = [
    // bailaBaila,
    hsa
];

const dataInterface = {
    fetchEvents: () => {
        let data = loadData();

        console.log("loaded data:", data);

        return eventsJson;
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
        let seasonStart = moment(school.season.start);
        let seasonEnd = moment(school.season.end);

        school.season.courses.forEach((course) => {
            for(let date = seasonStart.clone(); date < seasonEnd; date = date.clone().add(7, "days")){ // date.add(7, "days") works too since it's a mutator, but let's make it obvious that there's an assignment
                for(let day in course.schedule){
                    let eventStart = date.clone().day(day);
                    let eventEnd = eventStart.add(course.schedule[day].duration, "minutes");

                    reducer.push({
                        title: course.name,
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