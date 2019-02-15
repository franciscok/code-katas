/**
 * @param number {int}
 * @returns {Array<int>} prime factors
 */
function generate(number) {
  const factors = [];


  if (number / 2 === 1) {
    factors.push(number);
  }

  if (number / 3 === 1) {
    factors.push(number);
  }


  return factors;
}

module.exports = {
  generate
};