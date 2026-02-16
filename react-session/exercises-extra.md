# Web Foundations – React
## Extra Exercises

> **Beginner–Intermediate · 9 Additional Exercises**
> These exercises extend the original 3 topics with new scenarios, progressively increasing in difficulty.

---

## Table of Contents

| # | Topic | Exercise | Difficulty | Time |
|---|-------|----------|------------|------|
| 1.2 | JSX Basics | [User Profile Card](#exercise-12--user-profile-card) | ⭐ Beginner | 20 min |
| 1.3 | JSX Basics | [Mini Recipe Card](#exercise-13--mini-recipe-card) | ⭐⭐ Intermediate | 25 min |
| 1.4 | JSX Basics | [Dynamic Inline Styles](#exercise-14--dynamic-inline-styles) | ⭐⭐ Intermediate | 25 min |
| 2.2 | Components & Props | [User Badge Component](#exercise-22--user-badge-component) | ⭐ Beginner | 25 min |
| 2.3 | Components & Props | [Alert Box Component](#exercise-23--alert-box-component) | ⭐⭐ Intermediate | 30 min |
| 2.4 | Components & Props | [Nested Components — Blog Post](#exercise-24--nested-components--blog-post) | ⭐⭐ Intermediate | 35 min |
| 3.2 | Events | [Like Button](#exercise-32--like-button) | ⭐ Beginner | 20 min |
| 3.3 | Events | [Live Character Counter](#exercise-33--live-character-counter) | ⭐⭐ Intermediate | 25 min |
| 3.4 | Events | [Simple Form with Validation](#exercise-34--simple-form-with-validation) | ⭐⭐⭐ Advanced | 35 min |

> 💡 **Tip:** Try each exercise on your own before checking the solutions file!

---

# JSX Basics – Extra Exercises

---

## Exercise 1.2 – User Profile Card
⏱ 20 min · ⭐ Beginner · *Practice JSX structure, expressions, and className*

### Task

You are going to build a simple user profile card using JSX.

1. In `App.jsx`, create the following JavaScript variables at the top of your component:
    - `firstName` = your first name (string)
    - `lastName` = your last name (string)
    - `age` = your age (number)
    - `city` = your city (string)
    - `isOnline` = `true` or `false` (boolean)
2. Return a `<div>` with `className="profile-card"` containing:
    - An `<h2>` that displays the full name by combining `firstName` and `lastName` with a space between them.
    - A `<p>` showing: `Age: 25 · City: Tel Aviv` (use your variables, not hardcoded text).
    - A `<p>` that shows `🟢 Online` if `isOnline` is `true`, or `🔴 Offline` if `false`. Use a ternary operator.
3. Below the card, add a `<small>` tag that shows `"Last updated: February 2026"` as plain text.

> **Hint:** To combine two string variables in JSX: `{firstName + ' ' + lastName}` or use a template literal inside curly braces: `` {`${firstName} ${lastName}`} ``

---

## Exercise 1.3 – Mini Recipe Card
⏱ 25 min · ⭐⭐ Intermediate · *Work with arrays and objects inside JSX*

### Task

You will display a recipe using a JavaScript object and an array inside JSX.

1. In `App.jsx`, create a JavaScript object called `recipe` with these properties:
   ```js
   const recipe = {
     name: 'Pancakes',
     prepTime: 10,
     cookTime: 15,
     servings: 4,
     ingredients: ['1 cup flour', '2 eggs', '1 cup milk', '1 tbsp butter'],
   };
   ```
2. Display the recipe name in an `<h1>`.
3. Display a summary line using JSX: `Prep: 10 min · Cook: 15 min · Serves: 4` — all values must come from the `recipe` object, not hardcoded.
4. Calculate `totalTime` as `recipe.prepTime + recipe.cookTime` in JavaScript (outside the JSX return) and display it in a `<p>`: `Total time: 25 min`.
5. Display the ingredients as an unordered list `<ul>`. Use `.map()` to render each ingredient as a `<li>`. Don't forget the `key` prop — use the array index as the key for now.
6. **Bonus:** Add a `<p>` that shows `"Quick recipe!"` if `totalTime` is under 30 minutes, or `"Takes some time."` if 30 or more. Use a ternary.

> **Hint:** You can call `.map()` directly on `recipe.ingredients` inside the JSX return. Array indices as keys (`key={index}`) are acceptable when the list never changes.

---

## Exercise 1.4 – Dynamic Inline Styles
⏱ 25 min · ⭐⭐ Intermediate · *Use the JSX `style` attribute with JavaScript objects*

### Task

In JSX, the `style` attribute accepts a **JavaScript object** with camelCased property names — not a CSS string.

1. In `App.jsx`, create a variable called `theme` and set it to either `"dark"` or `"light"` (a string).
2. Create a JavaScript object called `cardStyle` that changes based on `theme`:
    - If `"dark"`: `backgroundColor` should be `"#1e1e1e"` and `color` should be `"#ffffff"`.
    - If `"light"`: `backgroundColor` should be `"#ffffff"` and `color` should be `"#111111"`.
    - In both cases, add `padding: "20px"` and `borderRadius: "8px"`.
3. Apply `cardStyle` to a `<div>` using `style={cardStyle}` and put some text content inside it.
4. Create a second variable called `headingSize` (a number, e.g. `32`). Apply it as `fontSize` in an inline style directly on an `<h1>`: `style={{ fontSize: headingSize }}`.
5. **Bonus:** Create a variable `isWarning` set to `true`. Conditionally set the `color` of a `<p>` tag to `"red"` if warning, or `"green"` if not — using an inline style and ternary.

> **Hint:** CSS property names in JSX style objects are camelCase: `background-color` → `backgroundColor`, `font-size` → `fontSize`. The value is always a JavaScript string or number.

---

# Components & Props – Extra Exercises

---

## Exercise 2.2 – User Badge Component
⏱ 25 min · ⭐ Beginner · *Create a simple component and pass multiple props*

### Task

1. Create a new file called `UserBadge.jsx`.
2. Define a `UserBadge` component that accepts these props: `username`, `role`, and `avatarUrl`.
3. The component should render:
    - An `<img>` tag using `avatarUrl` as the `src` and `username` as the `alt`.
    - A `<strong>` tag showing `@username`.
    - A `<span>` tag showing the `role`.
4. In `App.jsx`, import and render three `<UserBadge />` instances with different data. You can use any image URL (e.g. `https://i.pravatar.cc/80?img=1`).
5. **Bonus:** Add a `isAdmin` boolean prop. If `true`, display a `👑` emoji next to the username.

> **Hint:** Remember to give `<img>` both `src` and `alt` props. For booleans, pass them like this: `<UserBadge isAdmin={true} />` or simply `<UserBadge isAdmin />` (shorthand for `true`).

---

## Exercise 2.3 – Alert Box Component
⏱ 30 min · ⭐⭐ Intermediate · *Use props to control component appearance and content*

### Task

You will build a reusable `AlertBox` component that can display different types of alerts.

1. Create `AlertBox.jsx`. The component accepts two props: `type` (a string: `"success"`, `"warning"`, or `"error"`) and `message` (a string).
2. Based on the `type` prop, display a different emoji prefix before the message:
    - `"success"` → `✅`
    - `"warning"` → `⚠️`
    - `"error"` → `❌`
    - Any other value → `ℹ️`
      Use a series of ternary operators or a plain `if/else` block to determine the emoji.
3. Render the emoji and message inside a `<div>` with `className="alert"`.
4. In `App.jsx`, render one of each type: success, warning, and error, each with a different message.
5. **Bonus:** Accept an optional `title` prop. If provided, display it in a `<strong>` tag above the message. If not provided, show nothing.

> **Hint:** For the emoji logic, you can store the result in a variable before the `return` statement and then use it in JSX: `const emoji = type === 'success' ? '✅' : ...`

---

## Exercise 2.4 – Nested Components — Blog Post
⏱ 35 min · ⭐⭐ Intermediate · *Compose components inside other components*

### Task

You will build a small blog layout using multiple components nested inside each other.

1. Create an `Avatar.jsx` component that accepts `name` and `imageUrl` props and renders a small `<img>` and a `<span>` with the author's name.
2. Create an `Author.jsx` component that accepts `name`, `imageUrl`, and `date` props. Inside it, render the `<Avatar />` component (import and use it), and also show the `date` in a `<small>` tag.
3. Create a `BlogPost.jsx` component that accepts `title`, `body`, `authorName`, `authorImage`, and `publishedDate` props. Inside it, render:
    - The `title` in an `<h2>`.
    - The `<Author />` component, passing the author-related props down to it.
    - The `body` in a `<p>`.
4. In `App.jsx`, render two `<BlogPost />` components with different data.
5. **Bonus:** Add a `tags` prop to `BlogPost` — an array of strings (e.g. `['React', 'JSX']`). Render each tag as a `<span>` using `.map()`.

> **Hint:** When passing props down through multiple components, each layer must explicitly pass what the next layer needs. This is called "prop drilling". `BlogPost` receives `authorName` and passes it to `Author`, which passes it to `Avatar`.

---

# Events – Extra Exercises

---

## Exercise 3.2 – Like Button
⏱ 20 min · ⭐ Beginner · *Combine a click event with useState to update the UI*

### Task

1. In `App.jsx`, import `useState` from React.
2. Create a state variable: `const [likes, setLikes] = useState(0)`.
3. Render a button labelled `"🤍 Like"`. When clicked, it should increment `likes` by 1.
4. Display the current like count next to the button: `12 Likes`.
5. Once clicked at least once, change the button label to `"❤️ Liked"`. Use a ternary based on whether `likes > 0`.
6. **Bonus:** Add a second button labelled `"Reset"` that resets `likes` to `0` and changes the button label back to `"🤍 Like"`.

> **Hint:** You will need `useState` — this is a small preview of Exercise 5! The pattern is: `onClick={() => setLikes(likes + 1)}`.

---

## Exercise 3.3 – Live Character Counter
⏱ 25 min · ⭐⭐ Intermediate · *Handle input events and derived state*

### Task

You will build a textarea with a live character counter, like those found on social media post forms.

1. In `App.jsx`, import `useState` and create a state variable: `const [text, setText] = useState('')`.
2. Render a `<textarea>` element. Write an `onChange` handler that updates `text` with the current value of the textarea (`e.target.value`).
3. Below the textarea, display: `Characters: 0 / 200` — where the first number updates live as the user types.
4. Define a constant `MAX_CHARS = 200`. Prevent the user from typing more than 200 characters by not calling `setText` if the new value would exceed the limit.
5. When the character count exceeds 180, change the counter text colour to red. Use an inline `style` with a ternary: `style={{ color: text.length > 180 ? 'red' : 'black' }}`.
6. **Bonus:** Add a `"Post"` button that is `disabled` when the textarea is empty (`text.length === 0`). A disabled button uses the `disabled` prop: `<button disabled={condition}>`.

> **Hint:** `e.target.value` gives you the full current string in the textarea. `e.target.value.length` gives you the character count. You can check the length before deciding whether to call `setText`.

---

## Exercise 3.4 – Simple Form with Validation
⏱ 35 min · ⭐⭐⭐ Advanced · *Handle multiple inputs, form submission, and basic validation*

### Task

You will build a simple registration form with name, email, and password fields plus basic validation.

1. In `App.jsx`, create three state variables: `name`, `email`, and `password` — all initialised as empty strings.
2. Render a form with three `<input>` fields (text, email, password) and a `"Register"` `<button>`.
3. Wire each input's `onChange` to update its corresponding state variable.
4. Write a `handleSubmit` function. For now, it should just `console.log` the three values when called.
5. Add basic validation inside `handleSubmit`: show an `alert` and stop submission if:
    - `name` is empty.
    - `email` does not contain an `@` symbol (use `.includes('@')`).
    - `password` is shorter than 6 characters.
6. If all validation passes, log `"Form submitted successfully!"` and reset all three fields to empty strings.
7. **Bonus:** Instead of using `alert` for errors, display an error `<p>` below the form using a state variable `const [error, setError] = useState('')`. Clear the error message when submission succeeds.

> **Hint:** To call `handleSubmit` when the button is clicked, use `onClick={handleSubmit}` on the button. You do **not** need to use a `<form>` element's `onSubmit` for this exercise. To reset a field, call its setter with an empty string: `setName('')`.