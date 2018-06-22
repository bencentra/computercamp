var data = JSON.parse(localStorage.getItem('data')) || { count: 0 };
var countZone = document.getElementById('count');
var plusButton = document.getElementById('increment');
var minusButton = document.getElementById('decrement');

function updateCount() {
  if (event.target === plusButton) {
    data.count++;
  } else if (event.target === minusButton) {
    data.count--;
  }
  countZone.value = data.count;
  localStorage.setItem('data', JSON.stringify(data));
}

plusButton.addEventListener('click', updateCount);
minusButton.addEventListener('click', updateCount);

countZone.addEventListener('keydown', function() {
  if (event.keyCode === 38) { // UP
    data.count++;
  } else if (event.keyCode === 40) { // DOWN
    data.count--;
  }
  countZone.value = data.count;
});

countZone.value = data.count;
