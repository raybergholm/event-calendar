import Season from "./Season";

const School = (name = "", url = "", location = null, seasonData = null) => {
    return {
        schoolName: name,
        websiteUrl: url,
        location: location,
        season: new Season(seasonData)
    };
};

export default School;