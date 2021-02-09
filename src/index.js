module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix === undefined) {
        return result;
    }
    let i = 0;
    matrix.forEach(element => {
        if (i++ % 2 === 0) {
            result = result.concat(element);
        } else {
            result = result.concat(element.reverse());
        }
    });
    return result;
}
