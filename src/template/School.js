import Season from "./Season";

const School = (data = null) => {
    if (data) {
        return {
            schoolName: data.schoolName || null,
            websiteUrl: data.websiteUrl || null,
            location: data.location || null,
            season: new Season(data.season || null)
        };
    } else {
        return null;
    };

};

export default School;