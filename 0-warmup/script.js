document.addEventListener('DOMContentLoaded', function() {
  // Handle the random dog generator
  var randoButton = document.getElementById('rando-button');
  var randoDoggo = document.getElementById('rando-doggo');
  function loadDoggo() {
    randoDoggo.innerHTML = 'Loading...';
    var request = new XMLHttpRequest();
    request.addEventListener('load', function() {
      const url = 'https://random.dog/' + this.responseText;
      randoDoggo.innerHTML = '';
      const img = document.createElement('img');
      img.setAttribute('src', url);
      randoDoggo.appendChild(img);
    });
    request.open('GET', 'https://random.dog/woof');
    request.send();
  }
  randoButton.addEventListener('click', loadDoggo);
  loadDoggo();

  // Handle contact form submission
  var contactSubmitBtn = document.getElementById('contact-submit');
  contactSubmitBtn.addEventListener('click', function() {
    var contactFromName = document.getElementById('contact-from-name').value;
    var contactMessage = document.getElementById('contact-message').value;
    var message = 'Message sent!';
    if (!contactFromName) {
      message = 'Missing "from name"';
    } else if (!contactMessage) {
      message = 'Missing "message"';
    }
    alert(message);
  });
});
