// Declare your variables here

function preload() {

}

function create() {
  
}

function update() {

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