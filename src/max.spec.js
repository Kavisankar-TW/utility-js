const max = require("./max");

describe("Max", () => {
    it("Should return max element", () => {
        const array = [1, 2, 3, 4];
        const expected = 4;
        const actual = max(array);
        expect(actual).toEqual(expected);
    });
});