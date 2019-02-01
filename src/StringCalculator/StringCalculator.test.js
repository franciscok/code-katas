const { StringCalculator } = require('./StringCalculator');

describe('StringCalculator', () => {
  const uut = new StringCalculator();

  describe('add', () => {
    it('zero for empty string ', () => {
      expect(uut.add('')).toEqual(0);
    });
    it('single number returns the value', () => {
      expect(uut.add('1')).toEqual(1);
    })
    it('Two numbers, comma delimited, returns the sum',()=>{
      expect(uut.add('1,2')).toEqual(3);
    });
    it('Two numbers, newline delimited, returns the sum',()=>{
      expect(uut.add('1\n2')).toEqual(3);
    });
    it('Three numbers, delimited either way, returns the sum', () => {
      expect(uut.add('1\n2,3\n4')).toEqual(10);
    })
  });
  describe('replacePattern', ()=> {
    it('should return a string only with numbers ', () => {
      expect(uut.replacePattern('1\n2,3\n4')).toEqual('1,2,3,4');
    });

    it('should return a single string', () => {
      expect(uut.replacePattern('1')).toEqual('1');
    });
  })

});
