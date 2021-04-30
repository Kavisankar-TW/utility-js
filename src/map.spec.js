const map = require("./map");

describe("Map", () => {
    it("Should return empty array if an empty array is given", () => {
        const emptyArray = [];
        const cub = (value) => value ** 3;
        const expected = [];
        const actual = map(emptyArray, cub);
        expect(actual).toEqual(expected);
    });

    it("Should return same array if identity function is given", () => {
        const nonEmptyArray = [1, 2, 3];
        const identity = (value) => value;
        const expected = nonEmptyArray;
        const actual = map(nonEmptyArray, identity);
        expect(actual).toEqual(expected);
    });

    it("Should return cub of all elements in the array if cub function is given", () => {
        const nonEmptyArray = [1, 2, 3];
        const cub = (value) => value ** 3;
        const expected = [1, 8, 27];
        const actual = map(nonEmptyArray, cub);
        expect(actual).toEqual(expected);
    });

    it("Should return respected array based on the mapper-function if an array with objects is given", () => {
        const arrayWithObjects = [{x: 10}];
        const getXPlusOne = (someObject) => someObject.x + 1;
        const expected = [11];
        const actual = map(arrayWithObjects, getXPlusOne);
        expect(actual).toEqual(expected);
    });
});