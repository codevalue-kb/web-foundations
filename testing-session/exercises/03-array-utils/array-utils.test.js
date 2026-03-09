/**
 * Exercise 03 — Array Utilities Tests
 * ════════════════════════════════════════════════════════════════
 * Difficulty : ⭐ Beginner
 * Topic      : Array matchers, toContain, toEqual, toHaveLength
 * Time       : ~20 minutes
 *
 * INSTRUCTIONS
 * ─────────────
 * The array-utils.js file is already implemented.
 * Fill in the TODO tests below.
 *
 * New matchers to practice here:
 *   • toHaveLength(n)        — check array length
 *   • toContain(value)       — check array includes a value
 *   • toEqual([...])         — deep-equal an array
 *   • toThrow(message)       — check an error is thrown
 *
 * Run your tests:  npx jest 03-array-utils
 * ════════════════════════════════════════════════════════════════
 */

const { findMax, sum, average, unique, groupBy, flatten } = require("./array-utils");

// ─────────────────────────────────────────────
// findMax()
// ─────────────────────────────────────────────
describe("findMax", () => {
  it("returns the largest number in an array", () => {
    // TODO: expect findMax([3, 1, 4, 1, 5, 9, 2, 6]) to equal 9
  });

  it("returns the only element in a single-element array", () => {
    // TODO: expect findMax([42]) to equal 42
  });

  it("works correctly when the largest number is negative", () => {
    // TODO: expect findMax([-5, -1, -3]) to equal -1
  });

  it("throws an error when the array is empty", () => {
    // TODO: expect(() => findMax([])).toThrow("Array cannot be empty")
  });
});

// ─────────────────────────────────────────────
// sum()
// ─────────────────────────────────────────────
describe("sum", () => {
  it("returns the correct total of an array of numbers", () => {
    // TODO: expect sum([1, 2, 3, 4, 5]) to equal 15
  });

  it("returns 0 for an empty array", () => {
    // TODO: expect sum([]) to equal 0
  });

  it("handles an array containing negative numbers", () => {
    // TODO: expect sum([10, -3, 5]) to equal 12
  });

  it("returns the number itself for a single-element array", () => {
    // TODO: expect sum([7]) to equal 7
  });
});

// ─────────────────────────────────────────────
// average()
// ─────────────────────────────────────────────
describe("average", () => {
  it("returns the correct mean of an array", () => {
    // TODO: expect average([2, 4, 6]) to equal 4
  });

  it("returns the value itself for a single-element array", () => {
    // TODO: expect average([10]) to equal 10
  });

  it("correctly averages negative numbers", () => {
    // TODO: expect average([-4, 0, 4]) to equal 0
  });

  it("throws an error for an empty array", () => {
    // TODO: expect(() => average([])).toThrow("Array cannot be empty")
  });
});

// ─────────────────────────────────────────────
// unique()
// ─────────────────────────────────────────────
describe("unique", () => {
  it("removes duplicate numbers", () => {
    // TODO: expect unique([1, 2, 2, 3, 1]) to equal [1, 2, 3]
    // HINT: Use toEqual for array comparison
  });

  it("removes duplicate strings", () => {
    // TODO: expect unique(["a", "b", "a", "c"]) to equal ["a", "b", "c"]
  });

  it("returns the same array if there are no duplicates", () => {
    // TODO: expect unique([1, 2, 3]) to equal [1, 2, 3]
  });

  it("returns an empty array when given an empty array", () => {
    // TODO: expect unique([]) to equal []
    //       Also check: expect unique([]).toHaveLength(0)
  });

  it("preserves the original order of elements", () => {
    const result = unique([3, 1, 4, 1, 5, 9, 2, 6, 5]);
    // TODO: Check that the result contains 3 as the first element
    //       HINT: result[0] should be 3
    //       Also check the result does NOT contain duplicates by using toHaveLength
  });
});

// ─────────────────────────────────────────────
// groupBy()
// ─────────────────────────────────────────────
describe("groupBy", () => {
  const products = [
    { name: "Apple",   category: "fruit" },
    { name: "Banana",  category: "fruit" },
    { name: "Carrot",  category: "vegetable" },
    { name: "Broccoli",category: "vegetable" },
    { name: "Milk",    category: "dairy" },
  ];

  it("groups items by the given key", () => {
    const result = groupBy(products, "category");

    // TODO: expect result to have property "fruit"
    // TODO: expect result to have property "vegetable"
    // TODO: expect result to have property "dairy"
  });

  it("puts the correct number of items in each group", () => {
    const result = groupBy(products, "category");

    // TODO: expect result.fruit to have length 2
    // TODO: expect result.vegetable to have length 2
    // TODO: expect result.dairy to have length 1
  });

  it("each group contains the correct items", () => {
    const result = groupBy(products, "category");

    // TODO: expect result.fruit to contain the Apple object
    // HINT: use toContainEqual({ name: "Apple", category: "fruit" })
  });

  it("returns an empty object for an empty array", () => {
    // TODO: expect groupBy([], "category") to equal {}
  });
});

// ─────────────────────────────────────────────
// flatten()
// ─────────────────────────────────────────────
describe("flatten", () => {
  it("flattens a nested array one level deep", () => {
    // TODO: expect flatten([[1, 2], [3, 4], [5]]) to equal [1, 2, 3, 4, 5]
  });

  it("returns an empty array when given an empty array", () => {
    // TODO: expect flatten([]) to equal []
  });

  it("returns the correct length after flattening", () => {
    // TODO: expect flatten([[1, 2, 3], [4, 5]]) to have length 5
  });

  it("does not flatten arrays more than one level deep", () => {
    // TODO: expect flatten([[1, [2, 3]], [4]]) to equal [1, [2, 3], 4]
    // HINT: The inner [2, 3] stays as-is because flatten only goes one level
  });
});

// ─────────────────────────────────────────────
// 🏆 BONUS CHALLENGES
// ─────────────────────────────────────────────
describe("BONUS — combining functions", () => {
  it("average of a uniqued array ignores duplicates", () => {
    // TODO: unique([2, 2, 4, 4, 6]) gives [2, 4, 6], then average of that is 4
    //       Chain the two functions together and test the result
  });

  it("sum of a flattened array gives the same result as summing the sub-arrays", () => {
    // TODO: sum(flatten([[1, 2], [3, 4]])) should equal sum([1, 2]) + sum([3, 4])
  });
});
