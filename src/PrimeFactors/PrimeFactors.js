/**
 * @param number {int}
 * @returns {Array<int>} prime factors
 */
function generate(number) {
  let factors = [];
  for (let candidate = 2; number > 1; candidate++) {
    for (; number % candidate === 0; number /= candidate) {
      factors.push(candidate);
    }
  }
  return factors;
}

module.exports = {
  generate
};