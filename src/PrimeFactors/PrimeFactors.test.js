const PrimeFactors = require('./PrimeFactors');

describe('PrimeFactors', () => {
  describe('generate', () => {
    it('transformation: null to constant', () => {
      expect(PrimeFactors.generate(1)).toEqual([]);
    });

});
