const _ = require('lodash');

class Greeter {
    constructor(date){
        this.dateConst = date;
    }

    greet(name) {
        let message = 'Hello';

        if(this.dateConst) {
            const dateTo = new Date(this.dateConst);
            if (dateTo.getHours() >= 6 && dateTo.getHours() <=12 ) {
                message = 'Good Morning';
            } else if (dateTo.getHours() > 12 && dateTo.getHours() <=22) {
                message = 'Good Evening';
            } else {
                message = 'Good Night';
            }
        }
        console.log('Executing method');
        return `${message} ${_.startCase(_.capitalize(name.trim()))}`;
    }
}

module.exports = Greeter;
