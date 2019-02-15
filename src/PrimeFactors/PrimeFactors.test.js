const PrimeFactors = require('./PrimeFactors');

describe('PrimeFactors', () => {
  describe('generate', () => {
    it('transformation: null to constant', () => {
      expect(PrimeFactors.generate(1)).toEqual([]);
    });
  });

  describe('2 should return [2]', () => {
    expect(PrimeFactors.generate(2)).toEqual([2]);
  });

  describe('3 should return [3]', () => {
    expect(PrimeFactors.generate(3)).toEqual([3]);
  });

  describe('9 should return [3,3]', () => {
    expect(PrimeFactors.generate(9)).toEqual([3, 3]);
  });

  describe('4620 should return [2,2,3,5,7,11]', () => {
    expect(PrimeFactors.generate(4620)).toEqual([2, 2, 3, 5, 7, 11]);
  });
});