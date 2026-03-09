/**
 * Exercise 01 — Calculator Tests
 * ════════════════════════════════════════════════════════════════
 * Difficulty : ⭐ Beginner
 * Topic      : Basic matchers, error testing, edge cases
 * Time       : ~20 minutes
 *
 * INSTRUCTIONS
 * ─────────────
 * The calculator.js file is already implemented for you.
 * Your job is to write tests for every function.
 *
 * For each TODO below:
 *   1. Read the description of what to test
 *   2. Write a test using the AAA pattern (Arrange → Act → Assert)
 *   3. Run your tests:  npx jest 01-calculator
 *
 * GOAL: All tests should pass. Aim to write at least 15 tests total.
 *
 * HINT — AAA Pattern reminder:
 *   // Arrange  → set up inputs
 *   // Act      → call the function
 *   // Assert   → check the result
 * ════════════════════════════════════════════════════════════════
 */

const { add, subtract, multiply, divide, modulo, power } = require("./calculator");

// ─────────────────────────────────────────────
// add()
// ─────────────────────────────────────────────
describe("add", () => {
  it("returns the correct sum of two positive numbers", () => {
    // TODO: Call add(3, 4) and expect the result to be 7
  });

  it("returns the correct sum when one number is negative", () => {
    // TODO: Call add(-2, 5) and expect the result to be 3
  });

  it("returns the correct sum of two negative numbers", () => {
    // TODO: Call add(-3, -7) and expect the result to be -10
  });

  it("returns the number itself when adding zero", () => {
    // TODO: Call add(5, 0) and expect the result to be 5
  });
});

// ─────────────────────────────────────────────
// subtract()
// ─────────────────────────────────────────────
describe("subtract", () => {
  it("returns the correct difference of two numbers", () => {
    // TODO: Call subtract(10, 4) and expect 6
  });

  it("returns a negative number when subtracting a larger number", () => {
    // TODO: Call subtract(3, 8) and expect -5
  });

  it("returns zero when subtracting a number from itself", () => {
    // TODO: Call subtract(5, 5) and expect 0
  });
});

// ─────────────────────────────────────────────
// multiply()
// ─────────────────────────────────────────────
describe("multiply", () => {
  it("returns the correct product of two positive numbers", () => {
    // TODO: Call multiply(4, 5) and expect 20
  });

  it("returns a negative number when one factor is negative", () => {
    // TODO: Call multiply(-3, 4) and expect -12
  });

  it("returns zero when multiplying by zero", () => {
    // TODO: Call multiply(99, 0) and expect 0
  });
});

// ─────────────────────────────────────────────
// divide()
// ─────────────────────────────────────────────
describe("divide", () => {
  it("returns the correct quotient of two numbers", () => {
    // TODO: Call divide(10, 2) and expect 5
  });

  it("returns a decimal result when division is not exact", () => {
    // TODO: Call divide(7, 2) and expect 3.5
  });

  it("throws an error when dividing by zero", () => {
    // TODO: Use expect(() => divide(5, 0)).toThrow(...)
    // HINT: Wrap the function call in an arrow function so Jest can catch the error
    //       expect(() => divide(5, 0)).toThrow("Cannot divide by zero")
  });
});

// ─────────────────────────────────────────────
// modulo()
// ─────────────────────────────────────────────
describe("modulo", () => {
  it("returns the remainder of a division", () => {
    // TODO: Call modulo(10, 3) and expect 1
  });

  it("returns 0 when a number is evenly divisible", () => {
    // TODO: Call modulo(9, 3) and expect 0
  });

  it("throws an error when dividing by zero", () => {
    // TODO: Expect modulo(5, 0) to throw "Cannot divide by zero"
  });
});

// ─────────────────────────────────────────────
// power()
// ─────────────────────────────────────────────
describe("power", () => {
  it("returns the correct result for a positive exponent", () => {
    // TODO: Call power(2, 8) and expect 256
  });

  it("returns 1 when the exponent is 0", () => {
    // TODO: Any number to the power of 0 equals 1. Call power(5, 0) and expect 1
  });

  it("returns the base when the exponent is 1", () => {
    // TODO: Call power(7, 1) and expect 7
  });
});

// ─────────────────────────────────────────────
// 🏆 BONUS CHALLENGES
// ─────────────────────────────────────────────
describe("BONUS — floating point", () => {
  it("handles floating point addition correctly", () => {
    // TODO: 0.1 + 0.2 does not equal 0.3 exactly in JavaScript.
    //       Use toBeCloseTo() instead of toBe() to handle this.
    //       Call add(0.1, 0.2) and use toBeCloseTo(0.3)
  });

  it("handles floating point division correctly", () => {
    // TODO: Call divide(1, 3) and use toBeCloseTo(0.333, 2)
  });
});
