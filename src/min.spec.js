const min = require("./min");

describe("Min", () => {
    it("Should return min element", () => {
        const array = [1, 2, 3, 4];
        const expected = 1;
        const actual = min(array);
        expect(actual).toEqual(expected);
    });
});