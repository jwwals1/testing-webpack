function analyzeArray(array) {
    return {
        average: getAverage(array),
        min: getMin(array),
        max: getMax(array),
        length: array.length
    };
}

function getAverage(array) {
    return array.reduce((previous, current) => (current += previous)) / array.length;
}

function getMin(array) {
    return Math.min(...array)
}

function getMax(array) {
    return Math.max(...array)
}

export default analyzeArray