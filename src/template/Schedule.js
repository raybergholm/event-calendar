import {
    buildTimestamp,
    startOfDay,
    endOfDay
} from "../utils/dateTimeUtils";

const Schedule = (data = null) => {
    if (data) {
        return {
            start: data.start ? buildTimestamp(data.start, startOfDay) : null,
            end: data.start ? buildTimestamp(data.end, endOfDay) : null,
            days: data.days || {},
            except: data.except || [],
        };
    } else {
        return null;
    }
};

export default Schedule;