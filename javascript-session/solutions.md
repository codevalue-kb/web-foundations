# JavaScript Foundations - 3 Hour Exercise Workshop
# SOLUTION KEY

**Duration:** 3 hours
**Format:** Complete solutions with explanations

---

# PART 1: Syntax, Variables, and Data Types - SOLUTIONS

## Exercise 1.1: Variable Declaration Practice - SOLUTION

```javascript
// 1. Your first name (won't change) - use const
const firstName = "John";

// 2. Your current age (might be updated) - use let
let currentAge = 25;

// 3. Days in a week (constant) - use const
const daysInWeek = 7;

// 4. Your current mood (can change) - use let
let currentMood = "happy";

// 5. Speed of light (constant) - use const
const speedOfLight = 299792458;

// Testing: You can update let variables
currentAge = 26;
currentMood = "excited";

// But you CANNOT update const variables (will cause error):
// firstName = "Jane"; // Error!
// speedOfLight = 300000000; // Error!
```

**Explanation:**
- Use `const` for values that should never change
- Use `let` for values that may need to be updated later
- `const` provides safety by preventing accidental reassignment

---

## Exercise 1.2: Identifier Rules - SOLUTION

```
1. INVALID - Cannot start with a number (1stPlace)
   Correct: let firstPlace = "gold"; or let place1st = "gold";

2. VALID - Underscores are allowed in variable names

3. VALID - Dollar signs ($) are allowed at the beginning and in variable names

4. INVALID - Hyphens (-) are not allowed in variable names
   Correct: let myVariable = 10; (use camelCase instead)

5. VALID - Underscores can be used at the beginning of variable names

6. INVALID - "function" is a reserved JavaScript keyword
   Correct: let functionName = "test"; or let func = "test";

7. VALID - Perfect camelCase naming convention
```

**Key Rules to Remember:**
- Must start with letter, underscore (_), or dollar sign ($)
- Can contain digits AFTER the first character
- Cannot use reserved keywords (if, for, while, function, etc.)
- Case-sensitive (myVar and MyVar are different)
- Use camelCase for JavaScript convention

---

## Exercise 1.3: Expressions and Operators - SOLUTION

```javascript
// 1. Calculate the area of a rectangle
const width = 15;
const height = 8;
const area = width * height;
console.log("Rectangle area:", area); // Output: 120

// 2. Temperature conversion (Celsius to Fahrenheit)
const celsius = 25;
const fahrenheit = celsius * 9/5 + 32;
console.log(celsius + "°C = " + fahrenheit + "°F"); // Output: 25°C = 77°F

// 3. Calculate total cost
const item1 = 12.99;
const item2 = 8.50;
const item3 = 15.25;
const totalCost = item1 + item2 + item3;
console.log("Total cost: $" + totalCost.toFixed(2)); // Output: $36.74

// 4. Age in days
const ageInYears = 25;
const ageInDays = ageInYears * 365;
console.log("Age in days:", ageInDays); // Output: 9125

// 5. Remainder when 47 is divided by 5
const dividend = 47;
const divisor = 5;
const remainder = dividend % divisor;
console.log("47 ÷ 5 remainder:", remainder); // Output: 2
```

**Key Concepts:**
- Use `*` for multiplication, `/` for division
- The `%` (modulus) operator gives the remainder
- Order of operations follows mathematical rules (PEMDAS)
- `.toFixed(2)` rounds numbers to 2 decimal places

---

## Exercise 1.4: String Concatenation - SOLUTION

```javascript
// 1 & 2. Personal information sentence
const firstName = "Sarah";
const lastName = "Connor";
const age = 28;

const introduction = "My name is " + firstName + " " + lastName + " and I am " + age + " years old.";
console.log(introduction);
// Output: "My name is Sarah Connor and I am 28 years old."

// Alternative using template literals (modern approach):
const introModern = `My name is ${firstName} ${lastName} and I am ${age} years old.`;
console.log(introModern);

// 3. Product and price
const productName = "Laptop";
const price = 899.99;

const productInfo = "The " + productName + " costs $" + price;
console.log(productInfo);
// Output: "The Laptop costs $899.99"

// Modern alternative:
const productInfoModern = `The ${productName} costs $${price}`;

// 4. Calculator message
const num1 = 5;
const num2 = 3;
const sum = num1 + num2;

const calculatorMessage = num1 + " + " + num2 + " = " + sum;
console.log(calculatorMessage);
// Output: "5 + 3 = 8"

// Modern alternative:
const calcModern = `${num1} + ${num2} = ${sum}`;
```

**Key Concepts:**
- Use `+` to concatenate (join) strings
- When combining strings and numbers, numbers are converted to strings
- Template literals (`${variable}`) are the modern, cleaner way
- Always test your string output to ensure proper spacing

---

## Exercise 1.5: Code Block Challenge - SOLUTION

```javascript
// Original code wrapped in a code block
{
  let temperature = 20;
  console.log("Temperature is " + temperature);
  temperature = temperature + 5;
  console.log("New temperature is " + temperature);
}

// This demonstrates block scope - variables inside {...} have their own scope
// Later you'll use this with functions, if statements, and loops

// Example showing block scope:
{
  let blockVariable = "I'm inside the block";
  console.log(blockVariable); // This works
}
// console.log(blockVariable); // This would cause an error - variable doesn't exist outside block
```

**Key Concepts:**
- Curly braces `{...}` create a code block
- Variables declared with `let` or `const` inside a block are scoped to that block
- Code blocks are used in functions, loops, and conditional statements
- Proper indentation makes code blocks easier to read

---

# PART 2: Operators and Conditional Statements - SOLUTIONS

## Exercise 2.1: Arithmetic Operators - SOLUTION

```javascript
let a = 20;
let b = 6;

// 1. Add a and b
let sum = a + b;
console.log("Sum:", sum); // Output: 26

// 2. Subtract b from a
let difference = a - b;
console.log("Difference:", difference); // Output: 14

// 3. Multiply a and b
let product = a * b;
console.log("Product:", product); // Output: 120

// 4. Divide a by b
let quotient = a / b;
console.log("Quotient:", quotient); // Output: 3.333...

// 5. Find a modulus b (remainder)
let remainder = a % b;
console.log("Remainder:", remainder); // Output: 2

// 6. Increment a by 1 using the ++ operator
a++;
console.log("Incremented a:", a); // Output: 21

// 7. Decrement b by 1 using the -- operator
b--;
console.log("Decremented b:", b); // Output: 5

// Additional examples:
let x = 10;
let y = x++; // y gets 10, then x becomes 11 (post-increment)
let z = ++x; // x becomes 12 first, then z gets 12 (pre-increment)
console.log("x:", x, "y:", y, "z:", z); // x: 12, y: 10, z: 12
```

**Key Operators:**
- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division (can result in decimals)
- `%` Modulus (remainder after division)
- `++` Increment by 1
- `--` Decrement by 1

---

## Exercise 2.2: Comparison Operators - SOLUTION

```javascript
let x = 10;
let y = "10";
let z = 5;

console.log(x == y);        // true  - Loose equality (type coercion)
console.log(x === y);       // false - Strict equality (no type coercion)
console.log(x != z);        // true  - x is not equal to z
console.log(x !== y);       // true  - x is not strictly equal to y (different types)
console.log(x > z);         // true  - 10 is greater than 5
console.log(x <= 10);       // true  - 10 is less than or equal to 10
console.log(z < x && x < 20); // true - Both conditions are true (5 < 10 AND 10 < 20)
```

**Explanation:**
```
1. x == y:  TRUE  - "==" compares values only, "10" is converted to 10
2. x === y: FALSE - "===" compares value AND type, number !== string
3. x != z:  TRUE  - 10 is not equal to 5
4. x !== y: TRUE  - 10 (number) is not strictly equal to "10" (string)
5. x > z:   TRUE  - 10 is greater than 5
6. x <= 10: TRUE  - 10 is equal to 10
7. z < x && x < 20: TRUE - Both parts of the AND condition are true
```

**Best Practice:**
- Always use `===` and `!==` (strict equality) instead of `==` and `!=`
- This avoids unexpected type coercion bugs

---

## Exercise 2.3: If Statements - SOLUTION

```javascript
// 1. Positive, Negative, or Zero
let number = -5;

if (number > 0) {
  console.log(number + " is positive");
} else if (number < 0) {
  console.log(number + " is negative");
} else {
  console.log(number + " is zero");
}
// Output: "-5 is negative"

// 2. Voting Eligibility
let age = 16;

if (age >= 18) {
  console.log("You are eligible to vote!");
} else {
  console.log("You are not eligible to vote yet. Wait " + (18 - age) + " more years.");
}
// Output: "You are not eligible to vote yet. Wait 2 more years."

// 3. Even or Odd
let num = 7;

if (num % 2 === 0) {
  console.log(num + " is even");
} else {
  console.log(num + " is odd");
}
// Output: "7 is odd"

// 4. Pass or Fail
let score = 75;

if (score >= 60) {
  console.log("You passed! Score: " + score);
} else {
  console.log("You failed. Score: " + score);
}
// Output: "You passed! Score: 75"

// Enhanced version with grade levels:
if (score >= 90) {
  console.log("Excellent! Grade: A");
} else if (score >= 80) {
  console.log("Great! Grade: B");
} else if (score >= 70) {
  console.log("Good! Grade: C");
} else if (score >= 60) {
  console.log("Passing. Grade: D");
} else {
  console.log("Failed. Grade: F");
}
```

**Key Concepts:**
- `if` checks a condition, executes code if true
- `else if` provides alternative conditions
- `else` handles all remaining cases
- Use `%` to check for even/odd (even numbers have remainder 0 when divided by 2)

---

## Exercise 2.4: Switch Statement - SOLUTION

```javascript
let dayNumber = 3;

switch(dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number! Please enter 1-7.");
}
// Output: "Wednesday"

// Enhanced version with weekday/weekend detection:
switch(dayNumber) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("It's a weekday");
    break;
  case 6:
  case 7:
    console.log("It's the weekend!");
    break;
  default:
    console.log("Invalid day");
}

// Another practical example - Menu selection:
let menuChoice = "B";

switch(menuChoice) {
  case "A":
    console.log("You selected: Create New File");
    break;
  case "B":
    console.log("You selected: Open Existing File");
    break;
  case "C":
    console.log("You selected: Save File");
    break;
  case "D":
    console.log("You selected: Exit");
    break;
  default:
    console.log("Invalid selection. Please choose A, B, C, or D");
}
```

**Key Concepts:**
- `switch` evaluates an expression once
- `case` defines possible matching values
- `break` prevents fall-through to next case
- `default` handles unmatched cases (like `else`)
- Multiple cases can share the same code block

---

## Exercise 2.5: Logical Operators Challenge - SOLUTION

```javascript
let age = 16;
let accompaniedByAdult = true;
let hasValidTicket = true;
let onNoFlyList = false;

// Check all conditions
let canBoard = (age >= 18 || accompaniedByAdult) && hasValidTicket && !onNoFlyList;

if (canBoard) {
  console.log("✓ Boarding approved");
} else {
  console.log("✗ Boarding denied");
  
  // Provide specific feedback
  if (age < 18 && !accompaniedByAdult) {
    console.log("Reason: Minor without adult supervision");
  }
  if (!hasValidTicket) {
    console.log("Reason: No valid ticket");
  }
  if (onNoFlyList) {
    console.log("Reason: On no-fly list");
  }
}
// Output: "✓ Boarding approved"

// Let's test different scenarios:
console.log("\n--- Test Scenario 1 ---");
age = 16;
accompaniedByAdult = false;
hasValidTicket = true;
onNoFlyList = false;
canBoard = (age >= 18 || accompaniedByAdult) && hasValidTicket && !onNoFlyList;
console.log("Can board?", canBoard); // false - minor without adult

console.log("\n--- Test Scenario 2 ---");
age = 25;
accompaniedByAdult = false;
hasValidTicket = false;
onNoFlyList = false;
canBoard = (age >= 18 || accompaniedByAdult) && hasValidTicket && !onNoFlyList;
console.log("Can board?", canBoard); // false - no ticket

console.log("\n--- Test Scenario 3 ---");
age = 30;
accompaniedByAdult = false;
hasValidTicket = true;
onNoFlyList = true;
canBoard = (age >= 18 || accompaniedByAdult) && hasValidTicket && !onNoFlyList;
console.log("Can board?", canBoard); // false - on no-fly list
```

**Logical Operators:**
- `&&` (AND) - Both conditions must be true
- `||` (OR) - At least one condition must be true
- `!` (NOT) - Inverts the boolean value

**Breakdown of the logic:**
```
(age >= 18 || accompaniedByAdult) - Must be adult OR with adult
&& hasValidTicket                  - AND must have ticket
&& !onNoFlyList                    - AND must NOT be on no-fly list
```

---

# PART 3: Loops and Iteration - SOLUTIONS

## Exercise 3.1: For Loop Basics - SOLUTION

```javascript
// 1. Print numbers 1 to 10
console.log("Numbers 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// 2. Print even numbers from 0 to 20
console.log("\nEven numbers 0 to 20:");
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
// Alternative approach:
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// Output: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// 3. Print numbers from 10 down to 1 (countdown)
console.log("\nCountdown from 10 to 1:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Blast off!");
// Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, Blast off!

// 4. Calculate the sum of numbers from 1 to 100
console.log("\nSum of 1 to 100:");
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("The sum is:", sum);
// Output: The sum is: 5050

// Mathematical verification: n(n+1)/2 = 100(101)/2 = 5050 ✓

// 5. Print the multiplication table for 5
console.log("\nMultiplication table for 5:");
for (let i = 1; i <= 10; i++) {
  let result = 5 * i;
  console.log("5 × " + i + " = " + result);
}
// Output:
// 5 × 1 = 5
// 5 × 2 = 10
// 5 × 3 = 15
// ... up to ...
// 5 × 10 = 50
```

**For Loop Structure:**
```javascript
for (initialization; condition; increment/decrement) {
  // code to execute
}
```
- **Initialization:** Runs once at the start
- **Condition:** Checked before each iteration
- **Increment:** Runs after each iteration

---

## Exercise 3.2: While Loop Practice - SOLUTION

```javascript
// 1. Print "Hello" 5 times
console.log("Hello 5 times:");
let count = 0;
while (count < 5) {
  console.log("Hello");
  count++;
}
// Output: Hello (printed 5 times)

// 2. Find the first number greater than 100 that is divisible by 13
console.log("\nFirst number > 100 divisible by 13:");
let number = 101;
while (number % 13 !== 0) {
  number++;
}
console.log("Answer:", number);
// Output: Answer: 104
// Verification: 104 ÷ 13 = 8

// 3. Count down from 20 to 0, but only print multiples of 4
console.log("\nCountdown from 20, multiples of 4:");
let countdown = 20;
while (countdown >= 0) {
  if (countdown % 4 === 0) {
    console.log(countdown);
  }
  countdown--;
}
// Output: 20, 16, 12, 8, 4, 0

// Alternative approach using compound condition:
countdown = 20;
while (countdown >= 0) {
  console.log(countdown);
  countdown -= 4;
}
```

**While Loop Structure:**
```javascript
while (condition) {
  // code to execute
  // must update condition variable to avoid infinite loop!
}
```

**Key Differences from For Loop:**
- While loops are better when you don't know how many iterations needed
- You must manually update the loop variable
- Great for "keep going until condition is met" scenarios

---

## Exercise 3.3: Do-While Loop - SOLUTION

```javascript
console.log("Doubling numbers until > 1000:");

let number = 1;
do {
  console.log(number);
  number *= 2; // Same as: number = number * 2
} while (number <= 1000);

// Output:
// 1
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024 is not printed because condition fails before printing

// Let's verify the final value:
console.log("Final value:", number);
// Output: Final value: 2048

// Example showing do-while vs while difference:
console.log("\nDemonstrating do-while runs at least once:");

let x = 10;

// Do-while: runs once even though condition is false
do {
  console.log("Do-while: This prints once even though x is already 10");
} while (x < 5);

// While: doesn't run at all
while (x < 5) {
  console.log("While: This never prints");
}
```

**Do-While Loop Structure:**
```javascript
do {
  // code to execute
} while (condition);
```

**Key Feature:**
- Code block executes **at least once** before checking condition
- Useful when you need to run code before testing the condition

---

## Exercise 3.4: Break and Continue - SOLUTION

```javascript
// 1. Print numbers 1 to 20, but STOP when you reach 15
console.log("Numbers 1-20, stop at 15:");
for (let i = 1; i <= 20; i++) {
  if (i === 15) {
    break; // Exit the loop immediately
  }
  console.log(i);
}
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14

// 2. Print numbers 1 to 20, but SKIP multiples of 3
console.log("\nNumbers 1-20, skip multiples of 3:");
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue; // Skip this iteration
  }
  console.log(i);
}
// Output: 1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20
// (3, 6, 9, 12, 15, 18 are skipped)

// 3. Find the first perfect square greater than 200
console.log("\nFirst perfect square > 200:");
for (let i = 1; i <= 100; i++) {
  let square = i * i;
  if (square > 200) {
    console.log(i + "² = " + square);
    break;
  }
}
// Output: 15² = 225
// Verification: 14² = 196 (too small), 15² = 225 (first one > 200)

// 4. Print all odd numbers between 1 and 30
console.log("\nOdd numbers 1-30:");
for (let i = 1; i <= 30; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i);
}
// Output: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29

// Alternative without continue:
console.log("\nAlternative approach:");
for (let i = 1; i <= 30; i += 2) {
  console.log(i);
}
```

**Break vs Continue:**
- `break` - Exits the loop completely
- `continue` - Skips current iteration, continues with next

**When to Use:**
- Use `break` when you've found what you're looking for
- Use `continue` when you want to skip certain iterations

---

## Exercise 3.5: Nested Loops Challenge - SOLUTION

```javascript
// 1. Create a multiplication table (1-5) × (1-5)
console.log("Multiplication Table:");
console.log("     1   2   3   4   5");
console.log("   +---+---+---+---+---+");

for (let i = 1; i <= 5; i++) {
  let row = i + " | ";
  for (let j = 1; j <= 5; j++) {
    let product = i * j;
    row += (product < 10 ? " " : "") + product + " ";
  }
  console.log(row);
}
// Output:
//      1   2   3   4   5
//    +---+---+---+---+---+
// 1 |  1  2  3  4  5
// 2 |  2  4  6  8 10
// 3 |  3  6  9 12 15
// 4 |  4  8 12 16 20
// 5 |  5 10 15 20 25

// 2. Print a right triangle pattern
console.log("\nRight Triangle Pattern:");
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}
// Output:
// *
// **
// ***
// ****
// *****

// Bonus: Left-aligned triangle
console.log("\nLeft-aligned Triangle:");
for (let i = 1; i <= 5; i++) {
  let line = "";
  // Add spaces
  for (let j = 1; j <= 5 - i; j++) {
    line += " ";
  }
  // Add stars
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}
// Output:
//     *
//    **
//   ***
//  ****
// *****

// 3. Print a number pyramid
console.log("\nNumber Pyramid:");
for (let i = 1; i <= 5; i++) {
  let numbers = "";
  for (let j = 1; j <= i; j++) {
    numbers += i;
  }
  console.log(numbers);
}
// Output:
// 1
// 22
// 333
// 4444
// 55555

// Bonus: Pyramid with sequential numbers
console.log("\nSequential Number Pyramid:");
for (let i = 1; i <= 5; i++) {
  let numbers = "";
  for (let j = 1; j <= i; j++) {
    numbers += j + " ";
  }
  console.log(numbers);
}
// Output:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
```

**Nested Loop Concepts:**
- Outer loop controls rows
- Inner loop controls columns/elements within each row
- Each outer loop iteration completes all inner loop iterations
- Useful for tables, patterns, and multi-dimensional data

**Pattern Tips:**
- Count iterations to determine shape
- Use spacing/formatting for alignment
- Break complex patterns into steps (spaces, then stars, etc.)

---

# PART 4: Functions and Final Project - SOLUTIONS

## Exercise 4.1: Basic Functions - SOLUTION

```javascript
// 1. Greet function
function greet(name) {
  return "Hello, " + name + "!";
}

// 2. Square function
function square(number) {
  return number * number;
}

// 3. IsEven function
function isEven(number) {
  return number % 2 === 0;
}

// 4. GetMax function
function getMax(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
  // Or simply: return (a > b) ? a : b;
}

// 5. Temperature conversion function
function celsiusToFahrenheit(celsius) {
  return celsius * 9/5 + 32;
}

// Test the functions:
console.log(greet("Alice"));                    // Output: "Hello, Alice!"
console.log(square(5));                         // Output: 25
console.log(isEven(7));                         // Output: false
console.log(isEven(8));                         // Output: true
console.log(getMax(10, 25));                    // Output: 25
console.log(celsiusToFahrenheit(25));          // Output: 77
console.log(celsiusToFahrenheit(0));           // Output: 32
console.log(celsiusToFahrenheit(100));         // Output: 212

// Additional test cases:
console.log("\n--- More Tests ---");
console.log(greet("World"));                    // "Hello, World!"
console.log("Square of 0:", square(0));         // 0
console.log("Square of -3:", square(-3));       // 9 (negative squared is positive)
console.log("Is 0 even?", isEven(0));          // true
console.log("Max of equal numbers:", getMax(5, 5)); // 5
```

**Function Concepts:**
- Functions are reusable blocks of code
- `function functionName(parameters) { ... }`
- Use `return` to send a value back to the caller
- Parameters are like variables that receive input values
- Functions make code more organized and maintainable

---

## Exercise 4.2: Functions with Multiple Parameters - SOLUTION

```javascript
// 1. Calculate rectangle area
function calculateRectangleArea(width, height) {
  return width * height;
}

// 2. Get full name
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

// 3. Calculate discount
function calculateDiscount(price, discountPercent) {
  let discountAmount = price * (discountPercent / 100);
  let finalPrice = price - discountAmount;
  return finalPrice;
}

// Alternative with detailed info:
function calculateDiscountDetailed(price, discountPercent) {
  let discountAmount = price * (discountPercent / 100);
  let finalPrice = price - discountAmount;
  return {
    originalPrice: price,
    discountPercent: discountPercent,
    discountAmount: discountAmount,
    finalPrice: finalPrice,
    savings: discountAmount
  };
}

// 4. Check if number is in range
function inRange(number, min, max) {
  return number >= min && number <= max;
}

// Test the functions:
console.log("Rectangle area (5 × 10):", calculateRectangleArea(5, 10));
// Output: 50

console.log("Full name:", getFullName("John", "Doe"));
// Output: "John Doe"

console.log("$100 with 20% discount: $" + calculateDiscount(100, 20));
// Output: "$100 with 20% discount: $80"

console.log("Detailed discount:", calculateDiscountDetailed(100, 20));
// Output: {originalPrice: 100, discountPercent: 20, ...}

console.log("Is 15 between 10 and 20?", inRange(15, 10, 20));
// Output: true

console.log("Is 5 between 10 and 20?", inRange(5, 10, 20));
// Output: false

// More test cases:
console.log("\n--- Additional Tests ---");
console.log("Square area:", calculateRectangleArea(7, 7));
// Output: 49

let discountedPrice = calculateDiscount(50, 15);
console.log("$50 with 15% off: $" + discountedPrice.toFixed(2));
// Output: "$50 with 15% off: $42.50"

console.log("Is 10 in range [10, 20]?", inRange(10, 10, 20));
// Output: true (inclusive boundaries)
```

**Multiple Parameters:**
- Separate parameters with commas
- Parameters can be different data types
- Order matters when calling the function
- You can return complex data (objects) for detailed results

---

## Exercise 4.3: Functions Calling Functions - SOLUTION

```javascript
// 1. Calculate circle area
function calculateCircleArea(radius) {
  const pi = 3.14159;
  return pi * radius * radius;
}

// 2. Calculate circle circumference
function calculateCircleCircumference(radius) {
  const pi = 3.14159;
  return 2 * pi * radius;
}

// 3. Get complete circle information
function getCircleInfo(radius) {
  return {
    radius: radius,
    area: calculateCircleArea(radius),
    circumference: calculateCircleCircumference(radius),
    diameter: radius * 2
  };
}

// Test the functions:
console.log("Circle with radius 5:");
console.log("Area:", calculateCircleArea(5));
// Output: Area: 78.53975

console.log("Circumference:", calculateCircleCircumference(5));
// Output: Circumference: 31.4159

console.log("\nComplete circle info:");
let circleData = getCircleInfo(5);
console.log(circleData);
// Output: {radius: 5, area: 78.53975, circumference: 31.4159, diameter: 10}

// Formatted output:
console.log("\n--- Formatted Circle Report ---");
console.log("Radius: " + circleData.radius);
console.log("Diameter: " + circleData.diameter);
console.log("Area: " + circleData.area.toFixed(2));
console.log("Circumference: " + circleData.circumference.toFixed(2));

// Another example - Geometric calculations
console.log("\n--- Different Radius ---");
let circle2 = getCircleInfo(10);
console.log("For radius 10:");
console.log("Area: " + circle2.area.toFixed(2) + " square units");
console.log("Circumference: " + circle2.circumference.toFixed(2) + " units");

// Enhanced version with validation:
function getCircleInfoSafe(radius) {
  if (radius <= 0) {
    return "Error: Radius must be positive";
  }
  return getCircleInfo(radius);
}

console.log("\n--- With Validation ---");
console.log(getCircleInfoSafe(-5));  // Error message
console.log(getCircleInfoSafe(7));   // Valid circle info
```

**Functions Calling Functions:**
- Functions can call other functions
- Promotes code reuse (DRY - Don't Repeat Yourself)
- Each function has a single, clear responsibility
- Creates modular, maintainable code
- Return values from one function can be used by another

---

## Exercise 4.4: Final Project - Grade Calculator - SOLUTION

```javascript
// 1. Calculate average of scores
function calculateAverage(scores) {
  let sum = 0;
  
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  
  let average = sum / scores.length;
  return average;
}

// 2. Get letter grade from average
function getLetterGrade(average) {
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// 3. Generate complete report
function generateReport(studentName, scores) {
  // Calculate statistics
  let average = calculateAverage(scores);
  let letterGrade = getLetterGrade(average);
  let passingStatus = average >= 60 ? "PASSED" : "FAILED";
  
  // Build report string
  let report = "=".repeat(50) + "\n";
  report += "STUDENT GRADE REPORT\n";
  report += "=".repeat(50) + "\n\n";
  
  report += "Student Name: " + studentName + "\n\n";
  
  report += "Test Scores:\n";
  for (let i = 0; i < scores.length; i++) {
    report += "  Test " + (i + 1) + ": " + scores[i] + "\n";
  }
  
  report += "\n";
  report += "Average Score: " + average.toFixed(2) + "\n";
  report += "Letter Grade: " + letterGrade + "\n";
  report += "Status: " + passingStatus + "\n";
  
  report += "\n" + "=".repeat(50);
  
  return report;
}

// 4. Test with provided data
let studentName = "Alex Johnson";
let testScores = [85, 92, 78, 90, 88];

console.log(generateReport(studentName, testScores));

/* Output:
==================================================
STUDENT GRADE REPORT
==================================================

Student Name: Alex Johnson

Test Scores:
  Test 1: 85
  Test 2: 92
  Test 3: 78
  Test 4: 90
  Test 5: 88

Average Score: 86.60
Letter Grade: B
Status: PASSED

==================================================
*/

// Test with more students:
console.log("\n\n");
console.log(generateReport("Emma Wilson", [95, 88, 92, 97, 90]));

console.log("\n\n");
console.log(generateReport("Michael Brown", [55, 48, 62, 58, 52]));

console.log("\n\n");
console.log(generateReport("Sarah Davis", [100, 98, 100, 99, 100]));

// Enhanced version with additional statistics:
function generateEnhancedReport(studentName, scores) {
  let average = calculateAverage(scores);
  let letterGrade = getLetterGrade(average);
  let passingStatus = average >= 60 ? "PASSED" : "FAILED";
  
  // Find highest and lowest scores
  let highest = scores[0];
  let lowest = scores[0];
  
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highest) {
      highest = scores[i];
    }
    if (scores[i] < lowest) {
      lowest = scores[i];
    }
  }
  
  let report = "=".repeat(50) + "\n";
  report += "ENHANCED STUDENT GRADE REPORT\n";
  report += "=".repeat(50) + "\n\n";
  report += "Student: " + studentName + "\n\n";
  
  report += "Test Scores: " + scores.join(", ") + "\n\n";
  
  report += "Statistics:\n";
  report += "  Average: " + average.toFixed(2) + "\n";
  report += "  Highest Score: " + highest + "\n";
  report += "  Lowest Score: " + lowest + "\n";
  report += "  Score Range: " + (highest - lowest) + "\n\n";
  
  report += "Grade: " + letterGrade + " (" + passingStatus + ")\n";
  report += "=".repeat(50);
  
  return report;
}

console.log("\n\n--- ENHANCED VERSION ---\n");
console.log(generateEnhancedReport("Alex Johnson", [85, 92, 78, 90, 88]));
```

**Key Concepts Demonstrated:**
- Breaking complex problems into smaller functions
- Using loops to process arrays of data
- String concatenation to build reports
- Conditional logic for grading
- Function composition (calling functions from other functions)
- Code reusability and maintainability

---

## BONUS CHALLENGE - SOLUTION

```javascript
function playGuessingGame(targetNumber, maxGuesses) {
  // Simulated guesses (in real game, these would be user inputs)
  let guesses = [25, 50, 75, 60];
  
  console.log("=== NUMBER GUESSING GAME ===");
  console.log("Target number (hidden): " + targetNumber);
  console.log("Maximum guesses allowed: " + maxGuesses);
  console.log("Let's play!\n");
  
  for (let attempt = 0; attempt < guesses.length && attempt < maxGuesses; attempt++) {
    let currentGuess = guesses[attempt];
    let attemptNumber = attempt + 1;
    
    console.log("Attempt " + attemptNumber + ": Guessing " + currentGuess);
    
    if (currentGuess === targetNumber) {
      console.log("🎉 Correct! You won in " + attemptNumber + " guesses!");
      return attemptNumber;
    } else if (currentGuess < targetNumber) {
      console.log("❌ Too low! Try a higher number.\n");
    } else {
      console.log("❌ Too high! Try a lower number.\n");
    }
  }
  
  console.log("😞 Game Over! You ran out of guesses.");
  console.log("The number was: " + targetNumber);
  return "failed";
}

// Test the game:
let result = playGuessingGame(60, 5);
console.log("\nResult:", result);

/* Output:
=== NUMBER GUESSING GAME ===
Target number (hidden): 60
Maximum guesses allowed: 5
Let's play!

Attempt 1: Guessing 25
❌ Too low! Try a higher number.

Attempt 2: Guessing 50
❌ Too low! Try a higher number.

Attempt 3: Guessing 75
❌ Too high! Try a lower number.

Attempt 4: Guessing 60
🎉 Correct! You won in 4 guesses!

Result: 4
*/

console.log("\n\n--- Different Scenarios ---\n");

// Scenario 2: Win on first try
console.log("Scenario: Lucky first guess");
playGuessingGame(25, 5);

// Scenario 3: Run out of guesses
console.log("\n\nScenario: Too many wrong guesses");
let failResult = playGuessingGame(100, 3);

// Enhanced version with random target:
function playRandomGuessingGame(maxGuesses) {
  // Generate random number between 1 and 100
  let targetNumber = Math.floor(Math.random() * 100) + 1;
  let guesses = [25, 50, 75, 40, 60, 80]; // Pre-defined guesses
  
  console.log("=== RANDOM NUMBER GAME ===");
  console.log("I'm thinking of a number between 1 and 100...\n");
  
  for (let attempt = 0; attempt < Math.min(guesses.length, maxGuesses); attempt++) {
    let currentGuess = guesses[attempt];
    let attemptNumber = attempt + 1;
    
    console.log("Attempt " + attemptNumber + ": " + currentGuess);
    
    if (currentGuess === targetNumber) {
      console.log("🎉 Correct! The number was " + targetNumber);
      return attemptNumber;
    } else if (currentGuess < targetNumber) {
      console.log("Too low!");
    } else {
      console.log("Too high!");
    }
  }
  
  console.log("\nGame Over! The number was: " + targetNumber);
  return "failed";
}

console.log("\n\n--- Random Game ---\n");
playRandomGuessingGame(6);
```

**Advanced Concepts:**
- Simulating user interaction with predefined data
- Game loop logic with attempts tracking
- Conditional feedback based on comparisons
- Early exit from loops using return
- Building engaging user experiences with emojis and formatting

---

# SUMMARY

**Congratulations on completing all exercises!**

## Skills Mastered:

### Part 1: Fundamentals
- ✓ Variable declaration (let vs const)
- ✓ Identifier naming rules
- ✓ Basic operators and expressions
- ✓ String concatenation
- ✓ Code block structure

### Part 2: Control Flow
- ✓ Arithmetic operations
- ✓ Comparison operators (== vs ===)
- ✓ Conditional statements (if/else)
- ✓ Switch statements
- ✓ Logical operators (&&, ||, !)

### Part 3: Iteration
- ✓ For loops (counting, iterating)
- ✓ While loops
- ✓ Do-while loops
- ✓ Break and continue statements
- ✓ Nested loops and patterns

### Part 4: Functions
- ✓ Function declaration and invocation
- ✓ Parameters and return values
- ✓ Multiple parameters
- ✓ Functions calling other functions
- ✓ Building complete applications

## Next Steps:
1. Practice writing your own variations of these exercises
2. Combine concepts (loops + functions, conditions + functions, etc.)
3. Learn about arrays and objects
4. Explore DOM manipulation for web interactivity
5. Study more advanced JavaScript features (arrow functions, callbacks, etc.)

**Keep coding!** 🚀
