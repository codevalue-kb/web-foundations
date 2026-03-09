/**
 * Exercise 03 — Array Utilities
 * ──────────────────────────────
 * Common array operations used in real applications.
 * Your job: write tests for every function in array-utils.test.js
 */

/**
 * Returns the largest number in an array.
 * @param {number[]} numbers
 * @returns {number}
 * @throws {Error} if the array is empty
 * @example findMax([3, 1, 4, 1, 5, 9]) → 9
 */
function findMax(numbers) {
  if (numbers.length === 0) throw new Error("Array cannot be empty");
  return Math.max(...numbers);
}

/**
 * Returns the sum of all numbers in an array.
 * @param {number[]} numbers
 * @returns {number}
 * @example sum([1, 2, 3, 4]) → 10
 * @example sum([]) → 0
 */
function sum(numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

/**
 * Returns the average (mean) of all numbers in an array.
 * @param {number[]} numbers
 * @returns {number}
 * @throws {Error} if the array is empty
 * @example average([2, 4, 6]) → 4
 */
function average(numbers) {
  if (numbers.length === 0) throw new Error("Array cannot be empty");
  return sum(numbers) / numbers.length;
}

/**
 * Removes duplicate values from an array, preserving order.
 * @param {any[]} arr
 * @returns {any[]}
 * @example unique([1, 2, 2, 3, 1]) → [1, 2, 3]
 */
function unique(arr) {
  return [...new Set(arr)];
}

/**
 * Groups an array of objects by a given key.
 * @param {object[]} arr
 * @param {string} key
 * @returns {object} an object where each key maps to an array of items
 * @example
 * groupBy([{type:"fruit",name:"apple"},{type:"veg",name:"carrot"},{type:"fruit",name:"banana"}], "type")
 * → { fruit: [{...}, {...}], veg: [{...}] }
 */
function groupBy(arr, key) {
  return arr.reduce((groups, item) => {
    const group = item[key];
    if (!groups[group]) groups[group] = [];
    groups[group].push(item);
    return groups;
  }, {});
}

/**
 * Flattens a nested array one level deep.
 * @param {any[]} arr
 * @returns {any[]}
 * @example flatten([[1, 2], [3, 4], [5]]) → [1, 2, 3, 4, 5]
 */
function flatten(arr) {
  return arr.flat();
}

module.exports = { findMax, sum, average, unique, groupBy, flatten };
