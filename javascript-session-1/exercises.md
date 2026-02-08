# JavaScript Foundations - 3 Hour Exercise Workshop

**Duration:** 3 hours
**Format:** Progressive exercises with increasing difficulty
**Topics Covered:** All topics from Web Foundations JavaScript slides

---

## Workshop Structure

- **Part 1 (45 min):** Syntax, Variables, and Data Types
- **Part 2 (45 min):** Operators and Conditional Statements
- **Part 3 (45 min):** Loops and Iteration
- **Part 4 (45 min):** Functions and Final Project

---

# PART 1: Syntax, Variables, and Data Types (45 minutes)

## Exercise 1.1: Variable Declaration Practice (10 min)

**Instructions:** Declare variables using appropriate keywords (let or const) for the following scenarios:

1. Your first name (this won't change)
2. Your current age (this might be updated)
3. The number of days in a week (this is constant)
4. Your current mood (this can change)
5. The speed of light in m/s (constant: 299792458)

**Write your code below:**

```javascript
// Your code here
```

---

## Exercise 1.2: Identifier Rules (5 min)

**Instructions:** Identify which of the following variable names are VALID or INVALID. If invalid, explain why:

1. `let 1stPlace = "gold";`
2. `const user_name = "Alice";`
3. `let $price = 50;`
4. `const my-variable = 10;`
5. `let _count = 0;`
6. `const function = "test";`
7. `let myAge = 25;`

**Write your answers:**

```
1. 
2. 
3. 
4. 
5. 
6. 
7. 
```

---

## Exercise 1.3: Expressions and Operators (15 min)

**Instructions:** Write JavaScript code to solve the following problems:

1. Calculate the area of a rectangle with width 15 and height 8
2. Convert temperature from Celsius to Fahrenheit (Formula: F = C × 9/5 + 32)
    - Convert 25°C to Fahrenheit
3. Calculate the total cost of 3 items priced at $12.99, $8.50, and $15.25
4. Calculate your age in days (assume 365 days per year, use your age)
5. Find the remainder when 47 is divided by 5

**Write your code below:**

```javascript
// 1. Rectangle area

// 2. Temperature conversion

// 3. Total cost

// 4. Age in days

// 5. Remainder
```

---

## Exercise 1.4: String Concatenation (10 min)

**Instructions:** Create variables and combine them to form complete sentences:

1. Store your first name, last name, and age in separate variables
2. Create a sentence: "My name is [firstName] [lastName] and I am [age] years old."
3. Store a product name and price, then create: "The [product] costs $[price]"
4. Create a simple calculator message that shows: "5 + 3 = 8"

**Write your code below:**

```javascript
// Your code here
```

---

## Exercise 1.5: Code Block Challenge (5 min)

**Instructions:** Organize the following code into a proper code block structure:

```javascript
let temperature = 20;
console.log("Temperature is " + temperature);
temperature = temperature + 5;
console.log("New temperature is " + temperature);
```

Wrap this in a code block using curly braces `{...}` (we'll learn about functions later, for now just practice the syntax).

**Write your code below:**

```javascript
// Your code here
```

---

# PART 2: Operators and Conditional Statements (45 minutes)

## Exercise 2.1: Arithmetic Operators (10 min)

**Instructions:** Complete the following calculations:

```javascript
let a = 20;
let b = 6;

// 1. Add a and b
let sum = 

// 2. Subtract b from a
let difference = 

// 3. Multiply a and b
let product = 

// 4. Divide a by b
let quotient = 

// 5. Find a modulus b (remainder)
let remainder = 

// 6. Increment a by 1 using the ++ operator
// Write code here

// 7. Decrement b by 1 using the -- operator
// Write code here

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
console.log("Incremented a:", a);
console.log("Decremented b:", b);
```

---

## Exercise 2.2: Comparison Operators (10 min)

**Instructions:** Predict the output (true or false) for each comparison, then verify:

```javascript
let x = 10;
let y = "10";
let z = 5;

// Predict, then uncomment to test:
// console.log(x == y);        // Prediction: _____
// console.log(x === y);       // Prediction: _____
// console.log(x != z);        // Prediction: _____
// console.log(x !== y);       // Prediction: _____
// console.log(x > z);         // Prediction: _____
// console.log(x <= 10);       // Prediction: _____
// console.log(z < x && x < 20); // Prediction: _____
```

**Write your predictions:**

```
1. x == y:  
2. x === y: 
3. x != z:  
4. x !== y: 
5. x > z:   
6. x <= 10: 
7. z < x && x < 20: 
```

---

## Exercise 2.3: If Statements (10 min)

**Instructions:** Write if statements for the following scenarios:

1. Check if a number is positive, negative, or zero
2. Check if a person is eligible to vote (age >= 18)
3. Check if a number is even or odd
4. Check if a student passed (score >= 60)

**Write your code below:**

```javascript
// 1. Positive, Negative, or Zero
let number = -5; // Test with different values

// 2. Voting Eligibility
let age = 16; // Test with different values

// 3. Even or Odd
let num = 7; // Test with different values

// 4. Pass or Fail
let score = 75; // Test with different values
```

---

## Exercise 2.4: Switch Statement (10 min)

**Instructions:** Create a switch statement that:
- Takes a day number (1-7)
- Prints the day name (1=Monday, 2=Tuesday, etc.)
- Handles invalid input

**Write your code below:**

```javascript
let dayNumber = 3; // Test with different values

// Your switch statement here
```

---

## Exercise 2.5: Logical Operators Challenge (5 min)

**Instructions:** Write a program that checks if a person can board a flight:
- Must be at least 18 years old OR accompanied by an adult
- Must have a valid ticket
- Must NOT be on the no-fly list

**Write your code below:**

```javascript
let age = 16;
let accompaniedByAdult = true;
let hasValidTicket = true;
let onNoFlyList = false;

// Write your conditional logic here
```

---

# PART 3: Loops and Iteration (45 minutes)

## Exercise 3.1: For Loop Basics (10 min)

**Instructions:** Write for loops to accomplish the following:

1. Print numbers 1 to 10
2. Print even numbers from 0 to 20
3. Print numbers from 10 down to 1 (countdown)
4. Calculate the sum of numbers from 1 to 100
5. Print the multiplication table for 5 (5×1 through 5×10)

**Write your code below:**

```javascript
// 1. Numbers 1 to 10

// 2. Even numbers 0 to 20

// 3. Countdown from 10 to 1

// 4. Sum of 1 to 100

// 5. Multiplication table for 5
```

---

## Exercise 3.2: While Loop Practice (10 min)

**Instructions:** Rewrite the following using while loops:

1. Print "Hello" 5 times
2. Find the first number greater than 100 that is divisible by 13
3. Count down from 20 to 0, but only print multiples of 4

**Write your code below:**

```javascript
// 1. Print "Hello" 5 times

// 2. First number > 100 divisible by 13

// 3. Countdown multiples of 4
```

---

## Exercise 3.3: Do-While Loop (5 min)

**Instructions:** Write a do-while loop that:
- Starts with a number 1
- Doubles the number each iteration
- Stops when the number exceeds 1000
- Prints each number

**Write your code below:**

```javascript
// Your code here
```

---

## Exercise 3.4: Break and Continue (10 min)

**Instructions:** Write programs using break and continue:

1. Print numbers 1 to 20, but STOP when you reach 15
2. Print numbers 1 to 20, but SKIP multiples of 3
3. Find the first perfect square greater than 200 (use break)
4. Print all odd numbers between 1 and 30 (use continue for evens)

**Write your code below:**

```javascript
// 1. Stop at 15

// 2. Skip multiples of 3

// 3. First perfect square > 200

// 4. Odd numbers 1-30
```

---

## Exercise 3.5: Nested Loops Challenge (10 min)

**Instructions:** Use nested loops to:

1. Create a multiplication table (1-5) × (1-5)
2. Print a right triangle pattern:
```
*
**
***
****
*****
```
3. Print a number pyramid:
```
1
22
333
4444
55555
```

**Write your code below:**

```javascript
// 1. Multiplication table

// 2. Triangle pattern

// 3. Number pyramid
```

---

# PART 4: Functions and Final Project (45 minutes)

## Exercise 4.1: Basic Functions (10 min)

**Instructions:** Create the following functions:

1. `greet(name)` - Returns "Hello, [name]!"
2. `square(number)` - Returns the square of a number
3. `isEven(number)` - Returns true if even, false if odd
4. `getMax(a, b)` - Returns the larger of two numbers
5. `celsiusToFahrenheit(celsius)` - Converts temperature

**Write your code below:**

```javascript
// 1. Greet function

// 2. Square function

// 3. IsEven function

// 4. GetMax function

// 5. Temperature conversion function

// Test your functions:
// console.log(greet("Alice"));
// console.log(square(5));
// console.log(isEven(7));
// console.log(getMax(10, 25));
// console.log(celsiusToFahrenheit(25));
```

---

## Exercise 4.2: Functions with Multiple Parameters (10 min)

**Instructions:** Create the following functions:

1. `calculateRectangleArea(width, height)` - Returns area
2. `getFullName(firstName, lastName)` - Returns full name
3. `calculateDiscount(price, discountPercent)` - Returns discounted price
4. `inRange(number, min, max)` - Returns true if number is between min and max

**Write your code below:**

```javascript
// Your functions here
```

---

## Exercise 4.3: Functions Calling Functions (10 min)

**Instructions:** Create a function that uses other functions:

1. Create `calculateCircleArea(radius)` - Returns area (π × r²)
2. Create `calculateCircleCircumference(radius)` - Returns circumference (2 × π × r)
3. Create `getCircleInfo(radius)` - Calls both functions above and returns an object with both values

**Write your code below:**

```javascript
// Your functions here
```

---

## Exercise 4.4: Final Project - Grade Calculator (15 min)

**Instructions:** Create a complete grading system with the following requirements:

1. Create a function `calculateAverage(scores)` that:
    - Takes an array of test scores
    - Returns the average score
    - Use a loop to sum all scores

2. Create a function `getLetterGrade(average)` that:
    - Takes a numeric average
    - Returns a letter grade:
        - A: 90-100
        - B: 80-89
        - C: 70-79
        - D: 60-69
        - F: 0-59

3. Create a function `generateReport(studentName, scores)` that:
    - Uses the above functions
    - Returns a formatted string with:
        - Student name
        - All test scores
        - Average score
        - Letter grade
        - Pass/Fail status (passing is 60+)

4. Test your system with:
    - Student: "Alex Johnson"
    - Scores: [85, 92, 78, 90, 88]

**Write your code below:**

```javascript
// Your complete grading system here
```

---

## BONUS CHALLENGE (If time permits)

**Instructions:** Create a simple number guessing game:

1. Create a function `playGuessingGame(targetNumber, maxGuesses)`
2. The function should:
    - Accept guesses from 1 to maxGuesses
    - For this exercise, simulate guesses with an array: [25, 50, 75, 60]
    - Check each guess and provide feedback ("too high", "too low", or "correct!")
    - Return how many guesses it took to win, or "failed" if ran out of guesses

Example:
```javascript
// Target is 60, max 5 guesses, guesses are [25, 50, 75, 60]
// Output should show the guess progression and win on guess 4
```

**Write your code below:**

```javascript
// Your game code here
```

---

# END OF EXERCISES

**Congratulations!** You've completed the 3-hour JavaScript workshop. Make sure to compare your solutions with the answer key!

---
