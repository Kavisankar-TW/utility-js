const head = require("./head");
const tail = require("./tail");

const map = (array, mapperFn, result = []) => {
    if (array.length === 0)
        return result;
    const headValue = head(array);
    const mappedHead = mapperFn(headValue);
    result.push(mappedHead);
    return map(tail(array), mapperFn, result);
}

module.exports = map;