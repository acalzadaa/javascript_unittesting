const Test = require("../src/Test");

let learnJasmine;
describe("a resolution", function () {

    beforeEach(function () {
        learnJasmine = new Test({
            title: "testing",
            description: "testing jasmine"
        });
    })

    it("should have a title", function () {
        expect(learnJasmine.title).toBeDefined();
    });

    it("should have a description", function () {
        expect(learnJasmine.description).toBeDefined();
    });

    it("should have a deadline", function () {

    });

});