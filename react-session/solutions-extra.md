# Web Foundations – React
## Extra Exercises – Solutions

> ⚠️ **Try the exercises first before reading this file!**

---

## Table of Contents

| # | Topic | Exercise |
|---|-------|----------|
| 1.2 | JSX Basics | [User Profile Card](#exercise-12--user-profile-card) |
| 1.3 | JSX Basics | [Mini Recipe Card](#exercise-13--mini-recipe-card) |
| 1.4 | JSX Basics | [Dynamic Inline Styles](#exercise-14--dynamic-inline-styles) |
| 2.2 | Components & Props | [User Badge Component](#exercise-22--user-badge-component) |
| 2.3 | Components & Props | [Alert Box Component](#exercise-23--alert-box-component) |
| 2.4 | Components & Props | [Nested Components — Blog Post](#exercise-24--nested-components--blog-post) |
| 3.2 | Events | [Like Button](#exercise-32--like-button) |
| 3.3 | Events | [Live Character Counter](#exercise-33--live-character-counter) |
| 3.4 | Events | [Simple Form with Validation](#exercise-34--simple-form-with-validation) |

---

# JSX Basics – Solutions

---

## Exercise 1.2 – User Profile Card

```jsx
// App.jsx
function App() {
  const firstName = 'Alex';
  const lastName = 'Cohen';
  const age = 28;
  const city = 'Tel Aviv';
  const isOnline = true;

  return (
    <div className="profile-card">
      <h2>{`${firstName} ${lastName}`}</h2>
      <p>Age: {age} · City: {city}</p>
      <p>{isOnline ? '🟢 Online' : '🔴 Offline'}</p>
      <small>Last updated: February 2026</small>
    </div>
  );
}

export default App;
```

### Key Concepts

| | Concept | Explanation |
|---|---------|-------------|
| `` ` ` `` | **Template literals** | `` {`${firstName} ${lastName}`} `` combines strings cleanly inside JSX. |
| `?:` | **Ternary for booleans** | `isOnline ? 'Online' : 'Offline'` picks between two display values. |
| `{}` | **Any JS expression** | Variables, arithmetic, method calls — all valid inside `{}`. |

---

## Exercise 1.3 – Mini Recipe Card

```jsx
// App.jsx
function App() {
  const recipe = {
    name: 'Pancakes',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    ingredients: ['1 cup flour', '2 eggs', '1 cup milk', '1 tbsp butter'],
  };

  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <div className="recipe-card">
      <h1>{recipe.name}</h1>
      <p>Prep: {recipe.prepTime} min · Cook: {recipe.cookTime} min · Serves: {recipe.servings}</p>
      <p>Total time: {totalTime} min</p>

      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      {/* Bonus */}
      <p>{totalTime < 30 ? 'Quick recipe!' : 'Takes some time.'}</p>
    </div>
  );
}

export default App;
```

### Key Concepts

| | Concept | Explanation |
|---|---------|-------------|
| `.` | **Object dot notation** | Access object properties with `recipe.name`, `recipe.prepTime`, etc. |
| `+` | **JS before return** | Calculate `totalTime` before the `return` so the JSX stays clean. |
| `index` | **Index as key** | Acceptable for static lists that never reorder. Use a unique `id` otherwise. |

---

## Exercise 1.4 – Dynamic Inline Styles

```jsx
// App.jsx
function App() {
  const theme = 'dark';
  const headingSize = 32;
  const isWarning = true;

  const cardStyle = {
    backgroundColor: theme === 'dark' ? '#1e1e1e' : '#ffffff',
    color: theme === 'dark' ? '#ffffff' : '#111111',
    padding: '20px',
    borderRadius: '8px',
  };

  return (
    <div>
      <div style={cardStyle}>
        <h1 style={{ fontSize: headingSize }}>Welcome</h1>
        <p>This card uses a dynamic theme.</p>
      </div>

      {/* Bonus */}
      <p style={{ color: isWarning ? 'red' : 'green' }}>
        {isWarning ? '⚠️ Warning message' : '✅ All good'}
      </p>
    </div>
  );
}

export default App;
```

### Key Concepts

| | Concept | Explanation |
|---|---------|-------------|
| `style={obj}` | **Style as an object** | JSX `style` takes a JS object — not a CSS string. |
| camelCase | **CSS property names** | `background-color` → `backgroundColor`, `font-size` → `fontSize`. |
| `{{ }}` | **Double curly braces** | Outer `{}` = JSX expression, inner `{}` = the object literal. |
| ternary | **Computed style values** | You can use any JS expression as a style value: `color: isWarning ? 'red' : 'green'` |

---

# Components & Props – Solutions

---

## Exercise 2.2 – User Badge Component

```jsx
// UserBadge.jsx
function UserBadge({ username, role, avatarUrl, isAdmin }) {
  return (
    <div className="user-badge">
      <img src={avatarUrl} alt={username} width={80} />
      <strong>
        @{username} {isAdmin && '👑'}
      </strong>
      <span>{role}</span>
    </div>
  );
}

export default UserBadge;
```

```jsx
// App.jsx
import UserBadge from './UserBadge';

function App() {
  return (
    <div>
      <UserBadge
        username="alex_dev"
        role="Developer"
        avatarUrl="https://i.pravatar.cc/80?img=1"
        isAdmin
      />
      <UserBadge
        username="sara_design"
        role="Designer"
        avatarUrl="https://i.pravatar.cc/80?img=2"
      />
      <UserBadge
        username="tom_pm"
        role="Product Manager"
        avatarUrl="https://i.pravatar.cc/80?img=3"
      />
    </div>
  );
}

export default App;
```

### Key Concepts

| | Concept | Explanation |
|---|---------|-------------|
| `isAdmin` | **Boolean prop shorthand** | Writing `<UserBadge isAdmin />` is the same as `isAdmin={true}`. |
| `&&` | **Optional rendering** | `{isAdmin && '👑'}` renders the emoji only when `isAdmin` is truthy. |
| `alt` | **Accessibility** | Always provide a meaningful `alt` attribute on `<img>` tags. |

---

## Exercise 2.3 – Alert Box Component

```jsx
// AlertBox.jsx
function AlertBox({ type, message, title }) {
  let emoji;
  if (type === 'success') emoji = '✅';
  else if (type === 'warning') emoji = '⚠️';
  else if (type === 'error') emoji = '❌';
  else emoji = 'ℹ️';

  return (
    <div className="alert">
      {title && <strong>{title}</strong>}
      <p>{emoji} {message}</p>
    </div>
  );
}

export default AlertBox;
```

```jsx
// App.jsx
import AlertBox from './AlertBox';

function App() {
  return (
    <div>
      <AlertBox
        type="success"
        title="Done!"
        message="Your profile has been saved."
      />
      <AlertBox
        type="warning"
        message="Your session will expire in 5 minutes."
      />
      <AlertBox
        type="error"
        title="Error"
        message="Failed to load data. Please try again."
      />
    </div>
  );
}

export default App;
```

### Key Concepts

| | Concept | Explanation |
|---|---------|-------------|
| `let` | **Variable before return** | Compute complex logic before the JSX `return` to keep markup clean. |
| `if/else` | **Multi-branch logic** | A chain of `if/else if` is clearer than nested ternaries for 3+ cases. |
| optional prop | **`title` is optional** | `{title && <strong>{title}</strong>}` renders nothing if `title` is not passed. |

---

## Exercise 2.4 – Nested Components — Blog Post

```jsx
// Avatar.jsx
function Avatar({ name, imageUrl }) {
  return (
    <span>
      <img src={imageUrl} alt={name} width={40} />
      <span>{name}</span>
    </span>
  );
}

export default Avatar;
```

```jsx
// Author.jsx
import Avatar from './Avatar';

function Author({ name, imageUrl, date }) {
  return (
    <div className="author">
      <Avatar name={name} imageUrl={imageUrl} />
      <small>{date}</small>
    </div>
  );
}

export default Author;
```

```jsx
// BlogPost.jsx
import Author from './Author';

function BlogPost({ title, body, authorName, authorImage, publishedDate, tags }) {
  return (
    <article>
      <h2>{title}</h2>
      <Author
        name={authorName}
        imageUrl={authorImage}
        date={publishedDate}
      />
      <p>{body}</p>

      {/* Bonus */}
      {tags && (
        <div>
          {tags.map(tag => (
            <span key={tag}>#{tag} </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default BlogPost;
```

```jsx
// App.jsx
import BlogPost from './BlogPost';

function App() {
  return (
    <div>
      <BlogPost
        title="Getting Started with React"
        body="React is a powerful library for building user interfaces..."
        authorName="Alex Cohen"
        authorImage="https://i.pravatar.cc/80?img=1"
        publishedDate="February 16, 2026"
        tags={['React', 'JSX', 'Beginner']}
      />
      <BlogPost
        title="Understanding Props"
        body="Props allow you to pass data between components..."
        authorName="Sara Levi"
        authorImage="https://i.pravatar.cc/80?img=2"
        publishedDate="February 14, 2026"
        tags={['React', 'Props']}
      />
    </div>
  );
}

export default App;
```

### Key Concepts

| | Concept | Explanation |
|---|---------|-------------|
| 🧱 | **Composition** | Small, focused components (`Avatar`, `Author`) are combined into larger ones (`BlogPost`). |
| ↓ | **Prop drilling** | Each layer must explicitly pass props down. `BlogPost` → `Author` → `Avatar`. |
| `key={tag}` | **Using content as key** | When items are unique strings, the value itself makes a reliable key. |
| optional `tags` | **Defensive rendering** | `{tags && ...}` prevents a crash if the `tags` prop is not passed. |

---

# Events – Solutions

---

## Exercise 3.2 – Like Button

```jsx
// App.jsx
import { useState } from 'react';

function App() {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleReset() {
    setLikes(0);
  }

  return (
    <div>
      <button onClick={handleLike}>
        {likes > 0 ? '❤️ Liked' : '🤍 Like'}
      </button>
      <span>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>

      {/* Bonus */}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
```

### Key Concepts

| | Concept | Explanation |
|---|---------|-------------|
| `useState` | **State for UI updates** | Every time `setLikes` is called, React re-renders and shows the new count. |
| ternary in JSX | **Dynamic button label** | `{likes > 0 ? '❤️ Liked' : '🤍 Like'}` switches the label based on state. |
| plural | **Derived display logic** | `{likes === 1 ? 'Like' : 'Likes'}` handles singular vs plural gracefully. |

---

## Exercise 3.3 – Live Character Counter

```jsx
// App.jsx
import { useState } from 'react';

const MAX_CHARS = 200;

function App() {
  const [text, setText] = useState('');

  function handleChange(e) {
    if (e.target.value.length <= MAX_CHARS) {
      setText(e.target.value);
    }
  }

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="What's on your mind?"
        rows={4}
        cols={40}
      />
      <p style={{ color: text.length > 180 ? 'red' : 'black' }}>
        Characters: {text.length} / {MAX_CHARS}
      </p>

      {/* Bonus */}
      <button disabled={text.length === 0}>Post</button>
    </div>
  );
}

export default App;
```

### Key Concepts

| | Concept | Explanation |
|---|---------|-------------|
| `value={text}` | **Controlled input** | Setting `value` from state makes React the source of truth for the input. |
| length check | **Prevent overflow** | Check `e.target.value.length` before calling `setText` to enforce the limit. |
| `disabled` | **Disable a button** | `<button disabled={condition}>` greys out the button when `condition` is true. |
| inline style | **Dynamic colour** | `style={{ color: text.length > 180 ? 'red' : 'black' }}` reacts to live input. |

---

## Exercise 3.4 – Simple Form with Validation

```jsx
// App.jsx
import { useState } from 'react';

function App() {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]     = useState('');  // Bonus

  function handleSubmit() {
    // Validation
    if (name.trim() === '') {
      setError('Name is required.');
      return;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    // Success
    console.log('Form submitted successfully!');
    console.log({ name, email, password });

    setError('');
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      <h2>Register</h2>

      <input
        type="text"
        placeholder="Full name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password (min 6 characters)"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>Register</button>

      {/* Bonus: inline error message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
```

### Key Concepts

| | Concept | Explanation |
|---|---------|-------------|
| `return` | **Early return on error** | Calling `return` inside `handleSubmit` stops execution after the first failed check. |
| `.trim()` | **Ignore whitespace** | `name.trim() === ''` catches inputs that are only spaces. |
| `.includes('@')` | **Simple email check** | A lightweight check — not a full validator, but good for beginners. |
| reset fields | **Clear after submit** | Call each setter with `''` to clear the form on successful submission. |
| `error` state | **Inline error display** | `{error && <p>...</p>}` shows the message only when it's non-empty. |