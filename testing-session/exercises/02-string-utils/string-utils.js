/**
 * Exercise 02 — String Utilities
 * ─────────────────────────────────
 * A collection of helpful string manipulation functions.
 * Your job: write tests for every function in string-utils.test.js
 */

/**
 * Capitalizes the first letter of a string.
 * @param {string} str
 * @returns {string}
 * @example capitalize("hello") → "Hello"
 */
function capitalize(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Reverses a string.
 * @param {string} str
 * @returns {string}
 * @example reverse("hello") → "olleh"
 */
function reverse(str) {
  return str.split("").reverse().join("");
}

/**
 * Returns true if a string is a palindrome (reads the same forwards and backwards).
 * Ignores case and non-alphanumeric characters.
 * @param {string} str
 * @returns {boolean}
 * @example isPalindrome("racecar") → true
 * @example isPalindrome("A man a plan a canal Panama") → true
 * @example isPalindrome("hello") → false
 */
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

/**
 * Counts the number of words in a string.
 * Words are separated by one or more spaces.
 * @param {string} str
 * @returns {number}
 * @example countWords("hello world") → 2
 * @example countWords("  extra  spaces  ") → 2
 */
function countWords(str) {
  if (!str || !str.trim()) return 0;
  return str.trim().split(/\s+/).length;
}

/**
 * Truncates a string to a maximum length, adding "..." if it was cut.
 * @param {string} str
 * @param {number} maxLength
 * @returns {string}
 * @example truncate("Hello World", 5) → "Hello..."
 * @example truncate("Hi", 10) → "Hi"
 */
function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
}

/**
 * Converts a string to kebab-case.
 * @param {string} str
 * @returns {string}
 * @example toKebabCase("Hello World") → "hello-world"
 * @example toKebabCase("camelCaseString") → "camel-case-string"
 */
function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

module.exports = { capitalize, reverse, isPalindrome, countWords, truncate, toKebabCase };
