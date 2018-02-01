import { describe, it } from "mocha";
import { expect } from "chai";

import Course from "../template/Course";
import Schedule from "../template/Schedule";
import School from "../template/School";

describe("Template tests", () => {
    describe("Course", () => {
        it("No input data should return null", () => {
            expect(new Course()).to.equal(null);
        });
    });

    describe("Schedule", () => {
        it("No input data should return null", () => {
            expect(new Schedule()).to.equal(null);
        });
    });

    describe("School", () => {
        it("No input data should return null", () => {
            expect(new School()).to.equal(null);
        });
    });
});