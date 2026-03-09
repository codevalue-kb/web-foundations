/**
 * Exercise 01 — Calculator
 * ─────────────────────────
 * A simple calculator with basic arithmetic operations.
 * Your job: write tests for every function in calculator.test.js
 */

/**
 * Adds two numbers together.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts b from a.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides a by b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} if b is 0
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

/**
 * Returns the remainder of dividing a by b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} if b is 0
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a % b;
}

/**
 * Raises base to the power of exponent.
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

module.exports = { add, subtract, multiply, divide, modulo, power };
