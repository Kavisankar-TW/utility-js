const head = require("./head");
const tail = require("./tail");

const filter = (array, conditionalFn, result = []) => {
    if (array.length === 0)
        return result;
    const headValue = head(array);
    if (conditionalFn(headValue)) {
        result.push(headValue);
    }
    return filter(tail(array), conditionalFn, result);
}

module.exports = filter;