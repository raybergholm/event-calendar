import mocha from "mocha";
import chai from "chai";

import assert from "assert";

import Course from "../template/Course";
import Schedule from "../template/Schedule";
import School from "../template/School";
import Season from "../template/Season";

mocha.describe("Template tests", () => {
    mocha.describe("Course", () => {
        mocha.it("No input data should return null", () => {
            assert.equal(new Course(), null);
        });
    });

    mocha.describe("Schedule", () => {
        mocha.it("No input data should return null", () => {
            assert.equal(new Schedule(), null);
        });
    });

    mocha.describe("School", () => {
        mocha.it("No input data should return null", () => {
            assert.equal(new School(), null);
        });
    });

    mocha.describe("Season", () => {
        mocha.it("No input data should return null", () => {
            assert.equal(new Season(), null);
        });
    });
});