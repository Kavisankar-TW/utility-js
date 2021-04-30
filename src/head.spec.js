const head = require("./head");

describe("Head", () => {
    it("Should return first element of the array if a non-empty array is given", () => {
        const nonEmptyArray = [1, 2, 3];
        const expected = 1;
        const actual = head(nonEmptyArray);
        expect(actual).toBe(expected);
    });

    it("Should return null if an empty array is given", () => {
        const emptyArray = [];
        const expected = null;
        const actual = head(emptyArray);
        expect(actual).toBe(expected);
    });
});