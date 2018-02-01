import { describe, it } from "mocha";
import chai from "chai";

import assert from "assert";

import Course from "../template/Course";
import Schedule from "../template/Schedule";
import School from "../template/School";

describe("Template tests", () => {
    describe("Course", () => {
        it("No input data should return null", () => {
            assert.equal(new Course(), null);
        });
    });

    describe("Schedule", () => {
        it("No input data should return null", () => {
            assert.equal(new Schedule(), null);
        });
    });

    describe("School", () => {
        it("No input data should return null", () => {
            assert.equal(new School(), null);
        });
    });
});