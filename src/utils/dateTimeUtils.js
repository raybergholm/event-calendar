import moment from "moment";

export const startOfDay = "00:00:00";
export const endOfDay = "23:59:59"; 

export const correctTimezoneOffset = (dateTimeString) => {
    const parseTimezoneOffset = (dateTimeString) => {
        let gmtRegex = /Z$/;
        if (gmtRegex.test(dateTimeString)) {
            return {
                hours: 0,
                minutes: 0
            };
        } else {
            let timezoneRegex = /[+-]\d{2}(?::?)\d{2}/;
            let result = timezoneRegex.exec(dateTimeString);
            if (result) {
                let sign = result[0][0];
                result[0] = result[0].replace(":", "");
                return {
                    hours: Number(sign + result[0].substr(1, 2)),
                    minutes: Number(sign + result[0].substr(3, 2))
                };
            } else {
                return null;
            }
        }
    };
    let offset = parseTimezoneOffset(dateTimeString);

    let dateTime = moment(dateTimeString);
    if(offset){
        dateTime.add(offset.hours, "hours").add(offset.minutes, "minutes");
    }
    return dateTime;
};

export const buildTimestamp = (date, time, timezone = "+0200") => {
    return `${date}T${time}${timezone}`;
};