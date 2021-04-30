const tail = require("./tail");

describe("Tail", () => {
    it("Should return all elements except first element of the array if a non-empty array is given", () => {
        const nonEmptyArray = [1, 2, 3];
        const expected = [2, 3];
        const actual = tail(nonEmptyArray);
        expect(actual).toEqual(expected);
    });

    it("Should return empty array if an empty array is given", () => {
        const emptyArray = [];
        const expected = [];
        const actual = tail(emptyArray);
        expect(actual).toEqual(expected);
    });
});