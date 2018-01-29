import Schedule from "./Schedule";

const Course = (data = null) => {
    if (data) {
        return {
            name: data.name || null,
            location: data.location || null,
            schedule: new Schedule(data.schedule || null)
        };
    } else {
        return null;
    }
};

export default Course;