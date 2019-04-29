const Greeter = require('./Greeter');

describe('Greeter', () => {

    describe('greet', () => {
        const greeter = new Greeter();

        it('should return hello <name>', () => {
            expect(greeter.greet('pepe')).toEqual('Hello Pepe');
        });

        it('should return hello <name> trimmed', () => {
            expect(greeter.greet(' pepe ')).toEqual('Hello Pepe');
        });

        it('should return hello <name> capitalized', () => {
            expect(greeter.greet('pepe')).toEqual('Hello Pepe');
        });
    });
    describe('greet with date morning', () => {
        const today = new Date();
        const greeter = new Greeter(
            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 7, 0, 0)
        );

        it('should return hello <name> and Good Morning', () => {
            expect(greeter.greet('pepe')).toEqual('Good Morning Pepe');
        });
    });
    describe('greet with date evening', () => {
        const today = new Date();
        const greeter = new Greeter(
            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 0, 0)
        );

        it('should return hello <name> and Good Evening', () => {
            expect(greeter.greet('pepe')).toEqual('Good Evening Pepe');
        });
    });

    describe('greet with date night', () => {
        const today = new Date();
        const greeter = new Greeter(
            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 0, 0)
        );

        it('should return hello <name> and Good Night', () => {
            expect(greeter.greet('pepe')).toEqual('Good Night Pepe');
        });
        it('should console.log hello <name> and Good Night', () => {
            global.console.log = jest.fn();
            greeter.greet('pepe');
            expect(console.log).toBeCalled();
        });
    });
});