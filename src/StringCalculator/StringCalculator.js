class StringCalculator {
  add(numbersString) {

    if (!numbersString) {
      return 0;
    }
    let values;

    if (numbersString.length > 0){
      let cleanValues = this.replacePattern(numbersString);
      values = cleanValues.split(',');
    } else {
      return parseInt(numbersString);
    }

    let sum = 0;
    values.forEach((val) => {
      sum+= parseInt(val);
    });
    
    return sum;
  }

  replacePattern(numberString) {
    return numberString.replace(/[^\d]/g, ",");
  }


}

module.exports = {
  StringCalculator
};
