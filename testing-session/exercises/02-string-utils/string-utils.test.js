/**
 * Exercise 02 — String Utilities Tests
 * ════════════════════════════════════════════════════════════════
 * Difficulty : ⭐ Beginner
 * Topic      : String matchers, edge cases, boolean testing
 * Time       : ~20 minutes
 *
 * INSTRUCTIONS
 * ─────────────
 * The string-utils.js file is already implemented.
 * Your job is to fill in the TODO tests below.
 *
 * Pay close attention to EDGE CASES — empty strings, mixed case,
 * extra spaces, etc. Edge cases are where bugs hide!
 *
 * Run your tests:  npx jest 02-string-utils
 * ════════════════════════════════════════════════════════════════
 */

const {
  capitalize,
  reverse,
  isPalindrome,
  countWords,
  truncate,
  toKebabCase,
} = require("./string-utils");

// ─────────────────────────────────────────────
// capitalize()
// ─────────────────────────────────────────────
describe("capitalize", () => {
  it("capitalizes the first letter and lowercases the rest", () => {
    // TODO: expect capitalize("hello") to equal "Hello"
  });

  it("lowercases a fully uppercase string correctly", () => {
    // TODO: expect capitalize("WORLD") to equal "World"
  });

  it("returns an empty string unchanged", () => {
    // TODO: expect capitalize("") to equal ""
  });

  it("handles a single character", () => {
    // TODO: expect capitalize("a") to equal "A"
  });
});

// ─────────────────────────────────────────────
// reverse()
// ─────────────────────────────────────────────
describe("reverse", () => {
  it("reverses a simple string", () => {
    // TODO: expect reverse("hello") to equal "olleh"
  });

  it("returns an empty string unchanged", () => {
    // TODO: expect reverse("") to equal ""
  });

  it("returns a single character unchanged", () => {
    // TODO: expect reverse("x") to equal "x"
  });

  it("correctly reverses a string with spaces", () => {
    // TODO: expect reverse("hello world") to equal "dlrow olleh"
  });
});

// ─────────────────────────────────────────────
// isPalindrome()
// ─────────────────────────────────────────────
describe("isPalindrome", () => {
  it("returns true for a simple palindrome", () => {
    // TODO: expect isPalindrome("racecar") to be true
  });

  it("returns true regardless of letter case", () => {
    // TODO: expect isPalindrome("RaceCar") to be true
  });

  it("returns true for a palindrome with spaces (ignores non-alphanumeric)", () => {
    // TODO: expect isPalindrome("A man a plan a canal Panama") to be true
    // HINT: The function strips spaces and punctuation before checking
  });

  it("returns false for a non-palindrome", () => {
    // TODO: expect isPalindrome("hello") to be false
  });

  it("returns true for a single character", () => {
    // TODO: expect isPalindrome("a") to be true
  });
});

// ─────────────────────────────────────────────
// countWords()
// ─────────────────────────────────────────────
describe("countWords", () => {
  it("counts words in a normal sentence", () => {
    // TODO: expect countWords("the quick brown fox") to equal 4
  });

  it("counts a single word correctly", () => {
    // TODO: expect countWords("hello") to equal 1
  });

  it("returns 0 for an empty string", () => {
    // TODO: expect countWords("") to equal 0
  });

  it("ignores extra spaces between words", () => {
    // TODO: expect countWords("  hello   world  ") to equal 2
    // HINT: The function trims and splits on one-or-more spaces
  });
});

// ─────────────────────────────────────────────
// truncate()
// ─────────────────────────────────────────────
describe("truncate", () => {
  it("truncates a string longer than maxLength and adds '...'", () => {
    // TODO: expect truncate("Hello World", 5) to equal "Hello..."
  });

  it("returns the original string if it is shorter than maxLength", () => {
    // TODO: expect truncate("Hi", 10) to equal "Hi"
  });

  it("returns the original string if it is exactly maxLength", () => {
    // TODO: expect truncate("Hello", 5) to equal "Hello"
    // HINT: Exactly equal means no truncation needed
  });

  it("handles truncating to 1 character", () => {
    // TODO: expect truncate("Hello", 1) to equal "H..."
  });
});

// ─────────────────────────────────────────────
// toKebabCase()
// ─────────────────────────────────────────────
describe("toKebabCase", () => {
  it("converts a space-separated string to kebab-case", () => {
    // TODO: expect toKebabCase("Hello World") to equal "hello-world"
  });

  it("converts a camelCase string to kebab-case", () => {
    // TODO: expect toKebabCase("camelCaseString") to equal "camel-case-string"
  });

  it("lowercases an already lowercase word", () => {
    // TODO: expect toKebabCase("hello") to equal "hello"
  });
});

// ─────────────────────────────────────────────
// 🏆 BONUS CHALLENGES
// ─────────────────────────────────────────────
describe("BONUS — combined behavior", () => {
  it("reversing a palindrome returns the same string", () => {
    // TODO: reverse("racecar") should equal the original "racecar"
    //       Use both reverse() and isPalindrome() in this test
  });

  it("countWords returns 0 for a string with only spaces", () => {
    // TODO: expect countWords("     ") to equal 0
  });
});
