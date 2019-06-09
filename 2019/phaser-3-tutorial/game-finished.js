// Declare your variables here
let platforms;
let player;
let stars;
let bombs;
let cursors;
let score = 0;
let scoreText;
let gameOver = false;

const playerVelocity = 160;

// Helper function for adding new bombs
function addBomb(player) {
  const x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
  const bomb = bombs.create(x, 16, 'bomb');
  bomb.setBounce(1);
  bomb.setCollideWorldBounds(true);
  bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
}

// Callback function for collecting stars
function collectStar (player, star) {
  // Remove the star
  star.disableBody(true, true);
  // Increase the score
  score += 10;
  scoreText.setText('Score: ' + score);
  // If all the stars have been collected
  if (stars.countActive(true) === 0) {
    // Reset the stars if they're all collected
    stars.children.iterate(function (child) {
      child.enableBody(true, child.x, 0, true, true);
    });
    // Add a bomb
    addBomb(player);
  }
}

// Callback function for hitting a bomb
function hitBomb (player, bomb) {
  bomb.disableBody(true, true);
  this.physics.pause();
  player.setTint(0xff0000);
  player.anims.play('turn');
  gameOver = true;
}

function preload() {
  // Preload image assets
  this.load.image('bomb', 'assets/bomb.png');
  this.load.image('platform', 'assets/platform.png');
  this.load.image('sky', 'assets/sky.png');
  this.load.image('star', 'assets/star.png');
  // Preload player sprite
  this.load.spritesheet(
    'dude', 
    'assets/dude.png',
    { frameWidth: 32, frameHeight: 48 }
  );
}

function create() {
  // Add the sky in the middle of the stage
  this.add.image(400, 300, 'sky');
  // Add some platforms
  platforms = this.physics.add.staticGroup();
  platforms.create(400, 568, 'platform').setScale(2).refreshBody();
  platforms.create(600, 400, 'platform');
  platforms.create(50, 250, 'platform');
  platforms.create(750, 220, 'platform');
  // Add the player
  player = this.physics.add.sprite(100, 450, 'dude');
  player.setBounce(0.2);
  player.setCollideWorldBounds(true); 
  this.physics.add.collider(player, platforms);
  // Create the player animations
  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1, // Loop
  });
  this.anims.create({
    key: 'turn',
    frames: [ { key: 'dude', frame: 4 } ],
    frameRate: 20
  });
  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
  });
  // Set up keyboard controls
  cursors = this.input.keyboard.createCursorKeys();
  // Add the stars
  stars = this.physics.add.group({
    key: 'star',
    repeat: 11,
    setXY: { x: 12, y: 0, stepX: 70 }
  });
  stars.children.iterate(function (child) {
    child.setBounceY(Phaser.Math.FloatBetween(0.5, 0.9));
  });
  // Collide and interact with the stars
  this.physics.add.collider(stars, platforms);
  this.physics.add.overlap(player, stars, collectStar, null, this);
  // Add the bombs
  bombs = this.physics.add.group();
  this.physics.add.collider(bombs, platforms);
  this.physics.add.collider(player, bombs, hitBomb, null, this);
  // Display the score
  scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000000' });
}

function update() {
  // Bail if the game is over
  if (gameOver) {
    return;
  }
  // Move the player
  if (cursors.left.isDown) {
    player.setVelocityX(playerVelocity * -1);
    player.anims.play('left', true);
  } else if (cursors.right.isDown) {
    player.setVelocityX(playerVelocity);
    player.anims.play('right', true);
  } else {
    player.setVelocityX(0);
    player.anims.play('turn');
  }
  // Jump if touching the ground
  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(playerVelocity * -2);
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: { 
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: { preload, create, update },
};

const game = new Phaser.Game(config);