# HTML

HTML stands for "HyperText Markup Language". HTML provides the "structure" of a webpage.

HTML elements have an opening tag, closing tag, and zero to many attributes

```html
<!-- A standard HTML element -->
<div id="main" class="center">Hello, world!</div>
<!-- A self-closing element -->
<img src="./path/to/image.jpg" width="300"/>
```

Type out a webpage element by element. You'll learn more if you don't copy the examples!

Doctype tells the browser what version of HTML you're writing.

```html
<!-- HTML 5 doctype -->
<!DOCTYPE html>
```

The `<html>` tag wraps all other tags.

```html
<!DOCTYPE html>
<!-- The root of my DOM tree -->
<html>
  <!-- All other elements go here -->
</html>
```

The `<head>` tag contains page metadata. `<title>` is the text that appears in the browser tab.

```html
<!DOCTYPE html>
<html>
  <!-- Metadata goes here -->
  <head>
    <!-- This appears in the browser tab -->
    <title>My First Website</title>
  </head>
</html>
```

We'll put more things in the `<head>` later!

The `<body>` tag contains all the page content. Let's start with an `<h1>` (heading) tag:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Website</title>
  </head>
  <!-- Body content goes here -->
  <body>
    <!-- Classic first webpage! -->
    <h1>Hello, world!</h1>
  </body>
</html>
```

(From now on examples are assumed to be placed in the `<body>`)

## Styled Tags

The following HTML tags come with default styles and spacing.

There are actually six different heading tags:

```html
<!-- Each one gets smaller -->
<h1>Hello, world!</h1>
<h2>Header 2</h2>
<h3>Header 3</h3>
<h4>Header 4</h4>
<h5>Header 5</h5>
<h6>Header 6</h6>
```

Text content will likely go in a `<p>` (paragraph) tag. These provide a margin around the content.

```html
<!-- There will be some spacing between each line of text -->
<p>The quick brown fox jumps over the lazy dog</p>
<p>Lorem ipsum dolor sit amet and the rest</p>
```

You can link to other pages, or hop around the current page, using the `<a>` (anchor) tag:

```html
<a href="#section-id">Jump to Section</a>
<a href="http://google.com">Go to Google</a>
<a href="mailto:blcentra@gmail.com">Email Me</a>
```

Usually you'll want to style text with CSS instead of HTML, but you can do some basic things using tags:

```html
<p><b>Bold</b> not bold <strong>also bold</strong></p>
<p><i>Italic</i> not italic <em>also italic</em></p>
<p><u>Underline</u> not underline</p>
```

You can create bulleted ("unordered") lists with `<ul>` and numbered ("ordered") lists with `<ol>`. `<li>` is used by both for creating list items.

```html
<!-- Bulleted (or "unordered") list -->
<p>Things To Do:</p>
<ul>
  <li>Learn HTML</li>
  <li>Play Gaga Ball</li>
  <li>Swim in the lake</li>
</ul>
<!-- Numbered (or "ordered") list -->
<p>Favorite Foods</p>
<ol>
  <li>Chicken Patties</li>
  <li>Breakfast Bars</li>
  <li>Cookies:
    <!-- You can nest lists! -->
    <ol>
      <li>Oreo's</li>
      <li>Chips Ahoy</li>
      <li>Nutter Butters</li>
    </ol>
  </li>
</ol>
```

You can create tables with a `<table>` tag. Use `<tr>` to create new rows and `<td>` for each column within a row. Use `<th>` instead of a `<td>` for a heading.

```html
<!-- Only use tables for tabular data, not for page layout -->
<table>
  <tr>
    <th></th>
    <th>1</td>
    <th>2</td>
    <th>3</td>
  </tr>
  <tr>
    <th>A</th>
    <td>A1</td>
    <td>A2</td>
    <td>A3</td>
  </tr>
  <tr>
    <th>B</th>
    <td>B1</td>
    <td>B2</td>
    <td>B3</td>
  </tr>
  <tr>
    <th>C</th>
    <td>C1</td>
    <td>C2</td>
    <td>C3</td>
  </tr>
</table>
```

What would the internet be without images? Use an `<img>` tag with a `src` attribute set to the URL or path to the image you want to display.

(Images are "self-closing" tags - there is no `</img>` because an image can't contain other content).

```html
<!-- Loading an image by a relative path -->
<img src="./cat.jpg" />
<!-- Loading an image from a URL -->
<img src="https://purr.objects-us-west-1.dream.io/i/SkeSE.jpg" />
```

Forms can be used to accept user input of various kinds. There is a `<form>` tag, but you don't really need it unless you're doing old-school server communication (or maybe for styling purposes). You can interact with form elements directly with JavaScript.

Most fields are defined using an `<input>` tag (also self-closing) with a `type` attribute - text, radio, checkbox, etc. Buttons can be defined with a `<button>`, dropdowns can be defined with a `<select>`, and large text boxes can be defined with `<textarea>`. You can associate text with form fields using a `<label>` - if the `name` attributes match, clicking a label will also engage the form field!

```html
<!-- Wrapping in a `<form>` tag is optional nowadays-->
<!-- Use 'action="path/to/handler.php"' and 'method="POST"' attributes for old-school form submission -->
<form>
  <!-- Text input -->
  <label for="person-name">Your name:</label>
  <input type="text" name="person-name" placeholder="Your name" />
  <br>
  <!-- Radio buttons (select one) -->
  <label for="shirt-size">Shirt size:</label>
  <input type="radio" name="shirt-size" value="small">
  <input type="radio" name="shirt-size" value="medium">
  <input type="radio" name="shirt-size" value="large">
  <input type="radio" name="shirt-size" value="x-large">
  <br>
  <!-- Checkboxes (select many) -->
  <label for="shirt-groups">Logos on shirt:</label>
  <input type="checkbox" name="shirt-groups" value="camp-fitch"/>
  <input type="checkbox" name="shirt-groups" value="tech-focus"/>
  <input type="checkbox" name="shirt-groups" value="first-mates-club"/>
  <br>
  <!-- Number input -->
  <label for="shirt-count"># of Shirts:</label>
  <input type="number" name="shirt-count"/>
  <br>
  <!-- Dropdown (select one) -->
  <label for="shirt-color">Shirt color:</label>
  <select name="shirt-color">
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="green">Green</option>
  </select>
  <br>
  <!-- Textarea -->
  <label for="comments">Comments:</label>
  <textarea name="comments" rows="3" cols="20" placeholder="Thanks a ton!"></textarea>
  <br>
  <!-- Buttons -->
  <button type="button">Submit Order!</button>
  <br>
  <!-- Use a "submit" button for old-school form submission -->
  <label for="submit">Submit (the old way)!</label>
  <input type="submit" name="submit" value="Submit" />>
</form>
```

## Unstyled Tags

The following HTML tags do NOT come with default styles or spacing. You can use CSS to style these elements exactly as you like!

To create arbitrary blocks of content, create a `<div>`:

```html
<!-- "id" attributes are unique, "class" attributes can be reused. -->
<!-- More on these when we cover CSS! -->
<div class="row">
  <div id="blue" class="column">
    <p>Lorem ipsum dolor sit amet and the rest</p>
  </div>
  <div id="red" class="column">
    <p>The quick brown fox jumps over the lazy dog</p>
  </div>
</div>
```

To style inline content (text within other elements), use a `<span>`:

```html
<!-- spans can wrap any number of characters, or even none at all! -->
<p>The <span class="blue">quick brown fox</span> jumped over the <span class="red">lazy dog</span></p>
```

In HTML5 there are many "semantic" tags - tags that behave like `<div>`s but are named to better convey their purpose. These include `<header>`, `<footer>`, `<section>`, `<article>`, and `<nav>`.

```html
<!-- You could replace all semantic tags with <div>'s and this would look the same! -->
<header>
  <h3>Website</h3>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
<section id="banner">
  <h1>Welcome to Website!</h1>
</section>
<section id="main">
  <article class="blue">
    <p>Lorem ipsum dolor sit amet and the rest</p>
  </article>
  <article class="red">
    <p>The quick brown fox jumps over the lazy dog</p>
  </article>
</section>
<footer>
  <p>Copyright 2018 <a href="mailto:blcentra@gmail.com"> Ben Centra</a></p>
</footer>
```

## Exercise

Create the scaffolding for an "All About Me" website. This site should include:
* Your name in a heading tag
* A picture of yourself (we'll get you one if you need it)
* A short description of yourself
* A hyperlink to a different website
* 3 Sections:
  * "Things I Want To Learn" as a bulleted list, with 3 items
  * "My Favorite Things" as a numbered list, with 3 items
  * A "Contact Me" form that accepts a From Name, From Email, and Message
* A navigation menu to jump to the different sections
