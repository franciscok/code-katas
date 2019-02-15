const PrimeFactors = require('./PrimeFactors');

describe('PrimeFactors', () => {
  describe('generate', () => {
    it('should return empty array when passing 1', () => {
      expect(PrimeFactors.generate(1)).toEqual([]);
    });

    it('should return ar array with 2', () => {
      expect(PrimeFactors.generate(2)).toEqual([2]);
    });

    it('should return ar array with 3', () => {
      expect(PrimeFactors.generate(3)).toEqual([3]);
    });

    it('should return ar array with 2,2', () => {
      expect(PrimeFactors.generate(4)).toEqual([2,2]);
    });

    it('should return ar array with 5', () => {
      expect(PrimeFactors.generate(5)).toEqual([5]);
    });

    it('should return ar array with 2,3', () => {
      expect(PrimeFactors.generate(6)).toEqual([2,3]);
    });

    it('should return ar array with 7', () => {
      expect(PrimeFactors.generate(7)).toEqual([7]);
    });

    it('should return ar array with 2,2,2', () => {
      expect(PrimeFactors.generate(8)).toEqual([2,2,2]);
    });

    it('should return ar array with 3,3', () => {
      expect(PrimeFactors.generate(9)).toEqual([3,3]);
    });
  });
});
