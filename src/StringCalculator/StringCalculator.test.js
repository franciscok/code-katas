const { StringCalculator } = require('./StringCalculator');

describe('StringCalculator', () => {
  const uut = new StringCalculator();

  describe('add', () => {
    it('zero for empty string ', () => {
      expect(uut.add('')).toEqual(0);
    });
  });
});
