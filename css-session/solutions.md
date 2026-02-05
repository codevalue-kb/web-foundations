# CSS Web Foundations - Workshop Solutions

**Code Value Boot Camp**

This document contains complete solutions for all exercises in the 3-hour CSS workshop.

---

## Table of Contents

- [Part 1: CSS Fundamentals & Text Styling](#part-1-css-fundamentals--text-styling)
    - [Exercise 1.1: CSS Methods & Selectors](#exercise-11-css-methods--selectors)
    - [Exercise 1.2: Pseudo-Classes & Variables](#exercise-12-pseudo-classes--variables)
    - [Exercise 1.3: Text Styling & Custom Fonts](#exercise-13-text-styling--custom-fonts)
- [Part 2: Box Model & Layout](#part-2-box-model--layout)
    - [Exercise 2.1: Box Model & Sizing](#exercise-21-box-model--sizing)
    - [Exercise 2.2: Structural Pseudo-Classes](#exercise-22-structural-pseudo-classes)
    - [Exercise 2.3: Display Properties](#exercise-23-display-properties)
- [Part 3: Flexbox & Final Project](#part-3-flexbox--final-project)
    - [Exercise 3.1: Flexbox Basics](#exercise-31-flexbox-basics)
    - [Exercise 3.2: Advanced Flexbox Layout](#exercise-32-advanced-flexbox-layout)
    - [Exercise 3.3: Final Project - Portfolio Page](#exercise-33-final-project---portfolio-page)

---

## PART 1: CSS Fundamentals & Text Styling

### Exercise 1.1: CSS Methods & Selectors

#### Solution: `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercise 1.1 - CSS Methods & Selectors</title>
  <link rel="stylesheet" href="styles.css">
  
  <!-- Embedded Styles -->
  <style>
    .intro {
      color: gray;
      font-size: 18px;
    }
    
    .main {
      color: darkblue;
      font-size: 16px;
    }
    
    .conclusion {
      color: green;
      font-style: italic;
    }
  </style>
</head>
<body>
  <!-- Inline Style on Heading -->
  <h1 style="color: teal; font-size: 36px;">Welcome to CSS Workshop</h1>
  
  <p class="intro">
    This is the introduction paragraph. It uses the .intro class with embedded CSS.
  </p>
  
  <p class="main">
    This is the main content paragraph. It uses the .main class with embedded CSS.
    This paragraph contains the core information about CSS methods.
  </p>
  
  <p class="conclusion">
    This is the conclusion paragraph. It uses the .conclusion class with embedded CSS.
  </p>
  
  <p id="highlight">
    This paragraph has a unique ID and is styled from the external stylesheet.
    Notice how it stands out from the others!
  </p>
</body>
</html>
```

#### Solution: `styles.css`

```css
/* External Stylesheet */

/* Tag Selector - applies to all <p> elements */
p {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin-bottom: 15px;
}

/* ID Selector - applies to the element with id="highlight" */
#highlight {
  background-color: yellow;
  font-weight: bold;
  padding: 15px;
  border-left: 4px solid orange;
}
```

#### Bonus Solution: CSS Specificity Test

To test specificity, add the same property in all three places:

```html
<!-- Inline (most specific) -->
<p id="highlight" style="background-color: lightblue;">...</p>
```

```css
/* Embedded */
#highlight {
  background-color: lightgreen;
}
```

```css
/* External */
#highlight {
  background-color: yellow;
}
```

**Result:** The inline style wins! Specificity order: Inline > ID > Class > Tag

---

### Exercise 1.2: Pseudo-Classes & Variables

#### Solution: `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercise 1.2 - Pseudo-Classes & Variables</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Interactive Buttons & Navigation</h1>
  
  <section class="button-section">
    <h2>Styled Buttons</h2>
    <button class="btn">Click Me</button>
    <button class="btn">Learn More</button>
    <button class="btn">Get Started</button>
  </section>
  
  <section class="nav-section">
    <h2>Navigation Menu</h2>
    <nav class="main-navigation">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </nav>
  </section>
</body>
</html>
```

#### Solution: `styles.css`

```css
/* CSS Variables in :root */
:root {
  --primary-color: #028090;
  --secondary-color: #02C39A;
  --text-dark: #333333;
  --text-light: #666666;
  --spacing: 16px;
  --border-radius: 4px;
}

/* Global Styles */
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
}

h1 {
  color: var(--text-dark);
  margin-bottom: 30px;
}

h2 {
  color: var(--primary-color);
  margin-bottom: var(--spacing);
}

.button-section,
.nav-section {
  background: white;
  padding: 30px;
  margin-bottom: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Button Styles with Pseudo-Classes */
.btn {
  background-color: var(--primary-color);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: var(--border-radius);
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.3s ease;
}

/* Hover State */
.btn:hover {
  filter: brightness(0.85);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(2, 128, 144, 0.3);
}

/* Active State (when clicking) */
.btn:active {
  transform: scale(0.98);
  box-shadow: 0 2px 4px rgba(2, 128, 144, 0.3);
}

/* Focus State (keyboard navigation) */
.btn:focus {
  outline: 3px solid var(--secondary-color);
  outline-offset: 2px;
}

/* Navigation Styles */
.main-navigation {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.main-navigation a {
  color: var(--primary-color);
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
}

/* Link Hover State */
.main-navigation a:hover {
  background-color: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

/* Link Active State */
.main-navigation a:active {
  transform: scale(0.95);
}

/* Link Visited State */
.main-navigation a:visited {
  color: purple;
  border-color: purple;
}

.main-navigation a:visited:hover {
  background-color: purple;
  color: white;
}

/* Focus State for Accessibility */
.main-navigation a:focus {
  outline: 3px solid var(--secondary-color);
  outline-offset: 2px;
}
```

#### Bonus Solution: Enhanced Navigation

```css
/* Additional hover effect for navigation */
.main-navigation a {
  position: relative;
  overflow: hidden;
}

.main-navigation a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: var(--secondary-color);
  transition: width 0.3s ease;
}

.main-navigation a:hover::before {
  width: 100%;
}
```

---

### Exercise 1.3: Text Styling & Custom Fonts

#### Solution: `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercise 1.3 - Text Styling & Custom Fonts</title>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,400&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <article class="blog-post">
    <header>
      <h1>The Future of Web Development</h1>
      <p class="subtitle">Exploring modern CSS techniques in 2025</p>
    </header>
    
    <section>
      <h2>Understanding Modern CSS</h2>
      <p>
        CSS has evolved dramatically over the past few years. From the introduction of 
        Flexbox and Grid layouts to custom properties (CSS variables), the language has 
        become incredibly powerful. Modern CSS allows developers to create responsive, 
        beautiful designs with less code than ever before.
      </p>
      
      <h3>Key Features of Modern CSS</h3>
      <p>
        <span class="important">CSS Variables</span> provide a way to store values that 
        can be reused throughout your stylesheet. This makes maintaining consistent 
        colors, spacing, and other design tokens much easier. Combined with 
        <span class="important">Flexbox</span> and <span class="important">Grid</span>, 
        you can create complex layouts that adapt seamlessly to different screen sizes.
      </p>
      
      <blockquote>
        "CSS is not just about making things look pretty; it's about creating 
        experiences that work for everyone."
      </blockquote>
      
      <h2>Practical Applications</h2>
      <p class="justified">
        In real-world projects, these CSS techniques come together to solve common 
        challenges. Whether you're building a responsive navigation menu, creating a 
        card-based layout, or designing a complex dashboard, modern CSS provides the 
        tools you need. The key is understanding when to use each technique and how 
        they complement each other. With practice, you'll develop an intuition for 
        choosing the right approach for each situation.
      </p>
    </section>
    
    <footer class="post-footer">
      <p>Published on <time datetime="2025-02-05">February 5, 2025</time></p>
      <p class="tags">
        Tags: <span class="tag">CSS</span> <span class="tag">Web Development</span> 
        <span class="tag">Design</span>
      </p>
    </footer>
  </article>
</body>
</html>
```

#### Solution: `styles.css`

```css
/* Font Families Applied */
body {
  font-family: 'Open Sans', sans-serif;
  line-height: 1.8;
  color: #333;
  background-color: #f9f9f9;
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
}

h1, h2, h3 {
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
}

/* Typography Hierarchy */
h1 {
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -1px;
  color: #1a1a1a;
  line-height: 1.2;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 18px;
  color: #666;
  font-style: italic;
  margin-bottom: 40px;
}

h2 {
  font-size: 28px;
  font-weight: 600;
  color: #028090;
  margin-top: 40px;
  border-bottom: 2px solid #02C39A;
  padding-bottom: 10px;
}

h3 {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 30px;
}

/* Paragraph Styles */
p {
  font-size: 16px;
  margin-bottom: 20px;
}

.justified {
  text-align: justify;
}

/* Important Text */
.important {
  text-decoration: underline;
  text-decoration-color: #02C39A;
  text-decoration-thickness: 2px;
  font-weight: 600;
  color: #028090;
}

/* Blockquote */
blockquote {
  font-size: 20px;
  font-style: italic;
  color: #555;
  border-left: 4px solid #02C39A;
  padding-left: 20px;
  margin: 30px 0;
  background-color: #f0f8f9;
  padding: 20px;
  border-radius: 4px;
}

/* Article Container */
.blog-post {
  background-color: white;
  padding: 50px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Footer */
.post-footer {
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
  font-size: 14px;
  color: #666;
}

.post-footer time {
  font-weight: 600;
  color: #028090;
}

/* Tags */
.tags {
  margin-top: 10px;
}

.tag {
  display: inline-block;
  background-color: #028090;
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  margin-right: 8px;
  font-weight: 600;
}
```

#### Bonus Solution: Color Format Examples

```css
/* Demonstrating different color formats */

/* Hex Format */
.hex-example {
  color: #028090;              /* Teal */
  background-color: #02C39A;   /* Mint */
}

/* RGB Format */
.rgb-example {
  color: rgb(2, 128, 144);           /* Teal */
  background-color: rgb(2, 195, 154); /* Mint */
}

/* RGBA Format (with transparency) */
.rgba-example {
  background-color: rgba(2, 128, 144, 0.5); /* Semi-transparent teal */
}

/* Color Names */
.named-example {
  color: teal;
  background-color: coral;
}

/* HSL Format (Hue, Saturation, Lightness) */
.hsl-example {
  color: hsl(187, 97%, 29%);         /* Teal */
  background-color: hsl(163, 97%, 39%); /* Mint */
}
```

---

## PART 2: Box Model & Layout

### Exercise 2.1: Box Model & Sizing

#### Solution: `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercise 2.1 - Box Model & Sizing</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Understanding the CSS Box Model</h1>
  
  <div class="card-container">
    <div class="card">
      <h3>Card Title 1</h3>
      <p>This is a description of the card content. The box model controls how this card's size is calculated.</p>
      <button class="card-btn">Learn More</button>
    </div>
    
    <div class="card">
      <h3>Card Title 2</h3>
      <p>Notice how padding adds space inside the card, while margin adds space between cards.</p>
      <button class="card-btn">Learn More</button>
    </div>
    
    <div class="card">
      <h3>Card Title 3</h3>
      <p>The border creates a visible boundary, and box-sizing determines how width is calculated.</p>
      <button class="card-btn">Learn More</button>
    </div>
  </div>
  
  <div class="info-box">
    <h3>💡 Box Model Breakdown</h3>
    <p><strong>Content:</strong> The actual text and elements</p>
    <p><strong>Padding:</strong> Space between content and border (20px)</p>
    <p><strong>Border:</strong> The card's outline (2px)</p>
    <p><strong>Margin:</strong> Space between cards (20px)</p>
  </div>
</body>
</html>
```

#### Solution: `styles.css`

```css
/* Global Box Sizing */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  padding: 40px 20px;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 40px;
  font-size: 32px;
}

/* Card Container */
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
}

/* Card Styling - Box Model in Action */
.card {
  /* Content Area */
  width: 300px;
  
  /* Padding - space inside the border */
  padding: 20px;
  
  /* Border - surrounds the padding */
  border: 2px solid #ddd;
  border-radius: 8px;
  
  /* Margin - space outside the border */
  margin: 20px;
  
  /* Visual Styling */
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* Hover Effect */
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-color: #028090;
}

/* Card Content */
.card h3 {
  color: #028090;
  margin-bottom: 15px;
  font-size: 22px;
}

.card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

/* Card Button */
.card-btn {
  background-color: #028090;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.card-btn:hover {
  background-color: #026673;
}

/* Info Box */
.info-box {
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff3cd;
  border: 2px solid #ffc107;
  border-radius: 8px;
  padding: 25px;
}

.info-box h3 {
  color: #856404;
  margin-bottom: 15px;
}

.info-box p {
  color: #856404;
  margin-bottom: 10px;
  line-height: 1.6;
}

.info-box strong {
  color: #533f03;
}
```

#### Bonus Solution: Demonstrating box-sizing Difference

```css
/* Demo: With box-sizing: border-box */
.card-with-border-box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 2px solid #ddd;
  /* Total width = 300px (includes padding and border) */
}

/* Demo: Without box-sizing (content-box is default) */
.card-without-border-box {
  box-sizing: content-box;
  width: 300px;
  padding: 20px;
  border: 2px solid #ddd;
  /* Total width = 300px + 40px (padding) + 4px (border) = 344px */
}
```

---

### Exercise 2.2: Structural Pseudo-Classes

#### Solution: `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercise 2.2 - Structural Pseudo-Classes</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Popular Programming Languages</h1>
    
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
    
    <h2>Web Technologies</h2>
    
    <ul class="technologies">
      <li>HTML5</li>
      <li>CSS3</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Vue.js</li>
      <li>Node.js</li>
    </ul>
  </div>
</body>
</html>
```

#### Solution: `styles.css`

```css
/* Global Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 20px;
  min-height: 100vh;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

h1 {
  color: #333;
  margin-bottom: 30px;
  text-align: center;
  font-size: 28px;
}

h2 {
  color: #028090;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 22px;
}

/* List Styling with Pseudo-Classes */
.languages,
.technologies {
  list-style: none;
  padding: 0;
}

.languages li,
.technologies li {
  padding: 15px 20px;
  margin-bottom: 0;
  transition: all 0.3s ease;
  cursor: pointer;
}

/* First Child - Special Styling */
.languages li:first-child {
  font-weight: bold;
  font-size: 18px;
  color: #028090;
  background-color: #e0f7fa;
  border-radius: 8px 8px 0 0;
}

/* Zebra Stripes using nth-child */
.languages li:nth-child(even) {
  background-color: #f5f5f5;
}

.languages li:nth-child(odd) {
  background-color: white;
}

/* Last Child - Special Styling */
.languages li:last-child {
  border-bottom: 3px solid #028090;
  padding-bottom: 20px;
  font-weight: bold;
  border-radius: 0 0 8px 8px;
}

/* Hover Effect on List Items */
.languages li:hover,
.technologies li:hover {
  background-color: #028090;
  color: white;
  transform: translateX(10px);
  padding-left: 30px;
}

/* Technologies List - Different Pattern */
.technologies li:first-child {
  background-color: #ff6b6b;
  color: white;
  font-weight: bold;
  border-radius: 8px 8px 0 0;
  padding: 18px 20px;
}

.technologies li:nth-child(2) {
  background-color: #4ecdc4;
  color: white;
}

.technologies li:nth-child(3) {
  background-color: #45b7d1;
  color: white;
}

.technologies li:nth-child(4),
.technologies li:nth-child(5),
.technologies li:nth-child(6) {
  background-color: #f7f7f7;
}

.technologies li:last-child {
  border-radius: 0 0 8px 8px;
  border-bottom: 3px solid #02C39A;
}
```

#### Bonus Solution: Using :not() Pseudo-Class

```css
/* Add borders to all items except the last one */
.languages li:not(:last-child) {
  border-bottom: 1px solid #e0e0e0;
}

/* Style all items except the first and last */
.languages li:not(:first-child):not(:last-child) {
  padding-left: 25px;
}

/* Target specific children with :nth-child */
.languages li:nth-child(3n) {
  /* Every third item */
  background-color: #e3f2fd;
}

.languages li:nth-child(3) {
  /* Exactly the third item */
  font-style: italic;
}

/* Using :not with other selectors */
.languages li:not(:hover) {
  opacity: 0.8;
}

/* This creates a nice effect where non-hovered items fade slightly */
```

---

### Exercise 2.3: Display Properties

#### Solution: `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercise 2.3 - Display Properties</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Display Properties Demo</h1>
  </header>
  
  <!-- Navigation with Inline-Block -->
  <nav class="main-nav">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#contact">Contact</a>
  </nav>
  
  <main>
    <section class="content">
      <h2>Article with Inline Badges</h2>
      <p>
        This article covers multiple topics: 
        <span class="badge">HTML</span>
        <span class="badge">CSS</span>
        <span class="badge">JavaScript</span>
        <span class="badge">React</span>
      </p>
      
      <p>
        Learn web development with our comprehensive guides. These tutorials are tagged with:
        <span class="badge badge-primary">Beginner</span>
        <span class="badge badge-success">Free</span>
        <span class="badge badge-warning">Popular</span>
      </p>
    </section>
    
    <section class="button-demo">
      <h2>Button Display Types</h2>
      
      <div class="demo-group">
        <h3>Inline-Block Buttons (Default)</h3>
        <button class="btn">Button 1</button>
        <button class="btn">Button 2</button>
        <button class="btn">Button 3</button>
      </div>
      
      <div class="demo-group">
        <h3>Block Button (Full Width)</h3>
        <button class="btn btn-block">Full Width Button</button>
        <button class="btn btn-block">Another Full Width Button</button>
      </div>
    </section>
    
    <section class="display-examples">
      <h2>Understanding Display Values</h2>
      
      <div class="example">
        <h3>Block Elements</h3>
        <div class="block-demo">Block 1</div>
        <div class="block-demo">Block 2</div>
        <div class="block-demo">Block 3</div>
        <p class="note">Block elements stack vertically and take full width</p>
      </div>
      
      <div class="example">
        <h3>Inline Elements</h3>
        <span class="inline-demo">Inline 1</span>
        <span class="inline-demo">Inline 2</span>
        <span class="inline-demo">Inline 3</span>
        <p class="note">Inline elements flow horizontally, width/height ignored</p>
      </div>
      
      <div class="example">
        <h3>Inline-Block Elements</h3>
        <div class="inline-block-demo">Box 1</div>
        <div class="inline-block-demo">Box 2</div>
        <div class="inline-block-demo">Box 3</div>
        <p class="note">Inline-block flows horizontally but respects width/height</p>
      </div>
    </section>
  </main>
</body>
</html>
```

#### Solution: `styles.css`

```css
/* Global Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
}

header {
  background: linear-gradient(135deg, #028090, #02C39A);
  color: white;
  padding: 30px 20px;
  text-align: center;
}

header h1 {
  font-size: 32px;
  font-weight: 600;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

section {
  background: white;
  padding: 30px;
  margin-bottom: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #028090;
  margin-bottom: 20px;
  font-size: 24px;
}

h3 {
  color: #555;
  margin-bottom: 15px;
  font-size: 18px;
}

/* Navigation - Inline-Block Display */
.main-nav {
  background-color: #333;
  padding: 0;
  text-align: center;
  margin-bottom: 20px;
}

.main-nav a {
  display: inline-block;
  padding: 15px 25px;
  color: white;
  text-decoration: none;
  background-color: #028090;
  margin: 0;
  border-right: 1px solid #026673;
  transition: all 0.3s ease;
}

.main-nav a:last-child {
  border-right: none;
}

.main-nav a:hover {
  background-color: #02C39A;
  transform: translateY(-2px);
}

/* Badge Components - Inline-Block */
.badge {
  display: inline-block;
  padding: 5px 12px;
  background-color: #ff6b6b;
  color: white;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  margin: 2px 4px;
  transition: transform 0.2s ease;
}

.badge:hover {
  transform: scale(1.1);
}

.badge-primary {
  background-color: #4ecdc4;
}

.badge-success {
  background-color: #95e1d3;
  color: #333;
}

.badge-warning {
  background-color: #feca57;
  color: #333;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: #028090;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #026673;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(2, 128, 144, 0.3);
}

/* Block Button - Full Width */
.btn-block {
  display: block;
  width: 100%;
  text-align: center;
  margin: 10px 0;
}

/* Demo Groups */
.demo-group {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

/* Display Examples */
.example {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f0f8f9;
  border-left: 4px solid #028090;
}

/* Block Display Demo */
.block-demo {
  display: block;
  padding: 15px;
  margin: 10px 0;
  background-color: #4ecdc4;
  color: white;
  border-radius: 4px;
  font-weight: 600;
}

/* Inline Display Demo */
.inline-demo {
  display: inline;
  padding: 8px 12px;
  background-color: #ff6b6b;
  color: white;
  margin: 0 5px;
  /* Note: vertical padding may not work as expected with inline */
}

/* Inline-Block Display Demo */
.inline-block-demo {
  display: inline-block;
  width: 120px;
  height: 80px;
  padding: 15px;
  margin: 10px;
  background-color: #95e1d3;
  color: #333;
  border-radius: 4px;
  text-align: center;
  font-weight: 600;
  vertical-align: top;
  transition: transform 0.3s ease;
}

.inline-block-demo:hover {
  transform: scale(1.05);
}

/* Note Text */
.note {
  margin-top: 15px;
  font-size: 14px;
  color: #666;
  font-style: italic;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
}

/* Content Section Paragraphs */
.content p {
  margin-bottom: 20px;
  line-height: 1.8;
}
```

#### Bonus Solution: Demonstrating Display Changes

```css
/* Try these to see the difference */

/* Change inline to inline-block */
.badge-experimental {
  display: inline;  /* Try changing to inline-block */
  padding: 10px 20px;
  width: 100px;  /* This won't work with inline */
  height: 50px;  /* This won't work with inline */
}

/* Change block to inline-block */
.special-button {
  display: block;  /* Try changing to inline-block */
  width: 200px;
  /* With block: stacks vertically, takes full container width */
  /* With inline-block: can sit side-by-side, respects width */
}
```

---

## PART 3: Flexbox & Final Project

### Exercise 3.1: Flexbox Basics

#### Solution: `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercise 3.1 - Flexbox Basics</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="page-wrapper">
    <h1>Flexbox Playground</h1>
    
    <section class="demo-section">
      <h2>Horizontal Layout (flex-direction: row)</h2>
      <p class="description">justify-content: center | align-items: center</p>
      <div class="container container-1">
        <div class="box box-1">Box 1</div>
        <div class="box box-2">Box 2</div>
        <div class="box box-3">Box 3</div>
        <div class="box box-4">Box 4</div>
      </div>
    </section>
    
    <section class="demo-section">
      <h2>Space Between</h2>
      <p class="description">justify-content: space-between | align-items: flex-start</p>
      <div class="container container-2">
        <div class="box box-1">Box 1</div>
        <div class="box box-2">Box 2</div>
        <div class="box box-3">Box 3</div>
        <div class="box box-4">Box 4</div>
      </div>
    </section>
    
    <section class="demo-section">
      <h2>Space Around</h2>
      <p class="description">justify-content: space-around | align-items: flex-end</p>
      <div class="container container-3">
        <div class="box box-1">Box 1</div>
        <div class="box box-2">Box 2</div>
        <div class="box box-3">Box 3</div>
        <div class="box box-4">Box 4</div>
      </div>
    </section>
    
    <section class="demo-section">
      <h2>Vertical Layout (flex-direction: column)</h2>
      <p class="description">flex-direction: column | align-items: center</p>
      <div class="container container-4">
        <div class="box box-1">Box 1</div>
        <div class="box box-2">Box 2</div>
        <div class="box box-3">Box 3</div>
        <div class="box box-4">Box 4</div>
      </div>
    </section>
  </div>
</body>
</html>
```

#### Solution: `styles.css`

```css
/* Global Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 30px;
  min-height: 100vh;
}

.page-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  color: white;
  text-align: center;
  margin-bottom: 40px;
  font-size: 36px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.demo-section {
  background-color: white;
  padding: 30px;
  margin-bottom: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

h2 {
  color: #333;
  margin-bottom: 10px;
  font-size: 24px;
}

.description {
  color: #666;
  font-size: 14px;
  font-style: italic;
  margin-bottom: 20px;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
}

/* Flex Containers */
.container {
  display: flex;
  min-height: 300px;
  border: 3px dashed #028090;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

/* Container 1: Center Everything */
.container-1 {
  justify-content: center;
  align-items: center;
}

/* Container 2: Space Between, Top Aligned */
.container-2 {
  justify-content: space-between;
  align-items: flex-start;
}

/* Container 3: Space Around, Bottom Aligned */
.container-3 {
  justify-content: space-around;
  align-items: flex-end;
}

/* Container 4: Vertical Layout */
.container-4 {
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

/* Flex Items (Boxes) */
.box {
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.box:hover {
  transform: scale(1.1) rotate(5deg);
  cursor: pointer;
}

/* Box Colors */
.box-1 {
  background: linear-gradient(135deg, #FF6B6B, #FF5252);
}

.box-2 {
  background: linear-gradient(135deg, #4ECDC4, #44A08D);
}

.box-3 {
  background: linear-gradient(135deg, #45B7D1, #2E86AB);
}

.box-4 {
  background: linear-gradient(135deg, #FFA07A, #FF7F50);
}
```

#### Bonus Solution: Interactive Flexbox Demo

```css
/* Add this to see the column behavior */
.container-5 {
  flex-direction: column;
  height: 400px;
}

/* When flex-direction is column: */
/* - justify-content controls VERTICAL alignment */
/* - align-items controls HORIZONTAL alignment */
/* This is the OPPOSITE of row direction! */

.container-5 {
  justify-content: space-between;  /* Vertical spacing */
  align-items: stretch;             /* Horizontal stretch */
}

/* More justify-content options to try: */
/*
  flex-start    - items at start
  center        - items in center
  flex-end      - items at end
  space-between - max space between items
  space-around  - equal space around items
  space-evenly  - perfectly equal spacing
*/

/* More align-items options to try: */
/*
  flex-start - items aligned to top (row) or left (column)
  center     - items centered
  flex-end   - items aligned to bottom (row) or right (column)
  stretch    - items stretch to fill (default)
  baseline   - items aligned to text baseline
*/
```

---

### Exercise 3.2: Advanced Flexbox Layout

#### Solution: `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercise 3.2 - Advanced Flexbox Layout</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Header with Flexbox -->
  <header class="site-header">
    <h1 class="logo">MyPortfolio</h1>
    <nav class="header-nav">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  
  <!-- Main Content -->
  <main>
    <section class="hero">
      <h2>Welcome to My Portfolio</h2>
      <p>Showcasing advanced flexbox layouts</p>
    </section>
    
    <!-- Card Grid -->
    <section class="card-grid-section">
      <h2 class="section-title">Featured Projects</h2>
      
      <div class="card-grid">
        <div class="card">
          <img src="https://via.placeholder.com/250x150/FF6B6B/FFFFFF?text=Project+1" alt="Project 1">
          <div class="card-content">
            <h3>E-Commerce Website</h3>
            <p>A fully responsive online shopping platform built with modern web technologies.</p>
            <div class="card-tags">
              <span class="tag">React</span>
              <span class="tag">Node.js</span>
            </div>
          </div>
        </div>
        
        <div class="card">
          <img src="https://via.placeholder.com/250x150/4ECDC4/FFFFFF?text=Project+2" alt="Project 2">
          <div class="card-content">
            <h3>Task Management App</h3>
            <p>An intuitive app for organizing tasks and boosting productivity.</p>
            <div class="card-tags">
              <span class="tag">Vue.js</span>
              <span class="tag">Firebase</span>
            </div>
          </div>
        </div>
        
        <div class="card">
          <img src="https://via.placeholder.com/250x150/45B7D1/FFFFFF?text=Project+3" alt="Project 3">
          <div class="card-content">
            <h3>Weather Dashboard</h3>
            <p>Real-time weather information with beautiful data visualizations.</p>
            <div class="card-tags">
              <span class="tag">JavaScript</span>
              <span class="tag">API</span>
            </div>
          </div>
        </div>
        
        <div class="card">
          <img src="https://via.placeholder.com/250x150/FFA07A/FFFFFF?text=Project+4" alt="Project 4">
          <div class="card-content">
            <h3>Blog Platform</h3>
            <p>A content management system for bloggers and content creators.</p>
            <div class="card-tags">
              <span class="tag">Next.js</span>
              <span class="tag">MongoDB</span>
            </div>
          </div>
        </div>
        
        <div class="card">
          <img src="https://via.placeholder.com/250x150/9370DB/FFFFFF?text=Project+5" alt="Project 5">
          <div class="card-content">
            <h3>Fitness Tracker</h3>
            <p>Track workouts, calories, and fitness goals in one place.</p>
            <div class="card-tags">
              <span class="tag">React Native</span>
              <span class="tag">GraphQL</span>
            </div>
          </div>
        </div>
        
        <div class="card">
          <img src="https://via.placeholder.com/250x150/FFD700/333333?text=Project+6" alt="Project 6">
          <div class="card-content">
            <h3>Recipe Finder</h3>
            <p>Discover delicious recipes based on ingredients you have.</p>
            <div class="card-tags">
              <span class="tag">Angular</span>
              <span class="tag">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  
  <!-- Footer -->
  <footer class="site-footer">
    <p>&copy; 2025 MyPortfolio. All rights reserved.</p>
  </footer>
</body>
</html>
```

#### Solution: `styles.css`

```css
/* Global Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f5f5f5;
}

/* Header with Flexbox */
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  color: white;
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.header-nav {
  display: flex;
  gap: 10px;
}

.header-nav a {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.header-nav a:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #028090, #02C39A);
  color: white;
  text-align: center;
  padding: 80px 20px;
  margin-bottom: 60px;
}

.hero h2 {
  font-size: 48px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.hero p {
  font-size: 20px;
  opacity: 0.9;
}

/* Main Content */
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-size: 36px;
  color: #333;
  margin-bottom: 40px;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: linear-gradient(to right, #028090, #02C39A);
  margin: 15px auto 0;
  border-radius: 2px;
}

/* Card Grid with Flexbox */
.card-grid-section {
  margin-bottom: 80px;
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

/* Individual Card */
.card {
  width: 320px;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.card-content {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card h3 {
  color: #028090;
  font-size: 22px;
  margin-bottom: 12px;
}

.card p {
  color: #666;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 15px;
  flex-grow: 1;
}

/* Card Tags */
.card-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  background-color: #e0f7fa;
  color: #028090;
  padding: 5px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

/* Footer */
.site-footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 30px 20px;
  margin-top: 60px;
}

.site-footer p {
  margin: 0;
  font-size: 14px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .site-header {
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
  
  .header-nav {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .hero h2 {
    font-size: 32px;
  }
  
  .card {
    width: 100%;
    max-width: 400px;
  }
}
```

#### Bonus Solution: Flexible Navigation with flex-grow

```css
/* Make navigation links grow to fill space evenly */
.header-nav-flexible {
  display: flex;
  gap: 0;
  width: 100%;
  max-width: 600px;
}

.header-nav-flexible a {
  flex-grow: 1;
  text-align: center;
  padding: 12px 20px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}

.header-nav-flexible a:last-child {
  border-right: none;
}

/* Advanced card layout with flex-grow */
.card-advanced {
  display: flex;
  flex-direction: column;
}

.card-advanced .card-content {
  flex-grow: 1;  /* Content grows to push tags to bottom */
  display: flex;
  flex-direction: column;
}

.card-advanced p {
  flex-grow: 1;  /* Description takes available space */
}
```

---

### Exercise 3.3: Final Project - Portfolio Page

#### Complete Solution

#### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jane Doe - Web Developer Portfolio</title>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Header -->
  <header class="site-header">
    <div class="logo">Jane Doe</div>
    <nav class="main-nav">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="hero" id="home">
    <div class="hero-content">
      <h1>Hi, I'm Jane Doe</h1>
      <p class="hero-subtitle">Full Stack Web Developer</p>
      <p class="hero-description">
        Creating beautiful, functional, and user-friendly websites
      </p>
      <a href="#projects" class="cta-button">View My Work</a>
    </div>
  </section>

  <!-- About Section -->
  <section class="about" id="about">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <div class="about-text">
          <p>
            Hello! I'm Jane, a passionate web developer with over 5 years of experience 
            building responsive and dynamic websites. I specialize in front-end development 
            with expertise in HTML, CSS, JavaScript, and modern frameworks like React and Vue.
          </p>
          <p>
            I believe in writing clean, maintainable code and creating user experiences 
            that are both beautiful and intuitive. When I'm not coding, you can find me 
            exploring new technologies, contributing to open-source projects, or enjoying 
            a good cup of coffee.
          </p>
          <div class="skills">
            <h3>Skills</h3>
            <div class="skill-tags">
              <span class="skill-tag">HTML5</span>
              <span class="skill-tag">CSS3</span>
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">React</span>
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Git</span>
              <span class="skill-tag">Responsive Design</span>
            </div>
          </div>
        </div>
        <div class="about-image">
          <img src="https://via.placeholder.com/400x500/028090/FFFFFF?text=Your+Photo" alt="Jane Doe">
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section class="projects" id="projects">
    <div class="container">
      <h2 class="section-title">My Projects</h2>
      <div class="project-grid">
        <div class="project-card">
          <div class="project-image">
            <img src="https://via.placeholder.com/400x300/FF6B6B/FFFFFF?text=E-Commerce" alt="E-Commerce Project">
          </div>
          <div class="project-content">
            <h3>E-Commerce Platform</h3>
            <p>
              A fully functional online store with shopping cart, payment integration, 
              and admin dashboard. Built with React and Node.js.
            </p>
            <div class="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
            <a href="#" class="project-link">View Project →</a>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image">
            <img src="https://via.placeholder.com/400x300/4ECDC4/FFFFFF?text=Task+Manager" alt="Task Manager Project">
          </div>
          <div class="project-content">
            <h3>Task Management App</h3>
            <p>
              An intuitive task manager with drag-and-drop functionality, team collaboration 
              features, and real-time updates.
            </p>
            <div class="project-tech">
              <span>Vue.js</span>
              <span>Firebase</span>
              <span>Vuex</span>
            </div>
            <a href="#" class="project-link">View Project →</a>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image">
            <img src="https://via.placeholder.com/400x300/45B7D1/FFFFFF?text=Weather+App" alt="Weather App Project">
          </div>
          <div class="project-content">
            <h3>Weather Dashboard</h3>
            <p>
              Real-time weather data visualization with forecasts, interactive maps, 
              and location-based recommendations.
            </p>
            <div class="project-tech">
              <span>JavaScript</span>
              <span>API Integration</span>
              <span>Chart.js</span>
            </div>
            <a href="#" class="project-link">View Project →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="contact" id="contact">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <p class="contact-intro">
        I'm always open to new opportunities and collaborations. 
        Feel free to reach out!
      </p>
      <div class="contact-methods">
        <div class="contact-card">
          <div class="contact-icon">📧</div>
          <h3>Email</h3>
          <p>jane.doe@example.com</p>
        </div>
        <div class="contact-card">
          <div class="contact-icon">💼</div>
          <h3>LinkedIn</h3>
          <p>linkedin.com/in/janedoe</p>
        </div>
        <div class="contact-card">
          <div class="contact-icon">💻</div>
          <h3>GitHub</h3>
          <p>github.com/janedoe</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <p>&copy; 2025 Jane Doe. All rights reserved.</p>
    <p>Built with HTML, CSS, and lots of ☕</p>
  </footer>
</body>
</html>
```

#### `styles.css`

```css
/* ============================================
   CSS VARIABLES
   ============================================ */
:root {
  --primary-color: #028090;
  --secondary-color: #02C39A;
  --accent-color: #F0A500;
  --text-dark: #2C3E50;
  --text-light: #7F8C8D;
  --bg-light: #F8F9FA;
  --bg-white: #FFFFFF;
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.2);
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 40px;
  --spacing-xl: 60px;
  --border-radius: 8px;
  --transition: all 0.3s ease;
}

/* ============================================
   GLOBAL STYLES
   ============================================ */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', sans-serif;
  line-height: 1.6;
  color: var(--text-dark);
  background-color: var(--bg-light);
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  line-height: 1.2;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.section-title {
  font-size: 42px;
  text-align: center;
  margin-bottom: var(--spacing-xl);
  color: var(--text-dark);
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  margin: var(--spacing-sm) auto 0;
  border-radius: 2px;
}

/* ============================================
   HEADER
   ============================================ */
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--bg-white);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  font-family: 'Montserrat', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: var(--primary-color);
}

.main-nav {
  display: flex;
  gap: var(--spacing-md);
}

.main-nav a {
  color: var(--text-dark);
  font-weight: 600;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius);
  transition: var(--transition);
  position: relative;
}

.main-nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.main-nav a:hover {
  color: var(--primary-color);
}

.main-nav a:hover::after {
  width: 80%;
}

/* ============================================
   HERO SECTION
   ============================================ */
.hero {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 120px var(--spacing-md);
  text-align: center;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  max-width: 800px;
}

.hero h1 {
  font-size: 56px;
  margin-bottom: var(--spacing-sm);
  animation: fadeInUp 0.8s ease;
}

.hero-subtitle {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  opacity: 0.95;
  animation: fadeInUp 0.8s ease 0.2s backwards;
}

.hero-description {
  font-size: 18px;
  margin-bottom: var(--spacing-lg);
  opacity: 0.9;
  animation: fadeInUp 0.8s ease 0.4s backwards;
}

.cta-button {
  display: inline-block;
  background-color: var(--accent-color);
  color: white;
  padding: 16px 40px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 600;
  transition: var(--transition);
  box-shadow: 0 4px 15px rgba(240, 165, 0, 0.3);
  animation: fadeInUp 0.8s ease 0.6s backwards;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(240, 165, 0, 0.4);
  background-color: #D89400;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ============================================
   ABOUT SECTION
   ============================================ */
.about {
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-white);
}

.about-content {
  display: flex;
  gap: var(--spacing-xl);
  align-items: center;
}

.about-text {
  flex: 1;
}

.about-text p {
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: var(--spacing-md);
  color: var(--text-light);
}

.about-text p:first-child::first-letter {
  font-size: 52px;
  font-weight: 700;
  color: var(--primary-color);
  float: left;
  line-height: 1;
  margin-right: 8px;
}

.about-image {
  flex: 0 0 400px;
}

.about-image img {
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-lg);
}

/* Skills */
.skills {
  margin-top: var(--spacing-lg);
}

.skills h3 {
  font-size: 24px;
  margin-bottom: var(--spacing-sm);
  color: var(--text-dark);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.skill-tag {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  transition: var(--transition);
}

.skill-tag:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

/* ============================================
   PROJECTS SECTION
   ============================================ */
.projects {
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-light);
}

.project-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
  justify-content: center;
}

.project-card {
  background-color: var(--bg-white);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  width: 350px;
  transition: var(--transition);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.project-image {
  position: relative;
  overflow: hidden;
  height: 220px;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-content {
  padding: var(--spacing-md);
}

.project-content h3 {
  font-size: 22px;
  margin-bottom: var(--spacing-sm);
  color: var(--primary-color);
}

.project-content p {
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-light);
  margin-bottom: var(--spacing-sm);
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-sm);
}

.project-tech span {
  background-color: var(--bg-light);
  color: var(--primary-color);
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
}

.project-link {
  color: var(--primary-color);
  font-weight: 600;
  transition: var(--transition);
}

.project-link:hover {
  color: var(--secondary-color);
  transform: translateX(5px);
  display: inline-block;
}

/* ============================================
   CONTACT SECTION
   ============================================ */
.contact {
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-white);
}

.contact-intro {
  text-align: center;
  font-size: 18px;
  color: var(--text-light);
  margin-bottom: var(--spacing-xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-methods {
  display: flex;
  gap: var(--spacing-lg);
  justify-content: center;
  flex-wrap: wrap;
}

.contact-card {
  background-color: var(--bg-light);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  text-align: center;
  width: 280px;
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  background-color: var(--primary-color);
  color: white;
}

.contact-icon {
  font-size: 48px;
  margin-bottom: var(--spacing-sm);
}

.contact-card h3 {
  font-size: 20px;
  margin-bottom: var(--spacing-xs);
}

.contact-card p {
  color: var(--text-light);
  font-size: 15px;
}

.contact-card:hover p {
  color: white;
}

/* ============================================
   FOOTER
   ============================================ */
.site-footer {
  background-color: var(--text-dark);
  color: white;
  text-align: center;
  padding: var(--spacing-lg) var(--spacing-md);
}

.site-footer p {
  margin-bottom: var(--spacing-xs);
  opacity: 0.9;
}

.site-footer p:last-child {
  margin-bottom: 0;
  font-size: 14px;
  opacity: 0.7;
}

/* ============================================
   RESPONSIVE DESIGN
   ============================================ */
@media (max-width: 768px) {
  .site-header {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
  
  .main-nav {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .hero h1 {
    font-size: 36px;
  }
  
  .hero-subtitle {
    font-size: 20px;
  }
  
  .about-content {
    flex-direction: column;
  }
  
  .about-image {
    flex: 0 0 auto;
    width: 100%;
    max-width: 400px;
  }
  
  .section-title {
    font-size: 32px;
  }
  
  .project-card {
    width: 100%;
    max-width: 400px;
  }
  
  .contact-methods {
    flex-direction: column;
    align-items: center;
  }
}
```

---

## Additional Notes

### Key CSS Concepts Demonstrated

1. **CSS Variables** - Centralized color and spacing system
2. **Flexbox** - Used throughout for layouts (header, hero, about, projects, contact)
3. **Box Model** - Proper use of padding, margin, and border
4. **Pseudo-Classes** - :hover, :after, :first-child, :last-child
5. **Typography** - Google Fonts with proper hierarchy
6. **Responsive Design** - Media queries for mobile devices
7. **Transitions & Animations** - Smooth hover effects and entrance animations
8. **Modern CSS Features** - Custom properties, calc(), transform, gradients

### Evaluation Checklist

✅ **HTML Structure (20/20)**
- Semantic HTML5 elements (header, nav, section, footer)
- All 5 sections present (header, hero, about, projects, footer/contact)
- Clean, well-indented code

✅ **CSS Fundamentals (30/30)**
- CSS variables defined in :root (colors, spacing, shadows)
- External stylesheet properly linked
- Multiple selector types (tag, class, pseudo-classes)
- Proper box model usage throughout

✅ **Layout & Flexbox (30/30)**
- Flexbox header with space-between
- Hero section centered with flexbox
- About section with two-column flexbox layout
- Project cards in responsive flex grid with flex-wrap
- Proper spacing and alignment

✅ **Design & Polish (20/20)**
- Cohesive color scheme (teal/mint gradient theme)
- Google Fonts (Montserrat for headings, Open Sans for body)
- Hover effects on all interactive elements
- Professional, modern appearance with animations

**TOTAL: 100/100**

---

## Congratulations! 🎉

You've completed all exercises and built a professional portfolio website. You've mastered:
- CSS fundamentals (selectors, specificity, cascade)
- Text styling and custom fonts
- The box model and sizing
- Structural pseudo-classes
- Display properties
- Flexbox layouts
- Building complete, responsive web pages

Keep practicing and building more projects to solidify these skills!