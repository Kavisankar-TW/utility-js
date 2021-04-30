const filter = require("./filter");

describe("Filter", () => {
    it("Should return empty array if an empty array is given", () => {
        const emptyArray = [];
        const truthy = (x) => true;
        const expected = [];
        const actual = filter(emptyArray, truthy);
        expect(actual).toEqual(expected);
    });

    it("Should return same array if the given function only return true", () => {
        const nonEmptyArray = [1, 2, 3];
        const truthy = (x) => true;
        const expected = nonEmptyArray;
        const actual = filter(nonEmptyArray, truthy);
        expect(actual).toEqual(expected);
    });

    it("Should return empty array if the given function only return false", () => {
        const nonEmptyArray = [1, 2, 3];
        const falsy = (x) => false;
        const expected = [];
        const actual = filter(nonEmptyArray, falsy);
        expect(actual).toEqual(expected);
    });

    it("Should return all values which passed the condition given in the conditional function", () => {
        const nonEmptyArray = [1, 2, 3];
        const isGraterThanOne = (x) => x > 1;
        const expected = [2, 3];
        const actual = filter(nonEmptyArray, isGraterThanOne);
        expect(actual).toEqual(expected);
    });

    it("Should return all upper case values if filterUpperCase function is given", () => {
        const stringArray = ['a', 'B', 'c', 'D'];
        const filterUpperCase = (x) => x === x.toUpperCase();
        const expected = ['B', 'D'];
        const actual = filter(stringArray, filterUpperCase);
        expect(actual).toEqual(expected);
    });
});