# Unit Testing Exercises — Jest

Six beginner exercises to practice writing unit tests with Jest.
Each exercise comes with a **ready-made source file** and a **test file with TODOs** for you to complete.

---

## Setup

```bash
npm install
```

---

## Running Tests

```bash
# Run all exercises
npm test

# Run a single exercise
npm run test:ex1   # Calculator
npm run test:ex2   # String Utilities
npm run test:ex3   # Array Utilities
npm run test:ex4   # Password Validator
npm run test:ex5   # Shopping Cart
npm run test:ex6   # Grade Calculator

# Watch mode (re-runs on file save — great for TDD)
npm run test:watch

# Coverage report
npm run test:coverage
```

---

## Exercises

| # | Exercise | Topic | Time |
|---|----------|-------|------|
| 01 | **Calculator** | Basic matchers, `toThrow`, edge cases | ~20 min |
| 02 | **String Utilities** | String matchers, `toMatch`, booleans | ~20 min |
| 03 | **Array Utilities** | `toContain`, `toHaveLength`, `toEqual` | ~20 min |
| 04 | **Password Validator** | Objects, multiple assertions, errors | ~25 min |
| 05 | **Shopping Cart** | Classes, `beforeEach`, state isolation | ~25 min |
| 06 | **Grade Calculator** | Boundary values, complex objects | ~30 min |

---

## How Each Exercise Works

Every exercise folder contains two files:

```
01-calculator/
  ├── calculator.js        ← source code (already written — DO NOT EDIT)
  └── calculator.test.js   ← your job: fill in the TODO tests
```

Open the `.test.js` file and look for the `TODO` comments.  
Each one tells you exactly what to test and which matcher to use.

---

## The AAA Pattern

Every test you write should follow **Arrange → Act → Assert**:

```js
it("returns the correct sum", () => {
  // Arrange — set up inputs
  const a = 3;
  const b = 4;

  // Act — call the function
  const result = add(a, b);

  // Assert — check the result
  expect(result).toBe(7);
});
```

---

## Tips

- **Run tests in watch mode** while working: `npm run test:watch`
- **Read the source file** before writing tests — understand what each function does first
- **Test edge cases** — empty inputs, zero, negative numbers, boundaries
- **One assertion per test** ideally — if a test fails, you know exactly what broke
- **Bonus challenges** at the end of each file are optional but great for extra practice

---

## Quick Matcher Reference

```js
expect(value).toBe(42)                    // strict equality (===)
expect(obj).toEqual({ a: 1 })             // deep equality
expect(value).toBeTruthy()                // any truthy value
expect(value).toBeFalsy()                 // any falsy value
expect(value).toBeNull()                  // exactly null
expect(n).toBeGreaterThan(5)              // number comparison
expect(str).toMatch(/regex/)              // string or regex match
expect(arr).toContain("item")             // array/string contains
expect(arr).toHaveLength(3)               // length check
expect(obj).toHaveProperty("key", val)    // object has property
expect(() => fn()).toThrow("message")      // function throws error
expect(promise).resolves.toBe(val)        // resolved promise
expect(promise).rejects.toThrow()         // rejected promise
expect(value).not.toBe(42)               // negate any matcher
```
