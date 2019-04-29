const _ = require('lodash');

class Greeter {
    
    constructor(name, time) {
        this.name = name;
        this.time = null;

        if (time) {
            this.time = time;
        }
    }

    normalizer(value) {
        return _.startCase(_.toLower(value.trim()));
    }
    getGreetingMessage() {
        const currentTime = this.time;
        const hour = currentTime.getHours();
        const minute = currentTime.getMinutes();

        if(hour >= 6 && (hour < 12 || hour == 12 && minute == 0 )) {
            return 'Good morning';
        }
        if (hour >= 18 && (hour < 22 || hour == 22 && minute == 0)) {
            return 'Good evening';
        }
        if (hour < 6 || hour >= 22 ) {
            return 'Good night';
        }

        return null;
    }

    greet() {
        const value = this.normalizer(this.name);
        let greeting = 'Hello';
        if (this.time) {
            greeting = this.getGreetingMessage();
        }
        console.log('Executing greet.');
        return `${greeting} ${value}`;
    }
}

module.exports = Greeter;