
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  const res = [];
    matrix.forEach((item, i) => {
        if (i % 2) {
            res.push(...item.reverse().splice(''));
        } else {
            res.push(...item.splice(''));
        }
    });
    return res;
}
