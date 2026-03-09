/**
 * Exercise 04 — Password Validator
 * ──────────────────────────────────
 * A password validation module that checks multiple rules
 * and returns structured results — common in real login/signup forms.
 * Your job: write tests in password-validator.test.js
 */

/**
 * Validates a password against a set of rules.
 *
 * Rules:
 *   - At least 8 characters long
 *   - Contains at least one uppercase letter
 *   - Contains at least one lowercase letter
 *   - Contains at least one digit (0–9)
 *   - Contains at least one special character: !@#$%^&*
 *
 * @param {string} password
 * @returns {{ valid: boolean, errors: string[] }}
 *
 * @example
 * validatePassword("Hello1!")
 * → { valid: false, errors: ["Must be at least 8 characters"] }
 *
 * @example
 * validatePassword("Hello123!")
 * → { valid: true, errors: [] }
 */
function validatePassword(password) {
  const errors = [];

  if (password.length < 8) {
    errors.push("Must be at least 8 characters");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Must contain at least one uppercase letter");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Must contain at least one lowercase letter");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("Must contain at least one digit");
  }
  if (!/[!@#$%^&*]/.test(password)) {
    errors.push("Must contain at least one special character (!@#$%^&*)");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Returns a score from 0–4 indicating password strength.
 *   0 = Very Weak (fails 4+ rules)
 *   1 = Weak      (passes 1–2 rules)
 *   2 = Fair      (passes 3 rules)
 *   3 = Strong    (passes 4 rules)
 *   4 = Very Strong (passes all 5 rules)
 *
 * @param {string} password
 * @returns {number} 0–4
 */
function getPasswordStrength(password) {
  const { errors } = validatePassword(password);
  return 5 - errors.length;
}

/**
 * Returns true if the two passwords match and are not empty.
 * @param {string} password
 * @param {string} confirmPassword
 * @returns {boolean}
 */
function passwordsMatch(password, confirmPassword) {
  return password.length > 0 && password === confirmPassword;
}

module.exports = { validatePassword, getPasswordStrength, passwordsMatch };
