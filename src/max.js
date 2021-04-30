const reduce = require("./reduce");

const getMax = (first, second) => {
    return first > second ? first : second;
}

const max = (array) => {
    return reduce(array, getMax);
}

module.exports = max;