class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  preload() {}

  create() {}

  update() {}
}

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {}

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