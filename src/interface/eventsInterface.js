import mockEvents from "../mock/mockEvents";

import eventsJson from "../mock/events.json";

import endpoint from "./endpointConfig";

const eventsInterface = {
    fetchEvents: () => {
        return JSON.parse(eventsJson);
    }
};

export default eventsInterface;