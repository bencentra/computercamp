# JavaScript

(This section assumes a basic familiarity with programming - variables, control flow, loops, functions, etc).

JavaScript is the primary programming language used for enhancing a website. It can be used to handle user interaction, dynamically build websites, load external data, write simple games, and much more!

JavaScript is:
* __Interpreted__ - there is no compilation step. JavaScript requires a runtime like the browser to execute. Uncaught errors will interrupt the entire script!
* __Dynamically typed__ - when declaring variables, you don't need to specify the type. You can reassign variables to different types whenever.
* __Single-threaded__ - There is only one thread used to handle everything! However there are techniques for "asynchronous" programming that provides similar benefits to multi-threaded programming.

JavaScript is an ever-evolving language. The "stable" version supported by all browsers is called "ECMAScript 5" (or ES5 for short). All code examples will use ES5 syntax, though I'll point out new syntax from ES6 and beyond where appropriate - Google Chrome and Mozilla Firefox should support it at least!

## Running JavaScript

(We assume you're running JavaScript in the browser. For command-line or server-side development, check out [Node.js](https://nodejs.org/en/))

On a webpage you can use the `<script>` tag to run JavaScript. Though it can be placed anywhere, it is usually placed in the `<head>` or, for a slight performance boost, at the end of the `<body>`:

```html
<body>
  <!-- All my markup goes here -->
  <!-- Declare an inline script -->
  <script type="text/javascript">
    // alert() displays a message in a pop-up
    alert('Hello, world!');
  </script>
</body>
```

You can also link to external script files, also using a `<script>` tag with the `src` attribute:

```html
<script type="text/javascript" src="./script.js"></script>
<script type="text/javascript" src="http://example.com/script.js"></script>
```

From here on out, we'll assume you're using an external script. All examples will just be JavaScript code.

## Declaring Variables

Variables are used to store values and references to other objects for later use. JavaScript has many "types", but all variables can store any type of value. The `var` keyword is the original word used for declaring all variables. The `=` is the assignment operator.

```js
// Number (both integers and decimals)
var x = 5;
var y = 10.73;
// String
var str = "Hello, world!";
var str2 = 'Single quotes are fine';
// Boolean (true or false)
var t = true;
var f = false;
// Arrays (lists) hold all types, including other variables
var arr = [1, 2, 'abc', str];
var arr2 = new Array();
// Objects (key/value pairs)
var obj = {
  'a': 1,
  'b': 'two',
  'c': {
    d: true
  }
};
// Null and undefined
var a = null; // Explicitly setting a value to null
var b; // No value has been set yet, so b is undefined
// Variables can be reassigned (reused)
x = 10;
str = "Some different string";
```

JavaScript has "function scoping" - variables are scoped to the global object OR the function that contains them. Unlike Java, variables declared in other blocks (`if` statements, `for` loops) are not scoped to those blocks.

ES6 has two new keywords for defining variables that are helpful in preventing errors:
* `let` is like `var` but it scopes variables to all blocks, not just functions.
* `const` is like `let`, but you can't reassign the value after it is declared.

## Numbers

All numbers - both integers and decimals (floats) - are of type Number in JavaScript.

```js
// Declaring numbers
var x = 10; // Integer
var y = 23.45; // Decimal (float)

// Arithmetic
console.log(10 + 2); // => 12
console.log(10 - 2); // => 8
console.log(10 * 2); // => 20
console.log(10 / 2); // => 5
console.log(10 % 2); // => 0 (% is "modulus", or remainder after division)

// Common math operations
console.log(Math.random()); // => a random decimal between 0 and 1
console.log(Math.abs(-5)); // => 5, "absolute value"
console.log(parseInt(10.5)); // => 10, convert decimal to integer
console.log(parseInt("10")); // => 10, convert string to integer
```

## Strings

Strings represent any text value. They are declared using the "string literal" syntax with either double or single quotes. ES6 introduces a "template string" syntax using backticks.

```js
// Declaring strings
var str = "Double quotes are cool";
var str2 = 'so are single quotes';

// String concatenation
var str3 = "Concatenation: " + str + "," + str2;
var str4 = `${str}, ${str2}, and so are template strings!`;

// Common string properties and methods
var test = "test string";
console.log(str.length); // => 11 - The number of items in the array
console.log(str[0]); // => "t"
console.log(str.replace("test", "lol")); // => "lol string"
console.log(str.replace(/t/g, "b")) // => "besb sbring"
console.log(str.split(" ")); // => ["test", "string"]
```

_JavaScript is silly_ - beware of type coercion! In some situations JavaScript will convert values to different types in order to complete an operation, instead of throwing an error.

```js
var x = 1;
var y = "1";
console.log(x + y); // => "11"
console.log(y + x); // => "11"
console.log(x == y); // => true
console.log(x === y); // => false
```

## Booleans and Comparisons

Booleans only have two possible values: `true` or `false`. Booleans are important for adding logic to your scripts.

```js
// Declaring booleans
var t = true;
var f = false;
```

You can write comparison expressions that resolve to `true` or `false`. You have all your common operators: equality (`===`), inequality (`!==`), and number ranges (`>, >=`, `<` and `<=`).

```js
// Multi-assignment!
var x = y = 2;

x === y; // => true
x !== 5; // => true
x < 5; // => true
x > 5; // => false
x >= 2; // => true
x <= 3; // => false
```

_JavaScript is silly_ - there are two equality operators! The `==` you might be used to is bad because it will compare values after coercing types. Use `===` whenever possible to compare both type and value.

```js
1 == true; // => true
1 === true: // => false
1 == '1'; // => true
1 === '1'; // => false
```

## Arrays

Arrays in JavaScript are more similar to Lists in other languages - they do not have a fixed size. They can also contain elements of any type, even mixed types. Arrays are typically declared with the "array literal" syntax: `[]`. Arrays are useful for storing collections of related data to iterate over later.

Arrays are zero-indexed. If an array has 3 items, it's `length` property is `3` but it's elements have the indexes (position) `0`, `1`, and `2`.

```js
// Arrays can be declared empty
var arr = [];
// Or pre-loaded with elements of any type
var three = 3;
var arr2 = [1, 'two', three];

// Common array methods
console.log(arr[0]); // => 1
arr.push(1); // Add an item to the end of the array
arr.unshift(0); // Add an item to the beginning of the array
console.log(arr.length); // => 2 - The number of items in the array
arr.pop(); // => 1 - remove the item at the end of the array
arr.shift(); // => 0 - remove the item at the beginning of the array
arr2.indexOf('two'); // => 1 - the index of the element "two" in the array
arr2.splice(1, 1); // Remove 1 item at index 1
```

## Objects

Objects in JavaScript are similar to Dictionaries in other languages - they are a collection of key/value pairs. They have no fixed size, and values can be of any type - even functions, arrays, and other objects! Objects are useful for storing data that fits nicely into a logical unit.

```js
// Defining a single instance of "car" by hand
var car = {
  type: "Ford",
  speed: 10,
  drive: function() {
    // More on what "this" means later
    console.log('Driving my ' + this.type + ' at ' + this.speed + 'mph');
  }
};
console.log(car.type); // => "Ford"
car.drive(); // => "Driving a Ford at speed 10"
```

## Conditional Statements

JavaScript has an `if`/`else if`/`else` statement that can be used for simple control flow:

```js
// Try changing X to different numbers and see what happens!
var x = 5;

if (x > 10) {
  console.log("Wow, that's a big number!");
} else if (x <= 0)  {
  console.log("What a small number!");
} else {
  console.log("That's a pretty standard number".);
}
```

There is also a `switch` statement that can make long if/else statements easier to read:

```js
var action = 'close';

switch (action) {
  case 'open':
    console.log('open the thing');
    break;
  case 'close':
    console.log('close the thing');
    break;
  default:
    console.log('unsupported action');
    break;
}
```

_JavaScript is silly_ - several values are considered "truthy" (`true`, `1`, non-empty strings and arrays) and some are considered "falsy" (`false`, `0`, empty strings and arrays, `null`, and `undefined`). These are great for quick checks like "is this variable defined", but can also cause bugs if used incorrectly.

```js
var x;
if (!x) {
  console.log('x is NOT defined!');
}

x = { a: 1 };
if (x) {
  console.log('x IS defined!');
}

var y = 0;
if (y) {
  console.log('y is defined but it is a falsy value...');
} else {
  console.log('...so this is the line that is actually called!');
}
```

## Loops

There are lots of ways to iterate over data in JavaScript. The two basic methods you see in other languages - `while` and `for` - are there for you.

```js
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

var arr = [1, 2, 3, 4, 5];
for (var j = 0; j < arr.length; j++) {
  console.log(j);
}
```

Arrays also expose several useful methods for iterating over values, each slightly different than the last:

```js
var arr = [1, 2, 3, 4, 5];

// Execute this function on each element in the array
arr.forEach(function(element, index) {
  console.log(`${element} is at position ${index}`);
});

// Return a new array after modifying each element
var squares = arr.map(function(element) {
  return element *= element;
}); // => [1, 4, 9, 16, 25]

// Return a new array where each element meets a condition
var evens = arr.filter(function(element) {
  return (element % 2 === 0);
});
```

You can iterate over Objects as well by extracting their keys:

```js
var obj = {
  a: 'somestring',
  b: 42,
  c: false
};

Object.keys(obj).forEach(function(key) {
  var value = obj[key]
  console.log(key, value);
});
```

## Functions

Functions are a way to group and execute related code. Functions can have a name, accept one or more parameters, and return a value. They do not need to be declared with a return type, and they can return any type of value. Functions are usually declared using the `function` keyword, though they can also be created other ways:

```js
var x = 2;
var y = 3;

// Named function, the most common way
function sum(a, b) {
  return a + b;
}
sum(x, y); // => 5

// Named function declared as a variable
var subtract = function(a, b) {
  return a - b;
};
subtract(x, y); // => -1

// Anonymous function - can't be called by name!
var product = 1;
[x, y].forEach(function(num) {
  product *= num;
});
console.log(product); // => 6

// ES6 has "arrow functions" that implicitly return if they're on one line
const divide = (a, b) => a / b;
divide(x, y); // => 0.6666666666666666

// If an arrow function has more than one line, wrap it in braces
const divisible = (a, b) => {
  if (a % b === 0) {
    return true;
  }
  return false;
};
divisible(x, y); // => false
```

## Exercise - FizzBuzz

### Part 1

The campers are playing a game called FizzBuzz. They count up from 1 to 100 and if the current number is...
* ...divisible by 3, they say "Fizz"
* ...divisible by 5, they say "Buzz"
* ...divisible by both 3 and 5, they say "FizzBuzz"
* ...divisible by neither 3 nor 5, they say the number

Write a JavaScript program that implements FizzBuzz. Each number or string should be output using `console.log` on a new line. Example output:
```
1
2
"Fizz"
4
"Buzz"
"Fizz"
7
...
14
"FizzBuzz"
16
...
```
And so on.

Hints:
* How do you check for divisiblity? What operator is required?
* How do you write a loop? How do you increment a counter?
* How do you check if a condition is met?
* How could string concatenation help simplify your solution?

### Part 2

The campers get bored easily, so they like to modify the rules of the FizzBuzz game. They might do any of the following:
* Change the starting number
* Change the ending number
* Count up by more than 1 at a time
* Add a new condition, such as: if divisible by 7 say "Woof"
* Remove an existing condition

Implement a function that plays FizzBuzz, with parameters for configuring the rules of the game.

Hints:
* What parameters do you want your function to accept?
* What data type in JavaScript is best at storing key/value pairs like our divisibility rules and output strings? How do you iterate over that data type?

## The DOM

An HTML document is represented in JavaScript by something called the "Document Object Model," or DOM for short. In the DOM, each HTML element is represented by an object nested within a tree structure like:

```
document
  -html
    - head
    - body
      - h1
      - p
      ...
```

We can interact with the DOM through the `document` object in a browser.

## Selecting DOM Elements

Let's say we have a simple list:

```html
<ul id="list">
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
  <li class="item">Item 3</li>
</li>
```

There are many ways to select DOM elements. Each method returns one element, or an array of elements.

```js
// Get a single element by ID
var list = document.getElementById('list');
// Or get the first element that matches a CSS selector
var list = document.querySelector('#list');

// Get many elements by class name
var items = document.getElementsByClassName('item');
// Or get all elements that match a CSS selector
var items = document.querySelectorAll('.list');

// Get many elements by tag name
var items = document.getElementsByTagName('li');
// Or get all elements that match a CSS selector
var items = document.querySelector('li');
```

## Event Handling

Let's say we're writing a simple counter program:

```html
<input id="count" type="text" value="0"/>
<button id="increment">Add One</button>
<button id="decrement">Minus One</button>
```

DOM elements have a method called `addEventListener` that can be used to "listen" for a specific event and call a function when the event is fired. For instance, if we wanted to listen for button clicks:

```js
var count = 0;
var countZone = document.getElementById('count');
var plusButton = document.getElementById('increment');
var minusButton = document.getElementById('decrement');

plusButton.addEventListener('click', function(event) {
  count++;
  countZone.value = count;
});

minusButton.addEventListener('click', function(event) {
  count--;
  countZone.value = count;
});
```

There are lots of events you can listen for, but the most common are probably mouse events and keyboard events. `click` is a mouse event, as are `mouseup`, `mousedown`, `mouseover`, `mouseenter`, and `mouseleave`.

Keyboard events include `keypress`, `keyup`, and `keydown`. Let's support incrementing and decrementing the counter using the up and down arrow keys:

```js
countZone.addEventListener('keydown', function(event) {
  if (event.keyCode === 38) { // UP
    count++;
    countZone.value = count;
  } else if (event.keyCode === 40) { // DOWN
    count--;
    countZone.value = count;
  }
});
```

Note that event handlers are passed an object as a parameter, typically called `event`. The `event` object contains useful information about the event that fired. Above, we use `event.keyCode` to figure out which key was pressed. We could refactor our button code to use `event.target` to know which button was pressed:

```js
function updateCount(event) {
  if (event.target === plusButton) {
    count++;
  } else if (event.target === minusButton) {
    count--;
  }
  countZone.value = count;
}

plusButton.addEventListener('click', updateCount);
minusButton.addEventListener('click', updateCount);
```

## Basic Data Storage

Let's take our counter program to the next level by storing the result across page loads. Browsers include two objects used for persisting data: `localStorage` and `sessionStorage`. They follow the same interface but `localStorage` persists even after the browser is closed (`sessionStorage` clears when the browser is closed). Be careful - all items stored with `localStorage` are converted to a String!

Let's use `localStorage` to load and persist the `count` variable:

```js
// Get the value from localStorage or, if not set, use a default
var count = parseInt(localStorage.getItem('count')) || 0;

function updateCount(event) {
  if (event.target === plusButton) {
    count++;
  } else if (event.target === minusButton) {
    count--;
  }
  countZone.value = count;
  // Persist the count in localStorage
  localStorage.setItem('count', count);
}
```

When dealing with arrays and objects, make sure to use `JSON.stringify()` before storing a value and `JSON.parse()` when reading it again. For instance:

```js
// We've replaced "count" with "data", an object with one property
var data = JSON.parse(localStorage.getItem('count')) || { count: 0 };

function updateCount(event) {
  if (event.target === plusButton) {
    data.count++;
  } else if (event.target === minusButton) {
    data.count--;
  }
  countZone.value = data.count;
  // Persist the entire data object in localStorage
  localStorage.setItem('count', JSON.stringify(data));
}
```

## Exercise - Todo List

Implement a todo list website that has the following functionality:
* A list where saved todos are displayed
* A text input field for typing a new todo item
* A button that, when clicked, adds the new item to the list
* When a list item is clicked, it gets deleted (or marked as "complete")

Hints:
* What HTML element(s) represent a list? What element represents an item inside the list?
* How do you create an HTML element using JavaScript? How do you insert it into the DOM?
* How do you listen for events on elements?
* If you wanted to store all todos in a single variable, which type might you use?

If you're looking to go above and beyond, also implement the following features:
* Hitting the "enter" key in the todo entry also inserts the item into the list
* Persist todos across page loads using `localStorage`
* Style the list using CSS - make it look pretty!
* Support adding additional todo lists on a single page.

Hints:
* What event property gets the code for the key pressed?
* What do you need to do with a value before persisting it with localStorage?
* What data type can you use to encapsulate a single todo list? What data type can you use to store multiple todo lists?

## Advanced Topics

### Constructors and "Classes"

### Function Scope

JavaScript has "function scoping" - variables are scoped to the function in which they are defined. If they are defined outside of a function, they are attached to the global object (which is `window` in a browser). When using `var`, variables are not scoped to other blocks (`if` statements, `for` loops, etc).

```js
var x = 5;
// x is attached to the window, or you can reference it directly
console.log(x);
console.log(window.x);
// Can't use y - it hasn't been defined in this scope
console.log(y); // => undefined

function example() {
  var y = 10;
  // You can use both x and y here
  console.log(x);
  console.log(y);

  // JavaScript is silly - z can be used both inside and outside of this code block
  if (y > x) {
    var z = 20;
    console.log(z);
  }
  console.log(z);
}
```

### Variable Hoisting

### `this` and Function Context
