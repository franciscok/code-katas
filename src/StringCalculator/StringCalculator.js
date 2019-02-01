class StringCalculator {
  add(numbersString) {
    if (!numbersString) {
      return 0;
    }

    const values = numbersString.split(',');
    const sum = parseInt(values[0])  + parseInt(values[1]);


    if(values.length > 1){
      return sum;
    }

    return parseInt(numbersString);
  }
}

module.exports = {
  StringCalculator
};
