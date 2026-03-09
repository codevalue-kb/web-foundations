/**
 * Exercise 04 — Password Validator Tests
 * ════════════════════════════════════════════════════════════════
 * Difficulty : ⭐⭐ Beginner–Intermediate
 * Topic      : Objects, booleans, arrays, multiple assertions
 * Time       : ~25 minutes
 *
 * INSTRUCTIONS
 * ─────────────
 * This exercise introduces testing functions that return OBJECTS
 * with multiple fields ({ valid, errors }) — very common in real apps.
 *
 * Key matchers to practice:
 *   • toEqual({ ... })            — compare full objects
 *   • toHaveProperty("key", val)  — check a specific field
 *   • toContain("string")         — check an array contains a message
 *   • toHaveLength(n)             — check number of errors
 *   • toBe(true) / toBe(false)    — check booleans
 *
 * Run your tests:  npx jest 04-password-validator
 * ════════════════════════════════════════════════════════════════
 */

const {
  validatePassword,
  getPasswordStrength,
  passwordsMatch,
} = require("./password-validator");

// ─────────────────────────────────────────────
// validatePassword() — valid passwords
// ─────────────────────────────────────────────
describe("validatePassword — valid passwords", () => {
  it("returns valid: true and no errors for a strong password", () => {
    const result = validatePassword("Hello123!");
    // TODO: expect result.valid to be true
    // TODO: expect result.errors to have length 0
  });

  it("returns valid: true for a password that meets all rules exactly", () => {
    // TODO: "Abcdef1!" meets all 5 rules (8 chars, upper, lower, digit, special)
    //       Check that valid is true and errors is empty
  });
});

// ─────────────────────────────────────────────
// validatePassword() — individual rule failures
// ─────────────────────────────────────────────
describe("validatePassword — individual rule failures", () => {
  it("returns an error when the password is too short", () => {
    const result = validatePassword("Hi1!");
    // TODO: expect result.valid to be false
    // TODO: expect result.errors to contain "Must be at least 8 characters"
  });

  it("returns an error when there is no uppercase letter", () => {
    const result = validatePassword("hello123!");
    // TODO: expect result.valid to be false
    // TODO: expect result.errors to contain "Must contain at least one uppercase letter"
  });

  it("returns an error when there is no lowercase letter", () => {
    const result = validatePassword("HELLO123!");
    // TODO: expect result.valid to be false
    // TODO: expect result.errors to contain "Must contain at least one lowercase letter"
  });

  it("returns an error when there is no digit", () => {
    const result = validatePassword("HelloWorld!");
    // TODO: expect result.valid to be false
    // TODO: expect result.errors to contain "Must contain at least one digit"
  });

  it("returns an error when there is no special character", () => {
    const result = validatePassword("Hello1234");
    // TODO: expect result.valid to be false
    // TODO: expect result.errors to contain the special character error message
  });
});

// ─────────────────────────────────────────────
// validatePassword() — multiple rule failures
// ─────────────────────────────────────────────
describe("validatePassword — multiple failures", () => {
  it("returns multiple errors for a completely invalid password", () => {
    const result = validatePassword("abc");
    // TODO: expect result.valid to be false
    // TODO: expect result.errors to have length 4
    //       (too short, no uppercase, no digit, no special char — lowercase is fine)
  });

  it("returns all 5 errors for an empty string", () => {
    const result = validatePassword("");
    // TODO: expect result.errors to have length 5
    // TODO: expect result.valid to be false
  });
});

// ─────────────────────────────────────────────
// getPasswordStrength()
// ─────────────────────────────────────────────
describe("getPasswordStrength", () => {
  it("returns 4 (Very Strong) for a password that passes all rules", () => {
    // TODO: expect getPasswordStrength("Hello123!") to equal 4
    // WAIT — how many rules does "Hello123!" pass? Count them before writing the test!
    // Re-read the source: score = 5 - number_of_errors
  });

  it("returns a lower score for a weaker password", () => {
    // TODO: "hello" fails 4 rules (short, no upper, no digit, no special)
    //       What score should it return?
  });

  it("returns 0 for an empty password", () => {
    // TODO: expect getPasswordStrength("") to equal 0
  });
});

// ─────────────────────────────────────────────
// passwordsMatch()
// ─────────────────────────────────────────────
describe("passwordsMatch", () => {
  it("returns true when both passwords are identical", () => {
    // TODO: expect passwordsMatch("Hello123!", "Hello123!") to be true
  });

  it("returns false when the passwords are different", () => {
    // TODO: expect passwordsMatch("Hello123!", "Hello123?") to be false
  });

  it("returns false when both passwords are empty strings", () => {
    // TODO: expect passwordsMatch("", "") to be false
    // HINT: An empty password matching another empty password is NOT a valid match
  });

  it("is case-sensitive — treats 'hello' and 'Hello' as different", () => {
    // TODO: expect passwordsMatch("hello", "Hello") to be false
  });
});

// ─────────────────────────────────────────────
// 🏆 BONUS CHALLENGES
// ─────────────────────────────────────────────
describe("BONUS", () => {
  it("valid password also has a strength score of 4", () => {
    // TODO: "SecureP4ss!" should be both valid (validatePassword) AND score 4 (getPasswordStrength)
    //       Write ONE test that checks BOTH conditions
  });

  it("the number of errors equals 5 minus the strength score", () => {
    // TODO: For password "hello", check that:
    //       errors.length + getPasswordStrength("hello") === 5
  });
});
