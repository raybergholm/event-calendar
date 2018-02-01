import { describe, it } from "mocha";
import { expect } from "chai";

import Course from "../template/Course";
import Schedule from "../template/Schedule";
import School from "../template/School";

describe("Template tests", () => {
    describe("Schedule", () => {
        const emptySchedule = {
            start: null,
            end: null,
            days: {},
            except: [],
        };
        it("No input data should return null", () => {
            expect(new Schedule()).to.be.null;
        });

        it("Empty object input returns a Schedule object with null properties", () => {
            expect(new Course({})).to.equal(emptySchedule);
        });
    });

    describe("Course", () => {
        const emptyCourse = {
            name: null,
            level: null,
            tags: null,
            location: null,
            teacher: null,
            url: null,
            schedule: null
        };
        it("No input data should return null", () => {
            expect(new Course()).to.be.null;
        });

        it("Empty object input returns a Course object with null properties", () => {
            expect(new Course({})).to.equal(emptyCourse);
        });
    });

    describe("School", () => {
        const emptySchool = {
            schoolName: null,
            websiteUrl: null,
            location: null,
            courses: null
        };
        it("No input data should return null", () => {
            expect(new School()).to.be.null;
        });

        it("Empty object input returns a School object with null properties", () => {
            expect(new School({})).to.equal(emptySchool);
        });
    });
});