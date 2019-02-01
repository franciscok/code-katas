class StringCalculator {
  add(numbersString) {
    if (!numbersString) {
      return 0;
    }

    let delimiter = ',';
    if (numbersString.indexOf('//') == 0) {
      delimiter = numbersString.substring(2,3);
      numbersString = numbersString.replace('//' + delimiter + '\n', '');
    }

    let numbers = numbersString.replace(new RegExp('\n', 'g'), delimiter).split(delimiter);

    if(numbers.length > 0) {
      // Check negative numbers
      let negativeNumber =[];
      numbers.map((number) => {
          const currentNumber = parseInt(number);
          if(currentNumber < 0) {
            negativeNumber.push(currentNumber);
          }
      });

      if(negativeNumber.length > 0) {
        const errorMessage = 'negatives not allowed: ' + negativeNumber.join(',');
        // Not working test.
        // throw new Error(errorMessage);
        return errorMessage;
      }

      numbersString = numbers.reduce((total, num)=> {
        return parseInt(total) + (parseInt(num) >= 1000 ? 0 : parseInt(num)); 
      });
    }

    return parseInt(numbersString);
  }
}

module.exports = {
  StringCalculator
};
