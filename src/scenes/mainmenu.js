import Button from "../js/button.js";
export class MainMenu extends Phaser.Scene {
    constructor() {
        super("MainMenu")
    }

    create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'mainmenu_bg').setScale(1.5);
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY/1.5, 'JuegoLogo');
        const boton = new Button(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/2.5, 'Iniciar Test', this, () => {
            // Instrucción para pasar a la escena Play
            this.scene.start("Play");
        });
    }
}