exports.odd = "홀수입니다.";
exports.even = "짝수입니다.";

console.log(module.exports === exports); // true
console.log(module.exports);

function add(a, b) {
  return a + b;
}

exports.add = add;

console.log(module.exports);

/**
 * 3.3 var.js 참고
 */
