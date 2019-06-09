const PLAYER_SPEED = 250;
let score = 0;

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  create() {
    this.add.text(250, 200, 'Collect The Squares', { font: '32px Arial', fill: '#ffffff' });
    this.add.text(130, 250, 'Use arrow keys to move.Collect the green squares, avoid the red squares!', { font: '16px Arial', fill: '#ffffff' });
    this.add.text(320, 300, 'Click to Start!', { font: '24px Arial', fill: '#ffffff' });
    this.input.once('pointerup', function () {
      this.scene.start('GameScene');
    }, this);
  }
}

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
    this.player = null;
    this.cursors = null;
    this.scoreText = null;
    this.goodies = null;
    this.baddies = null;
  }

  createGoodies() {
    const amount = Phaser.Math.Between(3, 5);
    for (let i = 0; i < amount; i++) {
      const x = Phaser.Math.Between(50, 750);
      const y = Phaser.Math.Between(50, 550);
      const goodie = this.add.rectangle(x, y, 25, 25, 0x00bc00);
      this.tweens.add({
        targets: goodie,
        angle: 135,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut'
      });
      this.goodies.add(goodie);
    }
  }

  createBaddie() {
    const x = Phaser.Math.Between(50, 750);
    const y = Phaser.Math.Between(50, 550);
    const baddie = this.physics.add.existing(this.add.rectangle(x, y, 35, 35, 0xbc0000));
    this.baddies.add(baddie);
    const directionX = Phaser.Math.FloatBetween(0, 1) > 0.5 ? 1 : -1;
    const directionY = Phaser.Math.FloatBetween(0, 1) > 0.5 ? 1 : -1;
    baddie.body.setVelocityX(100 * directionX);
    baddie.body.setVelocityY(100 * directionY);
    baddie.body.set
    this.tweens.add({
      targets: baddie,
      scaleX: 0.75,
      scaleY: 0.75,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
  }

  collectGoodie(player, goodie) {
    this.goodies.remove(goodie, true, true);
    score += 10;
    this.scoreText.setText(`Score: ${score}`);
    if (this.goodies.countActive(true) === 0) {
      this.createGoodies();
      this.createBaddie();
    }
  }

  collideBaddie(player, baddie) {
    this.scene.start('EndScene');
  }

  create() {
    // Set up arrow key input
    this.cursors = this.input.keyboard.createCursorKeys();
    // Create the player
    const playerRect = this.add.rectangle(400, 300, 50, 50, 0x0000bc);
    this.player = this.physics.add.existing(playerRect);
    this.player.body.setCollideWorldBounds(true);
    // Create the first batch of squares to collect
    this.goodies = this.physics.add.staticGroup();
    this.createGoodies();
    this.physics.add.overlap(this.player, this.goodies, this.collectGoodie, null, this);
    // Create the baddies and set their properties
    this.baddies = this.physics.add.group({
      collideWorldBounds: true,
      bounceX: 1,
      bounceY: 1,
    });
    this.physics.add.overlap(this.player, this.baddies, this.collideBaddie, null, this);
    this.createBaddie();
    // Display the score
    this.scoreText = this.add.text(10, 10, 'Score: 0', { font: '24px Arial', fill: '#ffffff' });
  }

  update() {
    this.player.body.setVelocityY(0);
    this.player.body.setVelocityX(0);
    if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(PLAYER_SPEED * -1);
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(PLAYER_SPEED);
    } else if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(PLAYER_SPEED * -1);
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(PLAYER_SPEED);
    }
  }
}

class EndScene extends Phaser.Scene {
  constructor() {
    super({ key: 'EndScene' });
  }

  create() {
    this.add.text(290, 200, `Final Score: ${score}`, { font: '32px Arial', fill: '#ffffff' });
    this.add.text(320, 300, 'Click to retry!', { font: '24px Arial', fill: '#ffffff' });
    this.input.once('pointerup', function () {
      score = 0;
      this.scene.start('GameScene');
    }, this);
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800, 
  height: 600,
  backgroundColor: '#000000',
  physics: {
    default: 'arcade',
    arcade: { 
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: [MenuScene, GameScene, EndScene]
};

const game = new Phaser.Game(config);