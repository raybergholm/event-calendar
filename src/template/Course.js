import Schedule from "./Schedule";

const Course = (data = null) => {
    if (data) {
        return {
            name: data.name || null,
            level: data.level || null,
            tags: data.tags || null,
            location: data.location || null,
            teacher: data.teacher || null,
            url: data.url || null,
            schedule: data.schedule ? new Schedule(data.schedule) : null
        };
    } else {
        return null;
    }
};

export default Course;