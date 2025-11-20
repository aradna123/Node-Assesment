// calculator.js

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) throw new Error("Division by zero not allowed");
  return a / b;
}

function calculate(operation, a, b) {
  const ops = { add, subtract, multiply, divide };
  if (!ops[operation]) throw new Error("Unknown operation");
  return ops[operation](a, b);
}

module.exports = { add, subtract, multiply, divide, calculate };

