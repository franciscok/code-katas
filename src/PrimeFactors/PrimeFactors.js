/**
 * @param number {int}
 * @returns {Array<int>} prime factors
 */
function generate(number) {
  const factors = [];
    for(i = 2; i < number ; i++) {
      let residual = number;
      while( residual % i  === 0){
          residual = residual / i;
          const mult = factors.reduce((acc, elem) => { return elem * acc }, 1)
          if(mult < number)
            factors.push(i);
      }
    }
  if (factors.length === 0 && number > 1) return [number];
  return factors;
}

module.exports = {
  generate
};
