/**
 * Exercise 06 — Grade Calculator Tests
 * ════════════════════════════════════════════════════════════════
 * Difficulty : ⭐⭐ Beginner–Intermediate
 * Topic      : Boundary values, object results, error handling
 * Time       : ~30 minutes
 *
 * INSTRUCTIONS
 * ─────────────
 * This is the most complete exercise in the set — it combines
 * everything you've practiced so far.
 *
 * Special focus: BOUNDARY VALUE TESTING.
 * Bugs often hide at the edges — the exact scores where one grade
 * ends and another begins (59/60, 69/70, 79/80, 89/90).
 * Always test the boundary itself AND the values just around it.
 *
 *   "Test the boundary, not just the middle"
 *    89 → B    90 → A    ← the boundary is the most important!
 *    59 → F    60 → D    ← same here
 *
 * Run your tests:  npx jest 06-grade-calculator
 * ════════════════════════════════════════════════════════════════
 */

const {
  getLetterGrade,
  calculateAverage,
  getHighLow,
  generateReport,
} = require("./grade-calculator");

// ─────────────────────────────────────────────
// getLetterGrade() — typical values
// ─────────────────────────────────────────────
describe("getLetterGrade — typical scores", () => {
  it("returns A for a score in the 90s", () => {
    // TODO: expect getLetterGrade(95) to equal "A"
  });

  it("returns B for a score in the 80s", () => {
    // TODO: expect getLetterGrade(85) to equal "B"
  });

  it("returns C for a score in the 70s", () => {
    // TODO: expect getLetterGrade(75) to equal "C"
  });

  it("returns D for a score in the 60s", () => {
    // TODO: expect getLetterGrade(65) to equal "D"
  });

  it("returns F for a score below 60", () => {
    // TODO: expect getLetterGrade(45) to equal "F"
  });
});

// ─────────────────────────────────────────────
// getLetterGrade() — boundary values ⚠️
// This is the most important section — bugs hide at boundaries!
// ─────────────────────────────────────────────
describe("getLetterGrade — boundary values", () => {
  it("returns A for exactly 100", () => {
    // TODO: expect getLetterGrade(100) to equal "A"
  });

  it("returns A for exactly 90 (the A boundary)", () => {
    // TODO: expect getLetterGrade(90) to equal "A"
  });

  it("returns B for exactly 89 (just below A)", () => {
    // TODO: expect getLetterGrade(89) to equal "B"
    // HINT: 89 is the last score that earns a B, not an A
  });

  it("returns B for exactly 80 (the B boundary)", () => {
    // TODO: expect getLetterGrade(80) to equal "B"
  });

  it("returns C for exactly 79 (just below B)", () => {
    // TODO: expect getLetterGrade(79) to equal "C"
  });

  it("returns D for exactly 60 (the D boundary — just passing)", () => {
    // TODO: expect getLetterGrade(60) to equal "D"
    // This is the most important boundary — the pass/fail line!
  });

  it("returns F for exactly 59 (just failing)", () => {
    // TODO: expect getLetterGrade(59) to equal "F"
  });

  it("returns F for exactly 0", () => {
    // TODO: expect getLetterGrade(0) to equal "F"
  });
});

// ─────────────────────────────────────────────
// getLetterGrade() — invalid inputs
// ─────────────────────────────────────────────
describe("getLetterGrade — invalid inputs", () => {
  it("throws an error for a score above 100", () => {
    // TODO: expect(() => getLetterGrade(101)).toThrow("Score must be between 0 and 100")
  });

  it("throws an error for a negative score", () => {
    // TODO: expect(() => getLetterGrade(-1)).toThrow()
  });
});

// ─────────────────────────────────────────────
// calculateAverage()
// ─────────────────────────────────────────────
describe("calculateAverage", () => {
  it("returns the correct average for a set of scores", () => {
    // TODO: expect calculateAverage([70, 80, 90]) to equal 80
  });

  it("returns the score itself for a single element", () => {
    // TODO: expect calculateAverage([75]) to equal 75
  });

  it("rounds to 2 decimal places", () => {
    // TODO: calculateAverage([100, 0]) equals 50.00 — no rounding needed here
    //       Try: calculateAverage([100, 99, 98]) — what should this return?
    //       Check the result using toBeCloseTo(99, 2)
  });

  it("throws an error for an empty array", () => {
    // TODO: expect(() => calculateAverage([])).toThrow("Scores array cannot be empty")
  });
});

// ─────────────────────────────────────────────
// getHighLow()
// ─────────────────────────────────────────────
describe("getHighLow", () => {
  it("returns the correct highest and lowest scores", () => {
    const result = getHighLow([55, 90, 72, 88, 41]);
    // TODO: expect result.highest to equal 90
    // TODO: expect result.lowest to equal 41
  });

  it("returns the same value for highest and lowest with a single score", () => {
    const result = getHighLow([75]);
    // TODO: expect result.highest and result.lowest both to equal 75
  });

  it("returns the correct shape (has 'highest' and 'lowest' properties)", () => {
    const result = getHighLow([60, 80]);
    // TODO: expect result to have property "highest"
    // TODO: expect result to have property "lowest"
  });

  it("throws an error for an empty array", () => {
    // TODO: expect(() => getHighLow([])).toThrow()
  });
});

// ─────────────────────────────────────────────
// generateReport()
// ─────────────────────────────────────────────
describe("generateReport", () => {
  // Test data
  const students = [
    { name: "Alice",   score: 95 }, // A
    { name: "Bob",     score: 82 }, // B
    { name: "Carol",   score: 74 }, // C
    { name: "David",   score: 61 }, // D
    { name: "Eve",     score: 55 }, // F
    { name: "Frank",   score: 90 }, // A
  ];

  it("calculates the correct average score", () => {
    const report = generateReport(students);
    // TODO: 95+82+74+61+55+90 = 457 / 6 = 76.17
    //       expect report.average to be close to 76.17
    //       HINT: use toBeCloseTo(76.17, 1)
  });

  it("identifies the correct highest and lowest scores", () => {
    const report = generateReport(students);
    // TODO: expect report.highest to equal 95
    // TODO: expect report.lowest to equal 55
  });

  it("counts passed and failed students correctly", () => {
    const report = generateReport(students);
    // TODO: Scores >= 60: Alice(95), Bob(82), Carol(74), David(61), Frank(90) = 5 passed
    // TODO: Scores < 60:  Eve(55) = 1 failed
    // expect report.passed to equal 5
    // expect report.failed to equal 1
  });

  it("breaks down grades correctly", () => {
    const report = generateReport(students);
    // TODO: expect report.gradeBreakdown.A to equal 2  (Alice 95, Frank 90)
    // TODO: expect report.gradeBreakdown.B to equal 1  (Bob 82)
    // TODO: expect report.gradeBreakdown.C to equal 1  (Carol 74)
    // TODO: expect report.gradeBreakdown.D to equal 1  (David 61)
    // TODO: expect report.gradeBreakdown.F to equal 1  (Eve 55)
  });

  it("returns a zeroed report for an empty student list", () => {
    const report = generateReport([]);
    // TODO: expect report.average to equal 0
    // TODO: expect report.passed to equal 0
    // TODO: expect report.failed to equal 0
  });
});

// ─────────────────────────────────────────────
// 🏆 BONUS CHALLENGES
// ─────────────────────────────────────────────
describe("BONUS — all students pass", () => {
  it("reports 0 failed when every student passes", () => {
    const allPassing = [
      { name: "A", score: 100 },
      { name: "B", score: 90  },
      { name: "C", score: 60  }, // exactly passing
    ];
    // TODO: generate a report and check that failed equals 0
    //       and passed equals 3
  });
});

describe("BONUS — all students fail", () => {
  it("reports 0 passed when every student fails", () => {
    const allFailing = [
      { name: "A", score: 0  },
      { name: "B", score: 59 }, // just below passing
    ];
    // TODO: generate a report and check that passed equals 0
    //       and failed equals 2
  });
});
