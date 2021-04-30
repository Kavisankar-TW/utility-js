const reduce = require("./reduce");
const add = require("./add");

describe("Reduce", () => {
    it("Should return undefined if an empty array and no initial value is given", () => {
        const emptyArray = [];
        const expected = undefined;
        const actual = reduce(emptyArray, add);
        expect(actual).toEqual(expected);
    });

    it("Should return initial value if an empty array and initial value is given", () => {
        const emptyArray = [];
        const initialValue = 10;
        const expected = initialValue;
        const actual = reduce(emptyArray, add, initialValue);
        expect(actual).toEqual(expected);
    });

    it("Should return a string with all values in the array if add function is given", () => {
        const nonEmptyArray = ['a', 'b', 'c'];
        const expected = 'abc';
        const actual = reduce(nonEmptyArray, add);
        expect(actual).toEqual(expected);
    });

    it("Should return a string with initial string and all values in the array if add function and initial value is given", () => {
        const nonEmptyArray = ['a', 'b', 'c'];
        let initialValue = 'z';
        const expected = 'zabc';
        const actual = reduce(nonEmptyArray, add, initialValue);
        expect(actual).toEqual(expected);
    });
});