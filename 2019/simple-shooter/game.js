let score = 0;

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  preload() {}

  create() {
    this.add.text(10, 10, 'TODO Menu', { font: '16px Arial', fill: '#ffffff' });
  }

  update() {}
}

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    this.add.image('bg', 'assets/space.png');
  }

  create() {}

  update() {}
}

class EndScene extends Phaser.Scene {
  constructor() {
    super({ key: 'EndScene' });
  }

  preload() {}

  create() {}

  update() {}
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