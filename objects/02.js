// +++++ Methods in Objects +++++

// Create an object `calculator` with methods `add`, `subtract`, `multiply`, and `divide`.
// Each method should take two numbers as arguments and return the result.

const calculator = {
  // function add(){  }, //wrong way
  add: function (a, b) {
    return a + b;
  }, //right way to define function in an object

  subtract: function (a, b) {
    return a - b;
  },

  multiply: function (a, b) {
    return a * b;
  },

  divide: function (a, b) {
    return a / b;
  },
};

// Use the `calculator` object to perform some calculations and log the results.
console.log(
  `addition:${calculator.add(2, 4)}
    \nsubtraction:${calculator.subtract(5, 3)}
    \nMultiplication:${calculator.multiply(4, 5)}
    \nDivide:${calculator.divide(100, 5)}`
);
