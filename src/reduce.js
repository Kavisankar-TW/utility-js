const head = require("./head");
const tail = require("./tail");

const reduce = (array, reducerFn, initialValue) => {
    if (array.length === 0)
        return initialValue;
    if (initialValue === undefined)
        return reduce(tail(array), reducerFn, head(array))
    const headValue = head(array);
    const result = reducerFn(initialValue, headValue);
    return reduce(tail(array), reducerFn, result);
}

module.exports = reduce;