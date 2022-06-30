
export class Preloads extends Phaser.Scene {
  constructor() {
    super("Preloads");
  }

  preload() {
    this.load.image("glados", "public/assets/images/glados.png");
    this.load.image("JuegoLogo", "public/assets/images/LogoJuego.png");
    this.load.image(
      "mainmenu_bg",
      "public/assets/images/portalfondo.jpg"
    );
    this.load.image("sky", "public/assets/images/sky.png");
    this.load.image("ground", "public/assets/images/platform.png");
    this.load.image("star", "public/assets/images/cake.png");
    this.load.image("bomb", "public/assets/images/bomb.png");
    this.load.spritesheet("dude", "public/assets/images/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    // Pasa directamente a la escena del menú principal
    this.scene.start("MainMenu");
  }
}
