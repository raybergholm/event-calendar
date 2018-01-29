// import bailaBaila from "./bailabaila.json";

import hsa from "./hsa.json";

import School from "../template/School";
import Schedule from "../template/Schedule";

const DataLoader = () => {
    let schools = importData();


    let schedule = generateSchedule(schools);

    return {
        schools: schools,
        schedule: schedule
    };
};

function importData() {
    let data = [];

    // data.push(new School(bailaBaila));

    data.push(new School(hsa));

    return data;
}

function generateSchedule(schools) {
    return null;
}

export default DataLoader;