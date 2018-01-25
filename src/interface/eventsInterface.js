import mockEvents from "../mock/mockEvents";

import eventsJson from "../mock/events.json";

import endpoint from "./endpointConfig";

const eventsInterface = {
    fetchEvents: () => {
        return eventsJson;
    }
};

export default eventsInterface;