import Course from "./Course";

import { buildTimestamp, startOfDay, endOfDay } from "../utils/dateTimeUtils";

const Season = (data = null) => {
    if (data) {
        return {
            start: data.start ? buildTimestamp(data.start, startOfDay) : null,
            end: data.start ? buildTimestamp(data.end, endOfDay) : null,
            courses: data.courses ? data.courses.map((course) => new Course(course)) : null
        };
    } else {
        return null;
    }
};

export default Season;