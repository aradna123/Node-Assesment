const calc = require("./calculator");
const math = require("./mathUtils");

console.log("=== Calculator Demo ===");
try {
  console.log("Add:", calc.add(10, 5));
  console.log("Subtract:", calc.subtract(10, 5));
  console.log("Multiply:", calc.multiply(10, 5));
  console.log("Divide:", calc.divide(10, 5));
  console.log("Calculate (multiply):", calc.calculate("multiply", 4, 3));

  // Division by zero test
  console.log("Divide by zero:", calc.divide(10, 0));
} catch (err) {
  console.error("❌ Error:", err.message);
}

console.log("\n=== Math Utils Demo ===");
console.log("IsEven(8):", math.isEven(8));
console.log("IsOdd(7):", math.isOdd(7));
console.log("Square(6):", math.square(6));
console.log("Cube(3):", math.cube(3));

