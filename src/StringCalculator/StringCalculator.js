class StringCalculator {
  add(numbersString) {
    let values;

    if (!numbersString) {
      return 0;
    }

    if (numbersString.indexOf(',') > -1){
      values = numbersString.split(',');
    } else if (numbersString.indexOf('\n') > -1){
      values = numbersString.split('\n');
    } else {
      return parseInt(numbersString);
    }

    const sum = parseInt(values[0])  + parseInt(values[1]);
    
    return sum;
  }
}

module.exports = {
  StringCalculator
};
