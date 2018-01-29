import Course from "./Course";

const Season = (data = null) => {
    if (data) {
        return {
            start: data.start || null,
            end: data.end || null,
            courses: data.courses ? data.courses.map((course) => new Course(course)) : null
        };
    } else {
        return null;
    }
};

export default Season;