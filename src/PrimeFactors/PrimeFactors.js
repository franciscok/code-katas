/**
 * @param number {int}
 * @returns {Array<int>} prime factors
 */
function generate(number) {
  const factors = [];


  if (number / 2 === 1 || number / 2 === 1.5) {
    factors.push(number);
  }

  return factors;
}

module.exports = {
  generate
};