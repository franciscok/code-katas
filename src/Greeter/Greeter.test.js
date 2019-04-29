const  Greeter = require('./Greeter');

describe('Greeter', () => {
    it('Should return saludation', () => {
        const greeter = new Greeter('Baburro');
        expect(greeter.greet()).toEqual('Hello Baburro');
    })
    it('Should trim the input', () => {
        const greeter = new Greeter('  Baburro  ');
        expect(greeter.greet()).toEqual('Hello Baburro');
    })

    it('capitalizes the first letter of the name', () => {
        const greeter = new Greeter('BABURRO');
        expect(greeter.greet()).toEqual('Hello Baburro');
    })

    it('returns Good morning when the time is 06:00-12:00', () => {
        const greeter = new Greeter('BABURRO', new Date(2019, 4, 29, 11, 33));
        expect(greeter.greet()).toEqual('Good morning Baburro');
    })

    it('Returns Good evening when the time is 18:00-22:00', () => {
        const greeter = new Greeter('BABURRO', new Date(2019, 4, 29, 19, 33));
        expect(greeter.greet()).toEqual('Good evening Baburro');
    })

    it('Returns Good night when the time is 22:00-06:00', () => {
        const greeter = new Greeter('BABURRO', new Date(2019, 4, 29, 4, 33));
        expect(greeter.greet()).toEqual('Good night Baburro');
    })

    it ('Should logs into console each time it is called', () => {
        global.console.log = jest.fn();

        const greeter = new Greeter('BABURRO');
        greeter.greet();

        expect(console.log).toBeCalled();
    })
});