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
    let schedule = generateSchedule(schools);

    return {
        schools: schools,
        schedule: schedule
    };
}

function importData() {
    return data.map((entry) => new School(entry));
}

function generateSchedule(schools) {
    return null;
}

function buildEventsList(schools) {
    schools.reduce((reducer, school) => {
        let startDate = moment(school.season.start);
        let endDate = moment(school.season.end);

        school.season.courses.forEach((course) => {
            for(let date = startDate.clone(); date < endDate; date = date.add(7, "days")){
                let event = {};
                for(let day in course.schedule){
                    let eventStart = date.clone().day(day);
                    let eventEnd = eventStart.add(course.schedule[day].duration, "minutes");
                }
                
                reducer.push(event);
            }
        });

        return reducer;
    }, []);
}

export default dataInterface;