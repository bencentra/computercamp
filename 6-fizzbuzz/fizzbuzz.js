document.addEventListener('DOMContentLoaded', function() {
  var output = document.getElementById('output');

  function print(msg) {
    output.innerHTML += '<p>' + msg + '</p>';
  }

  function fizzBuzz() {
    output.innerHTML = '';
    for (var i = 1; i <= 100; i++) {
      var str = '';
      if (i % 3 === 0) {
        str += 'Fizz';
      }
      if (i % 5 === 0) {
        str += 'Buzz';
      }
      if (str === '') {
        str = i;
      }
      print(str);
    }
  }
  document.getElementById('basic').addEventListener('click', fizzBuzz);

  function fizzBuzzPlusPlus() {
    output.innerHTML = '';
    var start = parseInt(document.getElementById('start').value);
    var end = parseInt(document.getElementById('end').value);
    var inc = parseInt(document.getElementById('inc').value);
    var rules = {
      'Fizz': 3,
      'Buzz': 5,
      'Woof': 7
    };
    for (var i = start; i < end; i += inc) {
      var str = '';
      Object.keys(rules).forEach(function(rule) {
        var num = rules[rule];
        if (i % num === 0) {
          str += rule;
        }
      });
      if (str === '') {
        str = i;
      }
      print(str);
    }
  }
  document.getElementById('plusplus').addEventListener('click', fizzBuzzPlusPlus);
});
