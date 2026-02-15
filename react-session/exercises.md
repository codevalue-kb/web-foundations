# Web Foundations – React
## Hands-On Exercises

> **Beginner Level · 5 Exercises · 3 Hours Total**

---

## Table of Contents

| # | Exercise | Time |
|---|----------|------|
| 1 | [JSX Basics](#exercise-1--jsx-basics) | 30 min |
| 2 | [Components & Props](#exercise-2--components--props) | 35 min |
| 3 | [Events](#exercise-3--events) | 30 min |
| 4 | [Conditional Rendering & Lists](#exercise-4--conditional-rendering--lists) | 35 min |
| 5 | [State & Hooks](#exercise-5--state--hooks) | 40 min |

> 💡 **Tip:** Try each exercise on your own before looking at the solutions file!

---

## Exercise 1 – JSX Basics
⏱ 30 min · *Write JSX, embed JavaScript expressions, and apply CSS class names*

### Task: Your Challenge

1. Create a new React app using Vite (`npm create vite@latest`).
2. Inside `App.jsx`, replace the default content with a `<div>` that has `className="profile-card"`.
3. Add an `<h1>` that says `"Hello, [Your Name]!"`.
4. Create a JavaScript variable called `age` (set it to any number) and display it inside a `<p>` tag using JSX curly braces.
5. Add a `<p>` that shows whether you are over 18, using a ternary operator inside JSX: `{age >= 18 ? 'Adult' : 'Minor'}`.
6. Run the app and confirm all three pieces of text appear in the browser.

> **Hint:** JSX requires exactly ONE top-level element. Wrap everything in a `<div>` or empty fragment `<></>`

---

## Exercise 2 – Components & Props
⏱ 35 min · *Build reusable UI components and pass data via props*

### Task: Build a Reusable Product Card

1. Create a new file called `ProductCard.jsx`.
2. Define a function component named `ProductCard` that accepts props.
3. The component should render: the product name in an `<h2>`, the price inside a `<p>` (format: `$XX.XX`), and a short description in a `<p>`.
4. In `App.jsx`, import `ProductCard` and render it three times with different product data (`name`, `price`, `description`).
5. **Bonus:** Add a `props.children` usage — wrap a `"New!"` label inside one `<ProductCard>` tag and display it inside the component.

> **Hint:** A component name MUST start with an uppercase letter. Pass data as HTML attributes: `<ProductCard name="..." />`

---

## Exercise 3 – Events
⏱ 30 min · *Handle user interactions with `onClick`, `onChange` and event objects*

### Task: Build a Click Logger

1. Create an `App.jsx` with a `<button>` labelled `"Click Me"`.
2. Write an event handler function called `handleClick` that runs when the button is clicked.
3. The handler should call `alert('Button was clicked!')` on the first click.
4. Replace the alert: add a `<p>` that updates its text to `'You clicked! (event triggered)'` — **Hint:** you will need `useState` for this (preview of Exercise 5). For now, just `console.log` the message.
5. Add a text `<input>` field. Write an `onChange` handler called `handleChange` that logs the current input value to the browser console every time the user types.
6. **Bonus:** Add a second button that receives a name argument via an arrow function and alerts `'Hello, [name]!'`.

> **Hint:** React events use camelCase — `onClick`, `onChange`. The event object `(e)` gives you `e.target.value` for input fields.

---

## Exercise 4 – Conditional Rendering & Lists
⏱ 35 min · *Use `map()` to render lists, and `if`/`&&` for conditional output*

### Task: Render a Fruit List

1. In `App.jsx`, create an array of fruit objects: `[{id:1, name:'Apple', inStock: true}, {id:2, name:'Banana', inStock: false}, {id:3, name:'Mango', inStock: true}]`.
2. Use the JavaScript `.map()` method to render a `<li>` for each fruit inside a `<ul>`.
3. Each `<li>` must have a unique `key` prop set to the fruit's `id`.
4. Using conditional rendering (`&&`), show a ✅ icon next to the fruit name only if `inStock` is `true`.
5. Using an `if` statement or ternary, display a message `"No fruits available"` if the array is empty. Test it by setting the array to `[]`.
6. **Bonus:** Filter the list to show ONLY fruits that are in stock using `.filter()` before `.map()`.

> **Hint:** Every list item MUST have a unique `key` prop. React uses it to efficiently update the DOM.

---

## Exercise 5 – State & Hooks
⏱ 40 min · *Master `useState` to build truly interactive React UIs*

### Task: Build an Interactive Counter

1. Import `useState` from `'react'` at the top of `App.jsx`.
2. Declare a state variable: `const [count, setCount] = useState(0)`.
3. Render the current count value in an `<h2>` tag: `Count: {count}`
4. Add an **Increment** button that calls `setCount(count + 1)` on click.
5. Add a **Decrement** button that calls `setCount(count - 1)` on click. Prevent `count` going below `0`.
6. Add a **Reset** button that resets `count` to `0`.
7. **Bonus:** Add a second state variable (e.g. `name`) with an input field that updates as the user types, and display `'Hello, {name}'` below the counter.

> **Hint:** Never modify state directly. Always use the setter function (`setCount`). React re-renders on every state change.