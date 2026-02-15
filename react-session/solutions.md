# Web Foundations – React
## Exercise Solutions

> ⚠️ **Try the exercises first before reading this file!**

---

## Table of Contents

| # | Exercise | Time |
|---|----------|------|
| 1 | [JSX Basics](#exercise-1--jsx-basics) | 30 min |
| 2 | [Components & Props](#exercise-2--components--props) | 35 min |
| 3 | [Events](#exercise-3--events) | 30 min |
| 4 | [Conditional Rendering & Lists](#exercise-4--conditional-rendering--lists) | 35 min |
| 5 | [State & Hooks](#exercise-5--state--hooks) | 40 min |

---

## Exercise 1 – JSX Basics

### Solution

```jsx
// App.jsx
function App() {
  const age = 25;

  return (
    <div className="profile-card">
      <h1>Hello, Alex!</h1>
      <p>My age is: {age}</p>
      <p>Status: {age >= 18 ? 'Adult' : 'Minor'}</p>
    </div>
  );
}

export default App;
```

### Key Concepts

| | Concept | Explanation |
|---|---------|-------------|
| 📝 | **`className` not `class`** | JSX uses `className` because `class` is a reserved keyword in JavaScript. |
| `{}` | **Curly braces = JS** | Anything inside `{}` is evaluated as a JavaScript expression. |
| `?:` | **Ternary in JSX** | Use `condition ? 'a' : 'b'` for inline conditional output. |
| ⬆ | **One root element** | JSX must return exactly one top-level element (div or fragment). |

---

## Exercise 2 – Components & Props

### Solution

```jsx
// ProductCard.jsx
function ProductCard({ name, price, description, children }) {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{description}</p>
      {children && <span className="badge">{children}</span>}
    </div>
  );
}

export default ProductCard;
```

```jsx
// App.jsx
import ProductCard from './ProductCard';

function App() {
  return (
    <div>
      <ProductCard
        name="Laptop"
        price={999.99}
        description="Powerful and lightweight."
      />
      <ProductCard
        name="Headphones"
        price={149.99}
        description="Crystal clear audio."
      >
        New!
      </ProductCard>
      <ProductCard
        name="Mouse"
        price={49.99}
        description="Ergonomic wireless mouse."
      />
    </div>
  );
}

export default App;
```

### Key Concepts

| | Concept | Explanation |
|---|---------|-------------|
| 📦 | **Component File** | Each component lives in its own `.jsx` file for clean organisation. |
| 📨 | **Props Destructuring** | `{ name, price }` in the function signature is cleaner than `props.name`. |
| 👶 | **`props.children`** | Content between opening/closing tags is available as `props.children`. |
| 🔢 | **Data Types** | Strings use quotes; numbers/variables use curly braces: `price={99.99}` |
| ↩ | **Default Export** | Use `export default` so the parent can import with any name. |

---

## Exercise 3 – Events

### Solution

```jsx
// App.jsx
function App() {

  function handleClick() {
    console.log('Button was clicked!');
  }

  function handleChange(e) {
    console.log('Input value:', e.target.value);
  }

  function greetUser(name) {
    alert(`Hello, ${name}!`);
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click Me
      </button>

      <input
        type="text"
        onChange={handleChange}
        placeholder="Type here..."
      />

      {/* Bonus */}
      <button onClick={() => greetUser('Alex')}>
        Greet Alex
      </button>
    </div>
  );
}

export default App;
```

### Key Concepts

| | Concept | Explanation |
|---|---------|-------------|
| 🖱 | **`onClick`** | Pass the function reference, not a call: `onClick={handleClick}` not `onClick={handleClick()}` |
| ⌨ | **`onChange` for inputs** | Every keystroke fires `onChange`. Use `e.target.value` to read the current value. |
| → | **Arrow for arguments** | To pass arguments: `onClick={() => greetUser('Alex')}` |
| 📋 | **Event Object (`e`)** | React events receive a synthetic event object `e` with properties like `e.target`, `e.type`, `e.preventDefault()`. |

---

## Exercise 4 – Conditional Rendering & Lists

### Solution

```jsx
// App.jsx
function App() {
  const fruits = [
    { id: 1, name: 'Apple',  inStock: true  },
    { id: 2, name: 'Banana', inStock: false },
    { id: 3, name: 'Mango',  inStock: true  },
  ];

  // Bonus: filter first
  const available = fruits.filter(f => f.inStock);

  return (
    <div>
      {fruits.length === 0 ? (
        <p>No fruits available</p>
      ) : (
        <ul>
          {fruits.map(fruit => (
            <li key={fruit.id}>
              {fruit.name}
              {fruit.inStock && ' ✅'}
            </li>
          ))}
        </ul>
      )}

      <h3>In Stock Only</h3>
      <ul>
        {available.map(f => (
          <li key={f.id}>{f.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

### Key Concepts

| | Concept | Explanation |
|---|---------|-------------|
| 🗝 | **`key` prop is mandatory** | Missing keys cause React warnings and slow re-renders. |
| `&&` | **Logical AND (`&&`)** | `{isVisible && <p>Text</p>}` — renders only when left side is truthy. |
| `?:` | **Ternary for branches** | `{isEmpty ? <p>Empty</p> : <ul>...</ul>}` — shows one of two outcomes. |
| 🔄 | **`.map()` for lists** | Transform each item into JSX — returns an array of elements. |
| 🔍 | **`.filter()` first** | Chain `.filter().map()` to only render items matching a condition. |

---

## Exercise 5 – State & Hooks

### Solution

```jsx
// App.jsx
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [name,  setName]  = useState('');

  function increment() { setCount(count + 1); }
  function decrement() {
    if (count > 0) setCount(count - 1);
  }
  function reset() { setCount(0); }

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increment}>+  Increment</button>
      <button onClick={decrement}>–  Decrement</button>
      <button onClick={reset}>↺  Reset</button>

      {/* Bonus */}
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter your name"
      />
      {name && <p>Hello, {name}!</p>}
    </div>
  );
}

export default App;
```

### Key Concepts

| | Concept | Explanation |
|---|---------|-------------|
| 🪝 | **Import `useState`** | `import { useState } from 'react';` — must be imported before use. |
| `[]` | **Array Destructuring** | `[value, setter] = useState(initial)` — two items, always. |
| 🚫 | **Never mutate directly** | `count++` or `count = 5` won't trigger a re-render. Use `setCount()`. |
| 🔁 | **Re-render on change** | Calling the setter tells React to re-render the component with the new value. |
| 🧠 | **Multiple states OK** | Call `useState` as many times as needed — each is independent. |

---

## Quick Reference Cheatsheet

```jsx
// JSX Expression
const x = 5;
return <p>{x * 2}</p>;

// className
<div className="card">

// Component + Props
function Card({ title }) {
  return <h2>{title}</h2>;
}

// Event Handler
function App() {
  function handleClick() { ... }
  return <button onClick={handleClick}>Go</button>;
}

// useState
import { useState } from 'react';
const [count, setCount] = useState(0);

// List with map()
items.map(item => (
  <li key={item.id}>{item.name}</li>
))
```

---

## What You Mastered

- ✅ JSX syntax & expressions
- ✅ `className` & styling in JSX
- ✅ Creating functional components
- ✅ Passing & reading props
- ✅ Event handling (`onClick`, `onChange`)
- ✅ Conditional rendering (`&&`, ternary)
- ✅ Rendering lists with `.map()`
- ✅ `useState` Hook for interactive UIs

## Next Steps

| Topic | Description |
|-------|-------------|
| `useEffect` Hook | Fetch data & run side effects |
| React Router | Multi-page navigation |
| Context API | Share state across components |
| API Integration | Fetch real data from REST APIs |
| Tailwind CSS | Rapid styling with utility classes |