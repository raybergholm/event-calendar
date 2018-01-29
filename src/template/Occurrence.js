const Course = (data = null) => {
    if (data) {
        return {
            parentCourse: data.parentCourse || null,
            start: data.start || null,
            end: data.end || null
        };
    } else {
        return null;
    }
};

export default Course;