var output = document.getElementById('output');
output.style.border = '1px solid black';
output.style.width = '300px';
output.style.height = '200px';

/*
* Variables, iteration, concatenation, functions, etc
*/

function write(msg) {
  output.innerHTML += msg;
  output.innerHTML += '<br>';
}

function clear() {
  output.innerHTML = '';
}

function countToN(n) {
  var str = '';
  for (var i = 1; i <= n; i++) {
    str += i + ' ';
  }
  write(str);
}

function countAdjectives() {
  var adjectives = document.getElementsByClassName('adj');
  var i = 0;
  var str = 'Adjectives: ';
  while (i < adjectives.length) {
    str += adjectives[i].innerText + ', ';
    i++;
  }
  write(str);
}

var x = 10;
var y = 2;

write(x + y);
write(x - y);
write(x * y);
countToN(10);
countAdjectives();

/*
* Todo List
*/

var todoList = document.querySelector('#list');
// Initial list of todos
var todos = [
  'Learn JavaScript',
  'Have Fun',
  'Take a Nap'
];

function addTodoItem(value) {
  var item = document.createElement('li');
  var text = document.createTextNode(value);
  item.appendChild(text);
  todoList.appendChild(item);
}

// Add initial todos
todos.forEach(function(todo) {
  addTodoItem(todo);
});

var newItem = document.querySelector('input[type="text"]');
var insertItem = document.querySelector('#insertItem');

// Add a new todo item when the button is pressed
insertItem.addEventListener('click', function() {
  addTodoItem(newItem.value);
  newItem.value = '';
});
