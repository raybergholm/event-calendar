import mockEvents from "../mock/mockEvents";

import eventsJson from "../mock/events.json";


// import bailaBaila from "./bailabaila.json";

import hsa from "./hsa.json";

import School from "../template/School";
import Schedule from "../template/Schedule";

// import endpoint from "./endpointConfig"; // TODO: do this later

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
    let data = [];

    // data.push(new School(bailaBaila));

    data.push(new School(hsa));

    return data;
}

function generateSchedule(schools) {
    return null;
}

export default dataInterface;