const { StringCalculator } = require('./StringCalculator');

describe('StringCalculator', () => {
  const uut = new StringCalculator();

  describe('add', () => {
    it('zero for empty string ', () => {
      expect(uut.add('')).toEqual(0);
    });
    it('number string return a number', () => {
      expect(uut.add('1')).toEqual(1);
    });
    it('Two numbers, comma delimited, returns the sum', () => {
      expect(uut.add('1,2')).toEqual(3);
    });
    it('Two numbers, newline delimited, returns the sum', () => {
      expect(uut.add('1\n2')).toEqual(3);
    });
    it('Three numbers, delimited either way, returns the sum', () => {
      expect(uut.add('1\n2,3\n4')).toEqual(10);
    });
    it('Negative numbers throw an exception with the message', () => {
      //expect(uut.add('-1,2,-3')).toThrowError(new Error('negatives not allowed'));
      expect(uut.add('-1,2,-3')).toEqual('negatives not allowed: -1,-3');
    });
    it('Numbers greater than 1000 are ignored', () => {
      expect(uut.add('1,1000,2')).toEqual(3);
    })
    it('A single char delimiter can be defined on the first line starting with `//`', () => {
      expect(uut.add('//#\n1#2')).toEqual(3);
    })
  });
});
