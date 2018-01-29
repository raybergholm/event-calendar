import Schedule from "./Schedule";

const Season = (data = null) => {
    if (data) {
        return {
            start: data.start || null,
            end: data.end || null,
            schedule: new Schedule(data.schedule || null)
        };
    } else {
        return null;
    }
};

export default Season;