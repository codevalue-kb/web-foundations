# HTML Exercises - Answer Key & Solutions Guide

**For Instructors/Reference**

This document provides sample solutions and grading rubrics for the 3-hour HTML exercise set.

---

## SESSION 1 SOLUTIONS

### Exercise 1.1: Your First HTML Page - Sample Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me</title>
</head>
<body>
    <!-- Header Section -->
    <h1>John Doe</h1>
    
    <!-- Background Section -->
    <h2>Background</h2>
    <p>
        I am a <strong>web developer</strong> with a passion for creating 
        <strong>beautiful</strong> and <em>functional</em> websites. I have 
        been learning HTML and CSS for the past <strong>six months</strong> 
        and am excited to continue my journey in web development.
    </p>
    
    <!-- Interests Section -->
    <h2>Interests</h2>
    <p>
        In my free time, I enjoy <em>reading technology blogs</em>, playing 
        video games, and exploring new web development frameworks. I am 
        particularly interested in frontend development and user experience design.
    </p>
    
    <!-- Goals Section -->
    <h2>Goals</h2>
    <p>
        My primary goal is to become a <strong>full-stack developer</strong> 
        within the next two years. I plan to master JavaScript, learn a backend 
        language like Python or Node.js, and build several portfolio projects 
        to showcase my skills.
    </p>
</body>
</html>
```

**Grading Rubric (15 points):**
- Correct DOCTYPE and HTML structure (3 points)
- Proper heading hierarchy (3 points)
- Required content under each heading (3 points)
- Use of strong and em tags (3 points)
- HTML comments present (3 points)

---

### Exercise 1.2: Text Formatting Practice - Sample Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML Text Formatting Guide</title>
</head>
<body>
    <h1>HTML Text Formatting Guide</h1>
    
    <h2>Bold Text</h2>
    <p>
        Use the <strong>strong</strong> tag to make text <strong>bold</strong> 
        and indicate strong importance.
    </p>
    
    <hr>
    
    <h2>Italic Text</h2>
    <p>
        Use the <em>em</em> tag to <em>emphasize</em> text with italics.
    </p>
    
    <hr>
    
    <h2>Important Notice</h2>
    <p>
        <strong><em>This is both bold and italic text!</em></strong> You can 
        nest formatting tags for combined effects.
    </p>
    
    <hr>
    
    <h2>Special Characters</h2>
    <p>
        Copyright: &copy; 2024<br>
        Trademark: MyBrand&trade;<br>
        Hearts: I &hearts; HTML!
    </p>
    
    <hr>
    
    <h2>Line Breaks</h2>
    <p>
        This is the first line.<br>
        This is the second line.<br>
        This is the third line.<br>
        Line breaks let you control line spacing within a paragraph.
    </p>
    
    <hr>
    
    <h2>Horizontal Rules</h2>
    <p>
        Horizontal rules (shown above between sections) help separate 
        different parts of your content visually.
    </p>
</body>
</html>
```

**Grading Rubric (15 points):**
- Six sections with appropriate headings (6 points)
- Correct use of formatting tags (6 points)
- Special characters included (2 points)
- Bonus: Nested tags (1 point extra credit)

---

### Exercise 1.3: Creating a Navigation Page - Sample Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Link Collection</title>
</head>
<body>
    <h1>My Link Collection</h1>
    
    <h2>External Links</h2>
    
    <p>Visit Google for searching the web:</p>
    <a href="https://www.google.com" target="_blank">Google</a>
    
    <p>Watch videos on YouTube:</p>
    <a href="https://www.youtube.com" target="_blank">YouTube</a>
    
    <p>Connect with professionals on LinkedIn:</p>
    <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
    
    <p>Learn to code on freeCodeCamp:</p>
    <a href="https://www.freecodecamp.org" target="_blank">freeCodeCamp</a>
    
    <p>Explore web development resources:</p>
    <a href="https://developer.mozilla.org" target="_blank">MDN Web Docs</a>
    
    <h2>Email Link</h2>
    
    <p>Send us an email with your questions:</p>
    <a href="mailto:contact@example.com?subject=Hello">Email Us</a>
    
    <h2>Phone Link</h2>
    
    <p>Call us for immediate assistance:</p>
    <a href="tel:+1-555-0100">+1 (555) 0100</a>
</body>
</html>
```

**Grading Rubric (15 points):**
- Five external links with target="_blank" (5 points)
- Email link with subject (3 points)
- Phone link with tel: protocol (3 points)
- Descriptive paragraphs (2 points)
- Proper HTML structure (2 points)

---

## SESSION 2 SOLUTIONS

### Exercise 2.1: Image Gallery - Sample Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Photo Gallery</title>
</head>
<body>
    <h1>My Photo Gallery</h1>
    
    <h2>Nature Collection</h2>
    
    <a href="https://picsum.photos/800/600?random=1" target="_blank">
        <img src="https://picsum.photos/300/200?random=1" 
             alt="Beautiful mountain landscape at sunset" 
             width="300">
    </a>
    <p>Mountain landscape captured during golden hour</p>
    
    <a href="https://picsum.photos/800/600?random=2" target="_blank">
        <img src="https://picsum.photos/300/200?random=2" 
             alt="Serene ocean waves at the beach" 
             width="300">
    </a>
    <p>Peaceful ocean view with gentle waves</p>
    
    <h2>Urban Collection</h2>
    
    <a href="https://picsum.photos/800/600?random=3" target="_blank">
        <img src="https://picsum.photos/300/200?random=3" 
             alt="Modern city skyline at night" 
             width="300">
    </a>
    <p>City lights illuminating the evening sky</p>
    
    <a href="https://picsum.photos/800/600?random=4" target="_blank">
        <img src="https://picsum.photos/300/200?random=4" 
             alt="Historic architecture in downtown area" 
             width="300">
    </a>
    <p>Classic architecture from the early 1900s</p>
</body>
</html>
```

**Grading Rubric (15 points):**
- Four images displayed (4 points)
- Descriptive alt text on all images (4 points)
- Captions for each image (2 points)
- Grouped in sections (2 points)
- Bonus: Clickable images (3 points extra credit)

---

### Exercise 2.2: Multimedia Page - Sample Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Media Center</title>
</head>
<body>
    <h1>Media Center</h1>
    
    <h2>Audio Player</h2>
    <audio controls>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
                type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <p>
        This is a sample audio track demonstrating the HTML5 audio player. 
        Use the controls to play, pause, and adjust the volume.
    </p>
    
    <h2>Video Player</h2>
    <video controls width="640" height="360">
        <source src="sample-video.mp4" type="video/mp4">
        Your browser does not support the video element.
    </video>
    <p>
        This video demonstrates the HTML5 video player with standard controls. 
        The video can be played, paused, and viewed in fullscreen mode.
    </p>
</body>
</html>
```

**Grading Rubric (15 points):**
- Audio element with controls (4 points)
- Video element with controls and dimensions (4 points)
- Appropriate fallback messages (2 points)
- Descriptive paragraphs (3 points)
- Proper structure (2 points)

---

## SESSION 3 SOLUTIONS

### Exercise 3.1: Product Catalog with Lists - Sample Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Product Catalog</title>
</head>
<body>
    <h1>Product Catalog</h1>
    
    <h2>Available Categories</h2>
    <ul>
        <li>Electronics</li>
        <li>Clothing</li>
        <li>Home & Garden</li>
        <li>Sports & Outdoors</li>
        <li>Books & Media</li>
    </ul>
    
    <h2>Top 5 Bestsellers</h2>
    <ol>
        <li>Wireless Bluetooth Headphones</li>
        <li>Smart Home Security Camera</li>
        <li>Ergonomic Office Chair</li>
        <li>Stainless Steel Water Bottle</li>
        <li>LED Desk Lamp</li>
    </ol>
    
    <h2>Departments and Products</h2>
    <ul>
        <li>Electronics
            <ul>
                <li>Laptops</li>
                <li>Smartphones</li>
                <li>Tablets</li>
            </ul>
        </li>
        <li>Clothing
            <ul>
                <li>Men's Apparel</li>
                <li>Women's Apparel</li>
                <li>Accessories</li>
            </ul>
        </li>
        <li>Home & Garden
            <ul>
                <li>Furniture</li>
                <li>Kitchen Appliances</li>
                <li>Gardening Tools</li>
            </ul>
        </li>
    </ul>
</body>
</html>
```

**Grading Rubric (10 points):**
- Unordered list with 5 categories (2 points)
- Ordered list with 5 items (2 points)
- Nested lists with 3 departments (4 points)
- Proper structure and hierarchy (2 points)

---

### Exercise 3.2: Student Grade Table - Sample Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student Grades</title>
</head>
<body>
    <h1>Student Grades - Fall 2024</h1>
    
    <table border="1">
        <thead>
            <tr>
                <th>Student Name</th>
                <th>Math</th>
                <th>English</th>
                <th>Science</th>
                <th>Average</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Alice Johnson</td>
                <td>95</td>
                <td>88</td>
                <td>92</td>
                <td>91.7</td>
            </tr>
            <tr>
                <td>Bob Smith</td>
                <td>82</td>
                <td>90</td>
                <td>85</td>
                <td>85.7</td>
            </tr>
            <tr>
                <td>Charlie Brown</td>
                <td>78</td>
                <td>85</td>
                <td>80</td>
                <td>81.0</td>
            </tr>
            <tr>
                <td>Diana Prince</td>
                <td>92</td>
                <td>94</td>
                <td>89</td>
                <td>91.7</td>
            </tr>
            <tr>
                <td>Edward Lee</td>
                <td>88</td>
                <td>82</td>
                <td>91</td>
                <td>87.0</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>Class Average</th>
                <td>87.0</td>
                <td>87.8</td>
                <td>87.4</td>
                <td>87.4</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
```

**Grading Rubric (20 points):**
- Proper table structure with thead, tbody, tfoot (6 points)
- Five student rows with data (8 points)
- Correct use of th and td (3 points)
- Table footer with averages (2 points)
- Border attribute (1 point)

---

## SESSION 4 SOLUTIONS

### Exercise 4.1: Contact Form - Sample Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact Us</title>
</head>
<body>
    <h1>Contact Us</h1>
    
    <form action="#" method="POST">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" 
               placeholder="Enter your full name" required><br><br>
        
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" 
               placeholder="your.email@example.com" required><br><br>
        
        <label for="phone">Phone:</label><br>
        <input type="tel" id="phone" name="phone" 
               placeholder="+1-555-0100"><br><br>
        
        <label for="message">Message:</label><br>
        <textarea id="message" name="message" rows="5" 
                  placeholder="Enter your message here..." required></textarea><br><br>
        
        <button type="submit">Send Message</button>
    </form>
</body>
</html>
```

**Grading Rubric (20 points):**
- Form with action and method (3 points)
- All four inputs with labels (8 points)
- Appropriate input types (4 points)
- Required attributes (3 points)
- Placeholder text (2 points)

---

### Exercise 4.2: User Registration Form - Sample Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>User Registration</title>
</head>
<body>
    <h1>User Registration</h1>
    
    <form action="#" method="POST">
        <fieldset>
            <legend>Account Information</legend>
            
            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username" 
                   minlength="5" required><br><br>
            
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br><br>
            
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password" 
                   minlength="8" required><br><br>
            
            <label for="confirm-password">Confirm Password:</label><br>
            <input type="password" id="confirm-password" 
                   name="confirm-password" required><br><br>
        </fieldset>
        
        <fieldset>
            <legend>Personal Information</legend>
            
            <label for="dob">Date of Birth:</label><br>
            <input type="date" id="dob" name="dob" required><br><br>
            
            <label>Gender:</label><br>
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Male</label><br>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label><br>
            <input type="radio" id="other" name="gender" value="other">
            <label for="other">Other</label><br><br>
        </fieldset>
        
        <fieldset>
            <legend>Interests</legend>
            
            <input type="checkbox" id="sports" name="interests" value="sports">
            <label for="sports">Sports</label><br>
            
            <input type="checkbox" id="music" name="interests" value="music">
            <label for="music">Music</label><br>
            
            <input type="checkbox" id="reading" name="interests" value="reading">
            <label for="reading">Reading</label><br>
            
            <input type="checkbox" id="tech" name="interests" value="tech">
            <label for="tech">Technology</label><br><br>
        </fieldset>
        
        <fieldset>
            <legend>Location</legend>
            
            <label for="country">Country:</label><br>
            <select id="country" name="country" required>
                <option value="">Select a country</option>
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="australia">Australia</option>
                <option value="other">Other</option>
            </select><br><br>
        </fieldset>
        
        <input type="checkbox" id="terms" name="terms" required>
        <label for="terms">I agree to the Terms and Conditions</label><br><br>
        
        <button type="submit">Register</button>
        <button type="reset">Reset Form</button>
    </form>
</body>
</html>
```

**Grading Rubric (25 points):**
- All required inputs present (10 points)
- Proper use of fieldsets and legends (5 points)
- Correct input types (5 points)
- Labels for all inputs (3 points)
- Required attributes (2 points)

---

## Common Mistakes to Watch For

### HTML Structure
- ❌ Missing DOCTYPE declaration
- ❌ Unclosed tags
- ❌ Improper nesting (e.g., `<strong><em></strong></em>`)
- ❌ Missing required attributes (alt on images, for on labels)

### Forms
- ❌ Labels not associated with inputs (missing for/id pairing)
- ❌ Wrong input types (using text instead of email)
- ❌ Missing name attributes on form elements
- ❌ Forgetting required attribute on mandatory fields

### Tables
- ❌ Not using thead, tbody, tfoot properly
- ❌ Using th for data cells instead of td
- ❌ Inconsistent column counts across rows

### Best Practices
- ❌ Not using semantic HTML
- ❌ Missing alt text on images
- ❌ Skipping heading levels (h1 to h3)
- ❌ Not adding comments for complex sections

---

## Extended Learning Activities

### For Fast Learners:
1. Combine multiple exercises into a single comprehensive page
2. Add CSS styling to improve visual appearance
3. Research and implement HTML5 semantic tags (article, section, nav)
4. Create a multi-page website with navigation between pages

### For Struggling Students:
1. Break exercises into smaller steps
2. Provide more code templates
3. Use browser developer tools to inspect HTML
4. Practice validation with W3C HTML Validator

---

## Assessment Guidelines

**Total Points: 100**

- Session 1 (Basic HTML): 30 points
- Session 2 (Media Elements): 25 points
- Session 3 (Tables & Lists): 15 points
- Session 4 (Forms): 30 points

**Grading Scale:**
- 90-100: Excellent
- 80-89: Good
- 70-79: Satisfactory
- Below 70: Needs Improvement

**Key Evaluation Criteria:**
1. Code runs without errors
2. Follows HTML5 standards
3. Uses semantic markup appropriately
4. Includes all required elements
5. Demonstrates understanding of concepts

---

**End of Answer Key**
