try {
  function factorial(number) {
    if (number <= 1) {
      return 1
    }
    return number * factorial(number - 1);
  }
  console.log(factorial(99999));
} catch (e) {
  console.log("This is too big number");

}
