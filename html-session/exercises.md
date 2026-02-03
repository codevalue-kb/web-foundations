# Web Foundations - HTML
## 3-Hour Practice Exercises

**Total Time:** 3 hours  
**Format:** Progressive hands-on exercises  
**Goal:** Master HTML fundamentals through practical application

---

## Exercise Session Overview

| Time Block | Topic | Duration |
|------------|-------|----------|
| Session 1 | HTML Basics & Document Structure | 45 min |
| Session 2 | Content Elements & Media | 45 min |
| Session 3 | Tables & Lists | 30 min |
| Session 4 | Forms & User Input | 60 min |

---

## SESSION 1: HTML Basics & Document Structure (45 minutes)

### Exercise 1.1: Your First HTML Page (15 minutes)

**Objective:** Create a properly structured HTML document

**Task:**
Create a file called `about-me.html` with the following requirements:
- Proper DOCTYPE declaration
- HTML structure with `<html>`, `<head>`, and `<body>`
- Page title: "About Me"
- Inside the body:
  - One `<h1>` heading with your name
  - Three `<h2>` subheadings: "Background", "Interests", "Goals"
  - At least one paragraph under each heading
  - Use `<strong>` to emphasize at least 3 important words
  - Use `<em>` to italicize at least 2 phrases
  - Add HTML comments explaining each major section

**Expected Output:**
A valid HTML page that displays your personal information with proper hierarchy and formatting.

---

### Exercise 1.2: Text Formatting Practice (15 minutes)

**Objective:** Master text formatting tags

**Task:**
Create a file called `formatting-practice.html` containing:
1. A main heading "HTML Text Formatting Guide"
2. Six sections (use `<h2>` for each):
   - "Bold Text" - with examples using `<strong>`
   - "Italic Text" - with examples using `<em>`
   - "Important Notice" - combine strong and em tags
   - "Special Characters" - include &copy;, &trade;, &hearts;
   - "Line Breaks" - demonstrate `<br>` usage
   - "Horizontal Rules" - use `<hr>` to separate sections

**Bonus Challenge:**
Nest formatting tags (e.g., text that is both bold AND italic)

---

### Exercise 1.3: Creating a Navigation Page (15 minutes)

**Objective:** Work with links and different URL types

**Task:**
Create a file called `links-practice.html` that includes:
1. Heading: "My Link Collection"
2. Three sections with different link types:
   - **External Links**: 5 links to your favorite websites (absolute URLs)
   - **Email Link**: A mailto link to contact@example.com with subject "Hello"
   - **Phone Link**: A tel link to a phone number (tel:+1-555-0100)
3. Use `<p>` tags to describe each link before the anchor tag
4. Add `target="_blank"` to external links to open in new tab

**Expected Output:**
A functional navigation page with working links of various types.

---

## SESSION 2: Content Elements & Media (45 minutes)

### Exercise 2.1: Image Gallery (15 minutes)

**Objective:** Work with images and alt text

**Task:**
Create a file called `gallery.html` containing:
1. Main heading: "My Photo Gallery"
2. At least 4 images using placeholder service: `https://picsum.photos/300/200?random=X` (replace X with 1, 2, 3, 4)
3. Each image must have:
   - Descriptive `alt` text
   - A caption below using `<p>` tag
4. Group images in sections with `<h2>` headings
5. Add a border using `width` attribute set to 300

**Bonus Challenge:**
Make each image clickable, linking to the full-size version

---

### Exercise 2.2: Multimedia Page (15 minutes)

**Objective:** Embed audio and video elements

**Task:**
Create a file called `media-center.html` with:
1. Main heading: "Media Center"
2. **Audio Section:**
   - Heading: "Audio Player"
   - Audio element with `controls` attribute
   - Use a sample audio URL or placeholder
   - Paragraph describing the audio
3. **Video Section:**
   - Heading: "Video Player"
   - Video element with `controls`, `width="640"`, `height="360"`
   - Use a sample video URL or placeholder
   - Paragraph describing the video

**Note:** For testing, you can use:
- Audio: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3`
- Video: Create a placeholder with attributes even if source is unavailable

---

### Exercise 2.3: Button Interaction Page (15 minutes)

**Objective:** Create different types of buttons

**Task:**
Create a file called `buttons.html` containing:
1. Main heading: "Button Examples"
2. Create these button types:
   - Standard button with text "Click Me"
   - Button linking to "#" with text "Navigate"
   - Submit button
   - Reset button
   - Disabled button
3. Add descriptions before each button explaining its purpose
4. Style each button section with horizontal rules

**Expected Output:**
A page showcasing different button types and states.

---

## SESSION 3: Tables & Lists (30 minutes)

### Exercise 3.1: Product Catalog with Lists (10 minutes)

**Objective:** Master ordered and unordered lists

**Task:**
Create a file called `product-catalog.html` with:
1. Main heading: "Product Catalog"
2. **Unordered List Section:**
   - Heading: "Available Categories"
   - Unordered list of 5 product categories
3. **Ordered List Section:**
   - Heading: "Top 5 Bestsellers"
   - Ordered list of products
4. **Nested List:**
   - Create a list of departments
   - Under each department, nest a list of products
   - At least 3 departments, 3 products each

**Expected Output:**
Well-organized lists demonstrating hierarchy and nesting.

---

### Exercise 3.2: Student Grade Table (20 minutes)

**Objective:** Build a complete HTML table with headers

**Task:**
Create a file called `grades-table.html` containing:
1. Main heading: "Student Grades - Fall 2024"
2. Create a table with:
   - **Table Headers** (`<thead>`):
     - Student Name
     - Math
     - English
     - Science
     - Average
   - **Table Body** (`<tbody>`):
     - At least 5 student rows
     - Include grades for each subject
     - Calculate and show average
   - **Table Footer** (`<tfoot>`):
     - Class averages for each subject

**Requirements:**
- Use `<th>` for header cells
- Use `<tr>` for rows
- Use `<td>` for data cells
- Add a border attribute to the table

**Expected Output:**
A well-structured data table displaying student information.

---

## SESSION 4: Forms & User Input (60 minutes)

### Exercise 4.1: Contact Form (20 minutes)

**Objective:** Build a basic contact form

**Task:**
Create a file called `contact-form.html` with:
1. Main heading: "Contact Us"
2. A form with `action="#"` and `method="POST"`
3. Include these fields with appropriate labels:
   - **Name** (text input, required)
   - **Email** (email input, required)
   - **Phone** (tel input)
   - **Message** (textarea, 5 rows, required)
   - **Submit button**

**Requirements:**
- Each input must have a `<label>`
- Use `name` attributes for all inputs
- Add `placeholder` text to guide users
- Mark required fields with `required` attribute

**Expected Output:**
A functional contact form that validates required fields.

---

### Exercise 4.2: User Registration Form (25 minutes)

**Objective:** Work with various input types

**Task:**
Create a file called `registration-form.html` containing:
1. Main heading: "User Registration"
2. A form with various input types:
   - **Username** (text, required, minlength=5)
   - **Email** (email, required)
   - **Password** (password, required, minlength=8)
   - **Confirm Password** (password, required)
   - **Date of Birth** (date, required)
   - **Gender** (radio buttons: Male/Female/Other)
   - **Interests** (checkboxes: at least 4 options)
   - **Country** (dropdown/select with 5 countries)
   - **Terms and Conditions** (checkbox, required)
   - **Submit** and **Reset** buttons

**Requirements:**
- Group related fields using `<fieldset>` and `<legend>`
- All inputs must have labels
- Use appropriate input types for validation

**Expected Output:**
A comprehensive registration form with proper validation.

---

### Exercise 4.3: Survey Form (Advanced - 15 minutes)

**Objective:** Create a complex form with grouping

**Task:**
Create a file called `survey-form.html` for a "Website Feedback Survey":

1. Main heading: "Website Feedback Survey"
2. **Section 1: Personal Information** (fieldset)
   - Name (text, required)
   - Email (email, required)
   - Age Range (select: 18-25, 26-35, 36-45, 46+)

3. **Section 2: Experience Rating** (fieldset)
   - How would you rate our website? (radio: Excellent, Good, Fair, Poor)
   - How often do you visit? (select: Daily, Weekly, Monthly, First time)

4. **Section 3: Feedback** (fieldset)
   - What did you like? (checkbox: Design, Content, Speed, Easy Navigation, Other)
   - Suggestions for improvement (textarea, 4 rows)

5. **Section 4: Follow-up** (fieldset)
   - Would you recommend us? (radio: Yes, No, Maybe)
   - Subscribe to newsletter? (checkbox)

6. Submit button

**Requirements:**
- Organize with `<fieldset>` and `<legend>`
- Use varied input types
- Include required fields appropriately

**Expected Output:**
A professional survey form with logical grouping.

---

## BONUS CHALLENGES (If time permits)

### Bonus 1: Personal Portfolio Page (30 minutes)
Combine all learned skills to create a complete portfolio page:
- Header with navigation links (Home, About, Projects, Contact)
- About section with your photo and bio
- Projects section with image gallery
- Skills section with lists
- Contact form
- Footer with social media links

### Bonus 2: Recipe Website (30 minutes)
Create a recipe page including:
- Recipe title and image
- Preparation and cooking time (using lists)
- Ingredients list (unordered)
- Step-by-step instructions (ordered)
- Nutrition facts (table)
- Comment form at the bottom

### Bonus 3: Blog Post Page (20 minutes)
Create a blog post with:
- Article heading and subheadings
- Paragraphs with formatted text
- Embedded images
- Blockquotes
- Lists of key points
- Author bio section
- Related articles links

---

## Solutions Checklist

After completing each exercise, verify:

✓ **HTML Structure:**
- [ ] Proper DOCTYPE declaration
- [ ] Valid `<html>`, `<head>`, `<body>` structure
- [ ] Appropriate use of semantic tags

✓ **Content:**
- [ ] Correct heading hierarchy (H1 → H2 → H3)
- [ ] Proper use of paragraphs
- [ ] Valid attributes on all elements

✓ **Forms:**
- [ ] Labels associated with inputs
- [ ] Appropriate input types
- [ ] Required validation where needed
- [ ] Logical grouping with fieldsets

✓ **Best Practices:**
- [ ] Alt text on all images
- [ ] Meaningful link text
- [ ] HTML comments for complex sections
- [ ] No skipped heading levels

---

## Tips for Success

1. **Test Your Code:** Open each HTML file in a browser to verify it works
2. **Use Comments:** Add comments to explain your code structure
3. **Validate:** Use the W3C HTML Validator to check for errors
4. **Experiment:** Try variations of the exercises to deepen understanding
5. **Ask Questions:** If stuck, review the presentation slides or search for examples

---

## Additional Practice Resources

- **W3Schools HTML Tutorial:** https://www.w3schools.com/html/
- **MDN Web Docs:** https://developer.mozilla.org/en-US/docs/Web/HTML
- **HTML Validator:** https://validator.w3.org/
- **Practice Playground:** https://codepen.io/

---

**Good luck with your exercises! 🚀**

Remember: The best way to learn HTML is by writing code. Don't just read the exercises—build them!
