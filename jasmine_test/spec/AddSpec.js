const Add = require("../src/Add");

describe("Addition", function () {

    it("The function should add 2 numbers", function () {
        expect(Add(5,6)).toBe(11);
    });
});