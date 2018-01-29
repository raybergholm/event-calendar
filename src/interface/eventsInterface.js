import mockEvents from "../mock/mockEvents";

import eventsJson from "../mock/events.json";

// import endpoint from "./endpointConfig"; // TODO: do this later

const eventsInterface = {
    fetchEvents: () => {
        return eventsJson;
    }
};

export default eventsInterface;