import bailaBaila from "./bailabaila.json";

import School from "../template/School";
import Schedule from "../template/Schedule";

const DataLoader = () => {
    let data = [];

    data.push(new School(bailaBaila));

    
    data.forEach((entry) => {
        entry.schedule = generateSchedule(entry.courses);
    });

    return data;
};

const generateSchedule = (courses) => {
    return new Schedule(courses);
};

export default DataLoader;
