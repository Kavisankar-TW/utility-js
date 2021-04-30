const reduce = require("./reduce");

const getMin = (first, second) => {
    return first < second ? first : second;
}

const min = (array) => {
    return reduce(array, getMin);
}

module.exports = min;