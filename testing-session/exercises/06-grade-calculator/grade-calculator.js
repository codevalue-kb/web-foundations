/**
 * Exercise 06 — Grade Calculator
 * ────────────────────────────────
 * A grade processing module — realistic logic with multiple
 * edge cases to test, including boundary values.
 * Your job: write tests in grade-calculator.test.js
 */

/**
 * Converts a numeric score (0–100) to a letter grade.
 *
 * Grading scale:
 *   90–100  → "A"
 *   80–89   → "B"
 *   70–79   → "C"
 *   60–69   → "D"
 *   0–59    → "F"
 *
 * @param {number} score
 * @returns {string}
 * @throws {Error} if score is outside the range 0–100
 */
function getLetterGrade(score) {
  if (score < 0 || score > 100) {
    throw new Error("Score must be between 0 and 100");
  }
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

/**
 * Calculates the average score from an array of numeric scores.
 * @param {number[]} scores
 * @returns {number} rounded to 2 decimal places
 * @throws {Error} if the scores array is empty
 */
function calculateAverage(scores) {
  if (scores.length === 0) throw new Error("Scores array cannot be empty");
  const total = scores.reduce((sum, score) => sum + score, 0);
  return Math.round((total / scores.length) * 100) / 100;
}

/**
 * Returns the highest and lowest scores from an array.
 * @param {number[]} scores
 * @returns {{ highest: number, lowest: number }}
 * @throws {Error} if the scores array is empty
 */
function getHighLow(scores) {
  if (scores.length === 0) throw new Error("Scores array cannot be empty");
  return {
    highest: Math.max(...scores),
    lowest:  Math.min(...scores),
  };
}

/**
 * Takes an array of student scores and returns a summary report.
 *
 * @param {Array<{ name: string, score: number }>} students
 * @returns {{
 *   average:       number,
 *   highest:       number,
 *   lowest:        number,
 *   passed:        number,   (score >= 60)
 *   failed:        number,   (score < 60)
 *   gradeBreakdown: { A: number, B: number, C: number, D: number, F: number }
 * }}
 */
function generateReport(students) {
  if (students.length === 0) {
    return { average: 0, highest: 0, lowest: 0, passed: 0, failed: 0,
             gradeBreakdown: { A: 0, B: 0, C: 0, D: 0, F: 0 } };
  }

  const scores = students.map((s) => s.score);
  const gradeBreakdown = { A: 0, B: 0, C: 0, D: 0, F: 0 };

  students.forEach((s) => {
    const grade = getLetterGrade(s.score);
    gradeBreakdown[grade]++;
  });

  return {
    average:  calculateAverage(scores),
    highest:  Math.max(...scores),
    lowest:   Math.min(...scores),
    passed:   students.filter((s) => s.score >= 60).length,
    failed:   students.filter((s) => s.score < 60).length,
    gradeBreakdown,
  };
}

module.exports = { getLetterGrade, calculateAverage, getHighLow, generateReport };
