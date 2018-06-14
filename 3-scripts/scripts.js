// // FizzBuzz!
// for (var i = 1; i <= 100; i++) {
//   var out = ''
//   if (i % 3 === 0) {
//     out += 'Fizz';
//   }
//   if (i % 5 === 0) {
//     out += 'Buzz';
//   }
//   if (!out.length) {
//     out = i;
//   }
//   console.log(out);
// }

var output = document.getElementById('output');
console.log(output);
output.style.width = '300px';
output.style.height = '200px';
output.style.border = '1px solid black';

function write(msg) {
  output.innerHTML += msg;
  output.innerHTML += '<br>';
}

write('test');

function countToN(n) {
  var str = '';
  for (var i = 1; i <= n; i++) {
    str += i + ' ';
  }
  write(str);
}

countToN(10);

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

function countAdjectives() {
  var adjectives = document.getElementsByClassName('adj');
  return adjectives.length;
}

write('Adjectives: ' + countAdjectives());


var todolist = JSON.parse(window.localStorage.getItem('todolist')) || [];
var todocount = 0;

var list = document.querySelector('#list');
function addTodoItem(value) {
  var item = document.createElement('li');
  var text = document.createTextNode(value);
  item.appendChild(text);
  list.appendChild(item);
  item.setAttribute('data-id', todocount);
  todocount++;
  item.addEventListener('click', function() {
    todolist.splice(item.getAttribute('data-id'), 1);
    list.removeChild(item);
    window.localStorage.setItem('todolist', JSON.stringify(todolist));
  });
}

var input = document.querySelector('input[type="text"]');
var button = document.querySelector('#insertItem');

function handleNewTodo(event) {
  if (!event.keyCode || event.keyCode === 13) {
    if (input.value.trim() === '') {
      return;
    }
    var newTodo = input.value;
    addTodoItem(newTodo);
    todolist.push(newTodo);
    window.localStorage.setItem('todolist', JSON.stringify(todolist));
    input.value = '';
  }
}

button.addEventListener('click', handleNewTodo);

input.addEventListener('keydown', handleNewTodo);

for (var i = 0; i < todolist.length; i++) {
  addTodoItem(todolist[i]);
}
