# CSS Web Foundations - 3 Hour Workshop Exercise

**Code Value Boot Camp**

---

## Workshop Overview

This hands-on workshop is divided into three 60-minute sessions, each building on the previous one to take you from CSS fundamentals to building a complete website.

### Part 1: CSS Fundamentals & Text Styling (60 minutes)
- Exercise 1.1: CSS Methods & Selectors
- Exercise 1.2: Pseudo-Classes & Variables
- Exercise 1.3: Text Styling & Custom Fonts

### Part 2: Box Model & Layout (60 minutes)
- Exercise 2.1: Box Model & Sizing
- Exercise 2.2: Structural Pseudo-Classes
- Exercise 2.3: Display Properties

### Part 3: Flexbox & Final Project (60 minutes)
- Exercise 3.1: Flexbox Basics
- Exercise 3.2: Advanced Flexbox Layout
- Exercise 3.3: Final Project - Complete Portfolio Website

---

## PART 1: CSS Fundamentals & Text Styling

### Exercise 1.1: CSS Methods & Selectors

**Duration:** 20 minutes

**Objectives:**
- Apply all three CSS methods: inline, embedded, and external
- Use tag, class, and ID selectors correctly
- Understand CSS specificity and the cascade
- Debug conflicting styles

**Tasks:**

1. **Create `index.html`** with the following structure:
    - A heading (`<h1>`)
    - 3 paragraphs with classes: `.intro`, `.main`, `.conclusion`
    - One paragraph with an ID: `#highlight`

2. **Style the heading using inline CSS:**
   ```html
   <h1 style="color: teal; font-size: 36px;">Welcome to CSS</h1>
   ```

3. **Create embedded styles** in `<style>` tags within the `<head>`:
   ```css
   .intro { color: gray; }
   .main { color: darkblue; }
   .conclusion { color: green; }
   ```

4. **Create `styles.css`** and link it in your HTML:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```

   Add these styles to `styles.css`:
   ```css
   p {
     font-family: Arial, sans-serif;
     line-height: 1.6;
   }
   
   #highlight {
     background-color: yellow;
     font-weight: bold;
   }
   ```

**💡 Bonus Challenge:** Try changing the `#highlight` color in all three locations (inline, embedded, and external) and observe which one wins!

---

### Exercise 1.2: Pseudo-Classes & Variables

**Duration:** 20 minutes

**Objectives:**
- Create and use CSS custom properties (variables)
- Apply interactive pseudo-classes (`:hover`, `:active`, `:focus`)
- Build a reusable color system
- Style interactive elements with visual feedback

**Tasks:**

1. **Define CSS variables** in the `:root` selector in your `styles.css`:
   ```css
   :root {
     --primary-color: #028090;
     --secondary-color: #02C39A;
     --text-dark: #333333;
     --spacing: 16px;
   }
   ```

2. **Create 3 buttons** in your HTML with class `.btn`:
   ```html
   <button class="btn">Click Me</button>
   <button class="btn">Learn More</button>
   <button class="btn">Get Started</button>
   ```

   Style them using your variables:
   ```css
   .btn {
     background-color: var(--primary-color);
     color: white;
     padding: 12px 24px;
     border: none;
     border-radius: 4px;
     font-size: 16px;
     cursor: pointer;
   }
   ```

3. **Add `:hover` state** to darken buttons on hover:
   ```css
   .btn:hover {
     filter: brightness(0.85);
   }
   ```

4. **Add `:active` and `:focus` states:**
   ```css
   .btn:active {
     transform: scale(0.98);
   }
   
   .btn:focus {
     outline: 3px solid var(--secondary-color);
     outline-offset: 2px;
   }
   ```

**💡 Bonus:** Create a navigation menu with 5 links, add `:visited` (color: purple) and hover effects!

---

### Exercise 1.3: Text Styling & Custom Fonts

**Duration:** 20 minutes

**Objectives:**
- Import and apply Google Fonts
- Master text styling properties
- Use color formats (hex, RGB, color names)
- Create a typography hierarchy

**Tasks:**

1. **Import Google Fonts.** Visit [fonts.google.com](https://fonts.google.com) and select:
    - **Poppins** (weights: 400, 600, 700)
    - **Open Sans** (weights: 400, 400 italic, 600)

   Add this to the `<head>` of your HTML:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,400&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
   ```

2. **Apply fonts** to your elements:
   ```css
   h1, h2, h3 {
     font-family: 'Poppins', sans-serif;
   }
   
   body {
     font-family: 'Open Sans', sans-serif;
   }
   ```

3. **Create a blog post layout** with proper typography:
   ```html
   <article>
     <h1>The Future of Web Development</h1>
     <h2>Understanding Modern CSS</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
   </article>
   ```

   Style it:
   ```css
   h1 {
     font-size: 40px;
     font-weight: 700;
     letter-spacing: -1px;
     color: var(--text-dark);
   }
   
   h2 {
     font-size: 28px;
     font-weight: 600;
     color: var(--primary-color);
   }
   
   p {
     font-size: 16px;
     line-height: 1.8;
     text-align: justify;
   }
   ```

4. **Add text styling properties:**
   ```css
   h3 {
     text-transform: uppercase;
     letter-spacing: 2px;
   }
   
   .important {
     text-decoration: underline;
     font-weight: 600;
   }
   ```

**💡 Bonus:** Experiment with different color formats:
- Hex: `color: #028090;`
- RGB: `color: rgb(2, 128, 144);`
- Color names: `color: teal;`

---

## PART 2: Box Model & Layout

### Exercise 2.1: Box Model & Sizing

**Duration:** 20 minutes

**Objectives:**
- Understand content, padding, border, and margin
- Work with width, height, and box-sizing
- Create card components
- Debug spacing issues

**Tasks:**

1. **Create 3 card elements** in your HTML:
   ```html
   <div class="card">
     <h3>Card Title 1</h3>
     <p>This is a description of the card content.</p>
   </div>
   <div class="card">
     <h3>Card Title 2</h3>
     <p>This is a description of the card content.</p>
   </div>
   <div class="card">
     <h3>Card Title 3</h3>
     <p>This is a description of the card content.</p>
   </div>
   ```

2. **Set `box-sizing` globally** (this is a best practice):
   ```css
   * {
     box-sizing: border-box;
   }
   ```

3. **Style the `.card` class:**
   ```css
   .card {
     width: 300px;
     padding: 20px;
     margin: 20px;
     border: 2px solid #ddd;
     border-radius: 8px;
     background-color: white;
     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
   }
   ```

4. **Inspect the box model** using browser DevTools:
    - Right-click on a card and select "Inspect"
    - Look at the box model diagram in the Styles panel
    - Observe how padding and border are included in the total width with `box-sizing: border-box`

**💡 Bonus:** Try removing `box-sizing: border-box` and see what happens to your cards! Notice how the width calculation changes.

---

### Exercise 2.2: Structural Pseudo-Classes

**Duration:** 20 minutes

**Objectives:**
- Use `:first-child`, `:last-child`, `:nth-child`
- Apply `:not()` to exclude elements
- Create zebra-striped lists
- Style alternating list items

**Tasks:**

1. **Create an unordered list** with 8 programming languages:
   ```html
   <ul class="languages">
     <li>JavaScript</li>
     <li>Python</li>
     <li>Java</li>
     <li>C++</li>
     <li>Ruby</li>
     <li>Go</li>
     <li>Rust</li>
     <li>TypeScript</li>
   </ul>
   ```

2. **Style the first child:**
   ```css
   .languages li:first-child {
     font-weight: bold;
     color: teal;
     font-size: 18px;
   }
   ```

3. **Create zebra stripes** using `:nth-child`:
   ```css
   .languages li {
     padding: 10px;
     list-style-position: inside;
   }
   
   .languages li:nth-child(even) {
     background-color: #f0f0f0;
   }
   
   .languages li:nth-child(odd) {
     background-color: white;
   }
   ```

4. **Style the last child:**
   ```css
   .languages li:last-child {
     border-bottom: 3px solid teal;
     padding-bottom: 15px;
     font-weight: bold;
   }
   ```

**💡 Bonus:** Use `:not(:last-child)` to add a bottom border to all items except the last one:
```css
.languages li:not(:last-child) {
  border-bottom: 1px solid #ddd;
}
```

---

### Exercise 2.3: Display Properties

**Duration:** 20 minutes

**Objectives:**
- Understand block, inline, and inline-block
- Convert element display types
- Create navigation bars
- Build inline badge components

**Tasks:**

1. **Create a navigation menu:**
   ```html
   <nav class="main-nav">
     <a href="#home">Home</a>
     <a href="#about">About</a>
     <a href="#services">Services</a>
     <a href="#portfolio">Portfolio</a>
     <a href="#contact">Contact</a>
   </nav>
   ```

2. **Style the navigation** using `inline-block`:
   ```css
   .main-nav {
     background-color: #333;
     padding: 0;
   }
   
   .main-nav a {
     display: inline-block;
     padding: 15px 25px;
     color: white;
     text-decoration: none;
     background-color: teal;
     margin-right: 2px;
   }
   
   .main-nav a:hover {
     background-color: #026673;
   }
   ```

3. **Create badge components:**
   ```html
   <p>
     This article is tagged with: 
     <span class="badge">HTML</span>
     <span class="badge">CSS</span>
     <span class="badge">JavaScript</span>
   </p>
   ```

   Style them:
   ```css
   .badge {
     display: inline-block;
     padding: 5px 12px;
     background-color: coral;
     color: white;
     border-radius: 12px;
     font-size: 12px;
     font-weight: 600;
     margin: 2px;
   }
   ```

4. **Experiment with display values:**
    - Try changing `.badge` from `inline-block` to `inline` and observe the difference
    - Notice how padding and margins behave differently

**💡 Bonus:** Create a full-width button using `display: block`:
```css
.btn-block {
  display: block;
  width: 100%;
  padding: 15px;
  text-align: center;
}
```

---

## PART 3: Flexbox & Final Project

### Exercise 3.1: Flexbox Basics

**Duration:** 20 minutes

**Objectives:**
- Enable flexbox with `display: flex`
- Use `flex-direction` (row, column)
- Apply `justify-content` (horizontal alignment)
- Apply `align-items` (vertical alignment)

**Tasks:**

1. **Create a flex container** with 4 colored boxes:
   ```html
   <div class="container">
     <div class="box box-1">Box 1</div>
     <div class="box box-2">Box 2</div>
     <div class="box box-3">Box 3</div>
     <div class="box box-4">Box 4</div>
   </div>
   ```

2. **Enable flexbox** on the container:
   ```css
   .container {
     display: flex;
     height: 300px;
     border: 2px solid black;
     background-color: #f5f5f5;
   }
   
   .box {
     width: 100px;
     height: 100px;
     color: white;
     display: flex;
     justify-content: center;
     align-items: center;
     font-weight: bold;
   }
   
   .box-1 { background-color: #FF6B6B; }
   .box-2 { background-color: #4ECDC4; }
   .box-3 { background-color: #45B7D1; }
   .box-4 { background-color: #FFA07A; }
   ```

3. **Experiment with `justify-content`** (controls horizontal alignment):
   ```css
   /* Try each of these values one at a time */
   .container {
     justify-content: flex-start;    /* default */
     /* justify-content: center; */
     /* justify-content: flex-end; */
     /* justify-content: space-between; */
     /* justify-content: space-around; */
     /* justify-content: space-evenly; */
   }
   ```

4. **Experiment with `align-items`** (controls vertical alignment):
   ```css
   /* Try each of these values one at a time */
   .container {
     align-items: stretch;    /* default */
     /* align-items: flex-start; */
     /* align-items: center; */
     /* align-items: flex-end; */
   }
   ```

**💡 Bonus:** Try `flex-direction: column` and see how `justify-content` and `align-items` swap their behavior! What was horizontal becomes vertical and vice versa.

---

### Exercise 3.2: Advanced Flexbox Layout

**Duration:** 20 minutes

**Objectives:**
- Build a responsive header layout
- Create a card grid using flexbox
- Combine flexbox properties effectively
- Use gap property for spacing

**Tasks:**

1. **Create a header** with logo and navigation:
   ```html
   <header class="site-header">
     <h1 class="logo">MyBrand</h1>
     <nav class="header-nav">
       <a href="#home">Home</a>
       <a href="#about">About</a>
       <a href="#services">Services</a>
       <a href="#contact">Contact</a>
     </nav>
   </header>
   ```

   Style it:
   ```css
   .site-header {
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 20px 40px;
     background-color: #1a1a1a;
     color: white;
   }
   
   .logo {
     margin: 0;
     font-size: 28px;
     color: var(--primary-color);
   }
   
   .header-nav {
     display: flex;
     gap: 20px;
   }
   
   .header-nav a {
     color: white;
     text-decoration: none;
     padding: 8px 16px;
   }
   
   .header-nav a:hover {
     color: var(--secondary-color);
   }
   ```

2. **Create a card grid:**
   ```html
   <section class="card-grid">
     <div class="card">
       <img src="https://via.placeholder.com/250x150" alt="Project 1">
       <h3>Project One</h3>
       <p>A brief description of this amazing project.</p>
     </div>
     <div class="card">
       <img src="https://via.placeholder.com/250x150" alt="Project 2">
       <h3>Project Two</h3>
       <p>A brief description of this amazing project.</p>
     </div>
     <div class="card">
       <img src="https://via.placeholder.com/250x150" alt="Project 3">
       <h3>Project Three</h3>
       <p>A brief description of this amazing project.</p>
     </div>
     <div class="card">
       <img src="https://via.placeholder.com/250x150" alt="Project 4">
       <h3>Project Four</h3>
       <p>A brief description of this amazing project.</p>
     </div>
     <div class="card">
       <img src="https://via.placeholder.com/250x150" alt="Project 5">
       <h3>Project Five</h3>
       <p>A brief description of this amazing project.</p>
     </div>
     <div class="card">
       <img src="https://via.placeholder.com/250x150" alt="Project 6">
       <h3>Project Six</h3>
       <p>A brief description of this amazing project.</p>
     </div>
   </section>
   ```

3. **Style the card grid:**
   ```css
   .card-grid {
     display: flex;
     flex-wrap: wrap;
     gap: 20px;
     justify-content: center;
     padding: 40px;
   }
   
   .card {
     width: 250px;
     padding: 15px;
     border: 1px solid #ddd;
     border-radius: 8px;
     background-color: white;
     transition: transform 0.3s ease;
   }
   
   .card:hover {
     transform: translateY(-5px);
     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
   }
   
   .card img {
     width: 100%;
     border-radius: 4px;
   }
   
   .card h3 {
     margin: 12px 0 8px 0;
   }
   
   .card p {
     color: #666;
     font-size: 14px;
     line-height: 1.5;
   }
   ```

**💡 Bonus:** Add `flex-grow: 1` to the navigation links to make them fill available space evenly:
```css
.header-nav a {
  flex-grow: 1;
  text-align: center;
}
```

---

### Exercise 3.3: Final Project - Portfolio Page

**Duration:** 20 minutes

**Objective:** Build a complete portfolio website using all the CSS concepts you've learned!

#### Required Sections

Your portfolio must include these 5 sections:

1. **Header**
    - Logo/name on the left
    - Navigation menu on the right (Home, About, Projects, Contact)
    - Use flexbox with `justify-content: space-between`

2. **Hero Section**
    - Large heading with your name or site title
    - Subheading/tagline
    - Call-to-action button
    - Center everything using flexbox

3. **About Section**
    - Two-column layout (text on left, image/photo on right)
    - Use flexbox with gap property

4. **Projects Section**
    - Grid of 3 project cards
    - Each card should have an image, title, and description
    - Use flexbox with `flex-wrap`

5. **Footer**
    - Copyright text centered
    - Social media links (optional)

#### Required CSS Techniques

Your portfolio must demonstrate:

✓ **CSS Variables** - Define at least 3 colors in `:root`
✓ **Google Fonts** - Use at least 2 different fonts
✓ **Flexbox Layouts** - For header, hero, about, and project sections
✓ **Hover Effects** - On buttons, cards, and navigation links
✓ **Box Model** - Proper use of padding, margin, and border
✓ **Pseudo-Classes** - At least one structural pseudo-class (`:nth-child`, `:first-child`, etc.)

#### Design Requirements

- **Color Scheme:** Choose a cohesive 3-color palette (use your CSS variables!)
- **Spacing:** Consistent spacing between sections (60-80px recommended)
- **Interactive Elements:** All buttons and links must have hover states
- **Typography:** Clear hierarchy with varied font sizes and weights
- **Professional Look:** Clean, modern design that looks intentional

#### Starter HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
  <link rel="stylesheet" href="styles.css">
  <!-- Add your Google Fonts here -->
</head>
<body>
  <!-- Header -->
  <header class="site-header">
    <!-- Logo and navigation -->
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <!-- Main heading, subheading, CTA button -->
  </section>

  <!-- About Section -->
  <section class="about">
    <!-- Two-column layout -->
  </section>

  <!-- Projects Section -->
  <section class="projects">
    <!-- Card grid -->
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <!-- Copyright and links -->
  </footer>
</body>
</html>
```

#### Starter CSS Structure

```css
/* CSS Variables */
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --accent-color: #your-color;
  --text-dark: #333;
  --text-light: #666;
  --bg-light: #f5f5f5;
}

/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Your Font', sans-serif;
  line-height: 1.6;
  color: var(--text-dark);
}

/* Header */
.site-header {
  /* Add your styles */
}

/* Hero Section */
.hero {
  /* Add your styles */
}

/* About Section */
.about {
  /* Add your styles */
}

/* Projects Section */
.projects {
  /* Add your styles */
}

/* Footer */
.site-footer {
  /* Add your styles */
}
```

**💡 Be creative!** Add your personal touch to make it uniquely yours. Consider adding:
- Smooth scroll behavior
- Transitions and animations
- Custom background patterns
- Icon fonts or SVG icons

---

## Final Project Evaluation Rubric

### HTML Structure (20 points)
- ✓ Semantic HTML5 elements used appropriately (5 pts)
- ✓ All 5 sections present and properly structured (10 pts)
- ✓ Clean, well-indented code (5 pts)

### CSS Fundamentals (30 points)
- ✓ CSS variables defined and used throughout (10 pts)
- ✓ External stylesheet properly linked (5 pts)
- ✓ Selectors used correctly (tag, class, ID) (10 pts)
- ✓ Proper use of box model properties (5 pts)

### Layout & Flexbox (30 points)
- ✓ Flexbox used for header navigation (10 pts)
- ✓ Hero section properly centered (5 pts)
- ✓ Project cards in responsive grid layout (10 pts)
- ✓ Proper spacing and alignment throughout (5 pts)

### Design & Polish (20 points)
- ✓ Cohesive color scheme (5 pts)
- ✓ Google Fonts properly implemented (5 pts)
- ✓ Interactive hover effects (5 pts)
- ✓ Professional, polished appearance (5 pts)

**TOTAL: 100 points**

---

## Resources & Tips for Success

### Essential Resources

📚 **MDN Web Docs**
- Comprehensive CSS documentation
- [developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

🎨 **Google Fonts**
- Free, high-quality fonts for web
- [fonts.google.com](https://fonts.google.com)

🎮 **CSS Flexbox Froggy**
- Fun game to learn Flexbox
- [flexboxfroggy.com](https://flexboxfroggy.com)

🎯 **CSS Grid Garden**
- Interactive game for CSS Grid
- [cssgridgarden.com](https://cssgridgarden.com)

🛠️ **Can I Use**
- Check CSS browser compatibility
- [caniuse.com](https://caniuse.com)

### Pro Tips

✓ **Use Browser DevTools (F12)** to inspect and debug your CSS in real-time

✓ **Start mobile-first**, then scale up for larger screens

✓ **Keep CSS organized** by grouping related styles together

✓ **Comment your code** to explain complex sections

✓ **Test in multiple browsers** (Chrome, Firefox, Safari, Edge)

✓ **Use consistent spacing** - choose a scale (8px, 16px, 24px, 32px) and stick to it

✓ **Don't be afraid to experiment!** The best learning happens through trial and error

### Common Mistakes to Avoid

❌ **Forgetting to link external CSS file** - Always check your `<head>` section!

❌ **Misspelling class or ID names** - They're case-sensitive and must match exactly

❌ **Not using `box-sizing: border-box`** - Add it to the universal selector (`*`)

❌ **Excessive use of IDs for styling** - Prefer classes for better reusability

❌ **Not testing hover states** - Always check that your interactive elements work

❌ **Inconsistent spacing** - Pick a spacing system and use it throughout

❌ **Forgetting about specificity** - More specific selectors override less specific ones

❌ **Using `!important` unnecessarily** - This should be a last resort

### Debugging Checklist

When something doesn't work:

1. **Check the browser console** for errors
2. **Inspect the element** using DevTools
3. **Verify your selector** is targeting the right element
4. **Check specificity** - is another rule overriding yours?
5. **Look for typos** in property names and values
6. **Validate your CSS** using the W3C CSS Validator
7. **Check if the styles are being applied** in the DevTools Styles panel

---

## What's Next?

After completing this workshop, you're ready to:

🚀 **Build more complex layouts** with CSS Grid

🚀 **Add responsive design** with media queries

🚀 **Learn CSS animations** and transitions

🚀 **Explore CSS preprocessors** like Sass

🚀 **Study modern CSS features** like custom properties, container queries

🚀 **Practice, practice, practice!** Build real projects to solidify your skills

---

## Congratulations! 🎉

You've completed the CSS Web Foundations workshop. You now have the skills to:
- Write CSS using three different methods
- Style text and apply custom fonts
- Master the box model
- Use pseudo-classes for interactivity
- Create layouts with Flexbox
- Build complete, professional web pages

**Remember:** The best way to learn CSS is by building real projects. Keep practicing and experimenting!

**Questions?** Ask your instructor or refer to the resources listed above.

**Good luck with your coding journey!** 💻✨