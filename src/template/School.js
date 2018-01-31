import Course from "./Course";

const School = (data = null) => {
    if (data) {
        return {
            schoolName: data.schoolName || null,
            websiteUrl: data.websiteUrl || null,
            location: data.location || null,
            courses: data.courses ? data.courses.map((course) => new Course(course)) : null
        };
    } else {
        return null;
    }
};

export default School;