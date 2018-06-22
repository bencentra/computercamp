/*
Starting DOM:

<input type="text" id="newTodo" placeholder="Amazing thing..." />
<button id="addTodo">Add Todo</button>
<ul id="list"></ul>
*/

// PART 1 - Hook up the text field and button

function part1() {
  // References to our DOM elements
  var list = document.getElementById('list');
  var newTodo = document.getElementById('newTodo');
  var addButton = document.getElementById('addTodo');

  // Add an event handler for clicking on the Add Todo button
  addButton.addEventListener('click', function() {
    // Get the text for the new todo from the input field
    var value = newTodo.value.trim();
    // Don't insert an empty string
    if (value.length === 0) {
      return;
    }
    // Log the value for now
    console.log('value', value);
    // Reset the input field to empty
    newTodo.value = '';
  });
}

// PART 2 - Add the new item to the DOM

function part2() {
  var list = document.getElementById('list');
  var newTodo = document.getElementById('newTodo');
  var addButton = document.getElementById('addTodo');

  // Reusable function to add new todo items to the DOM
  function addItemToDOM(todo) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(todo));
    list.appendChild(li);
  }

  addButton.addEventListener('click', function() {
    var value = newTodo.value.trim();
    if (value.length === 0) {
      return;
    }
    // Add the new todo item to the DOM
    addItemToDOM(value);
    newTodo.value = '';
  });
}

// PART 3 - Remove an item on click

function part3() {
  var list = document.getElementById('list');
  var newTodo = document.getElementById('newTodo');
  var addButton = document.getElementById('addTodo');

  function addItemToDOM(todo) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(todo));
    list.appendChild(li);
    // Remove the item from the list when it is clicked
    li.addEventListener('click', function(event) {
      list.removeChild(li);
    });
  }

  addButton.addEventListener('click', function() {
    var value = newTodo.value.trim();
    if (value.length === 0) {
      return;
    }
    addItemToDOM(value);
    newTodo.value = '';
  });
}

// PART 4 - Support hitting "enter" to insert a todo item

function part4() {
  var list = document.getElementById('list');
  var newTodo = document.getElementById('newTodo');
  var addButton = document.getElementById('addTodo');

  function addItemToDOM(todo) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(todo));
    list.appendChild(li);
    li.addEventListener('click', function(event) {
      list.removeChild(li);
    });
  }

  // New reusable function for handling user input when adding a new todo
  function handleInput() {
    var value = newTodo.value.trim();
    if (value.length === 0) {
      return;
    }
    addItemToDOM(value);
    newTodo.value = '';
  }

  // The handleInput function can be used as-is as the event handler for clicks!
  addButton.addEventListener('click', handleInput);

  // After checking for the enter key, we can call handleInput() for keydown events
  newTodo.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      handleInput();
    }
  });
}

// PART 5 - Store todo's in an array

function part5() {
  // Store the todo items in an array
  var todos = ['example one', 'example two'];
  var list = document.getElementById('list');
  var newTodo = document.getElementById('newTodo');
  var addButton = document.getElementById('addTodo');

  function addItemToDOM(todo) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(todo));
    list.appendChild(li);
    li.addEventListener('click', function(event) {
      // Find the array index that corresponds to the clicked item
      var position = -1;
      for (var i = 0; i < list.children.length; i++) {
        if (list.children[i] === li) {
          position = i;
        }
      }
      // Remove that item from the array AND the DOM
      todos.splice(position, 1);
      list.removeChild(li);
    });
  };

  function handleInput() {
    var value = newTodo.value;
    if (value.length === 0) {
      return;
    }
    newTodo.value = '';
    // Add the new todo item to the array AND the DOM
    todos.push(value);
    addItemToDOM(value);
  }

  addButton.addEventListener('click', handleInput);

  newTodo.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      handleInput();
    }
  });

  // Add any hard-coded todo items to the DOM
  for (var i = 0; i < todos.length; i++) {
    addItemToDOM(todos[i]);
  }
}

// PART 6 - Read and write todos to localStorage for persistence

function part6() {
  // Load todo array from localStorage, or default to an empty array
  var todos = JSON.parse(localStorage.getItem('todos')) || [];
  var list = document.getElementById('list');
  var newTodo = document.getElementById('newTodo');
  var addButton = document.getElementById('addTodo');

  function addItemToDOM(todo) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(todo));
    list.appendChild(li);
    li.addEventListener('click', function(event) {
      var position = -1;
      for (var i = 0; i < list.children.length; i++) {
        if (list.children[i] === li) {
          position = i;
        }
      }
      todos.splice(position, 1);
      // Write the updated todos array to localStorage
      localStorage.setItem('todos', JSON.stringify(todos));
      list.removeChild(li);
    });
  };

  function handleInput() {
    var value = newTodo.value;
    if (value.length === 0) {
      return;
    }
    newTodo.value = '';
    todos.push(value);
    // Write the updated todos array to localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
    addItemToDOM(value);
  }

  addButton.addEventListener('click', handleInput);

  newTodo.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      handleInput();
    }
  });

  for (var i = 0; i < todos.length; i++) {
    addItemToDOM(todos[i]);
  }
}

// FULL SOLUTION

function complete() {
  var todos = JSON.parse(localStorage.getItem('todos')) || [];
  var list = document.getElementById('list');
  var newTodo = document.getElementById('newTodo');
  var addButton = document.getElementById('addTodo');

  function addItemToDOM(todo) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(todo));
    list.appendChild(li);
    li.addEventListener('click', function(event) {
      var position = -1;
      for (var i = 0; i < list.children.length; i++) {
        if (list.children[i] === li) {
          position = i;
        }
      }
      todos.splice(position, 1);
      localStorage.setItem('todos', JSON.stringify(todos));
      list.removeChild(li);
    });
  };

  function handleInput() {
    var value = newTodo.value;
    if (value.length === 0) {
      return;
    }
    newTodo.value = '';
    todos.push(value);
    localStorage.setItem('todos', JSON.stringify(todos));
    addItemToDOM(value);
  }

  addButton.addEventListener('click', handleInput);

  newTodo.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      handleInput();
    }
  });

  for (var i = 0; i < todos.length; i++) {
    addItemToDOM(todos[i]);
  }
}

// part1();
// part2();
// part3();
// part4();
// part5();
part6();
// complete();
