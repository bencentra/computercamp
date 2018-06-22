document.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var canvasWidth = 600;
  var canvasHeight = 400;

  var paddleWidth = 25;
  var paddleHeight = 100;
  var paddleSpeed = 7;

  var ballSize = 15;
  var ballSpeed = 3;

  var leftScore = 0;
  var rightScore = 0;

  function makeRect(x, y, w, h, c, s) {
    return {
      x: x ,
      y: y,
      width: w,
      height: h,
      color: c,
      speed: s,
      draw: function() {
        // Collide with the top and bottom wall
        if (this.y < 0) {
          this.y = 0;
        } else if ((this.y + this.height) > canvasHeight) {
          this.y = canvasHeight - this.height;
        }
        // Draw the rectangle
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
      }
    }
  }

  var leftPaddle = makeRect(20, 20, paddleWidth, paddleHeight, '#bc0000', paddleSpeed);
  var rightPaddle = makeRect((canvasWidth - paddleWidth - 20), 20, paddleWidth, paddleHeight, '#0000bc', paddleSpeed);
  var ball = makeRect(
    (canvasWidth/2 - ballSize/2),
    (canvasHeight/2 - ballSize/2),
    ballSize,
    ballSize,
    '#00bc00',
    ballSpeed
  );
  function resetBall() {
    // Put the ball in the center
    ball.x = (canvasWidth/2 - ballSize/2);
    ball.y = (canvasHeight/2 - ballSize/2);
    // Define a speed for each ball direction
    ball.speedX = ballSpeed;
    ball.speedY = ballSpeed;
    // Randomize the starting direction
    if (Math.random() > 0.5) {
      ball.speedX *= -1;
    }
    if (Math.random() > 0.5) {
      ball.speedY *= -1;
    }
  }
  function bounceBall() {
    // Awlways invert X direction and speed up
    ball.speedX *= -1.1;
    // Add some "spin" to the ball depending on which keys are down
    if (keys.W) {
      ball.speedY -= 1;
    }
    if (keys.S) {
      ball.speedY += 1;
    }
    if (keys.UP) {
      ball.speedY -= 1;
    }
    if (keys.DOWN) {
      ball.speedY += 1;
    }
  }
  // Customize the ball's draw behavior
  ball.draw = function() {
    // Collide with the top and bottom wall
    if (this.y < 0 || (this.y + this.height) > canvasHeight) {
      this.speedY *= -1;
    }
    // Move the ball
    ball.x += ball.speedX;
    ball.y += ball.speedY;
    // Collide with the paddles
    if ((ball.x <= leftPaddle.x + leftPaddle.width) &&
        (ball.y <= leftPaddle.y + leftPaddle.height) &&
        (ball.y + ball.height > leftPaddle.y)) {
      bounceBall();
    }
    if ((ball.x + ball.width >= rightPaddle.x) &&
        (ball.y <= rightPaddle.y + rightPaddle.height) &&
        (ball.y + ball.height > rightPaddle.y)) {
      bounceBall();
    }
    // Draw the rectangle
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  // Key Codes
  var W = 87;
  var S = 83;
  var UP = 38;
  var DOWN = 40;

  var keys = {
    W: false,
    S: false,
    UP: false,
    DOWN: false
  };

  canvas.addEventListener('keydown', function(event) {
    if (event.keyCode === W) {
      keys.W = true;
    } else if (event.keyCode === S) {
      keys.S = true;
    } else if (event.keyCode === UP) {
      keys.UP = true;
    } else if (event.keyCode === DOWN) {
      keys.DOWN = true;
    } else {
      // Unsupported key!
    }
  });

  canvas.addEventListener('keyup', function(event) {
    if (event.keyCode === W) {
      keys.W = false;
    } else if (event.keyCode === S) {
      keys.S = false;
    } else if (event.keyCode === UP) {
      keys.UP = false;
    } else if (event.keyCode === DOWN) {
      keys.DOWN = false;
    } else {
      // Unsupported key!
    }
  });

  function erase() {
    context.fillStyle = '#FFFFFF';
    context.fillRect(0, 0, canvasWidth, canvasHeight);
  }

  var y = 0;

  function draw() {
    erase();
    // Handle keyboard input
    if (keys.W) {
      leftPaddle.y -= leftPaddle.speed;
    }
    if (keys.S) {
      leftPaddle.y += leftPaddle.speed;
    }
    if (keys.UP) {
      rightPaddle.y -= rightPaddle.speed;
    }
    if (keys.DOWN) {
      rightPaddle.y += rightPaddle.speed;
    }
    // Check to see if someone scored
    if (ball.x <= leftPaddle.x) {
      rightScore++;
      resetBall();
    }
    if (ball.x + ball.width > rightPaddle.x + rightPaddle.width) {
      leftScore++;
      resetBall();
    }
    // Draw the paddles
    leftPaddle.draw();
    rightPaddle.draw();
    ball.draw();
    // Keep drawing
    window.requestAnimationFrame(draw);
  }

  resetBall();
  draw();
  canvas.focus();
});
