// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
        this.isFiring = false;      // track rocket's firing status
        this.isFiringsound = true;  //track of firing stattus and when sound can play again
        this.moveSpeed = 2;         // pixels per frame
        this.sfxRocket = scene.sound.add('sfx_rocket')  // add rocket sfx
    }

    update() {
        // left/right movement
        if(!this.isFiring) { // for mouse controls
            if (mouseIn.distance > 0) {    
                if (mouseIn.x <= game.config.width - borderUISize - this.width && mouseIn.x >= borderUISize + this.width)
                this.x = mouseIn.x;
            }
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
            } 
        }
        // fire button
        if((Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) || mouseIn.buttons > 0) { // also takes into acount mouse buttons now
            this.isFiring = true;
            if (!this.sfxRocket.isPlaying && this.isFiringsound == true) {
                this.sfxRocket.play();
            }
            this.isFiringsound = false;
        } 
        // if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
        }
    }

    // reset rocket to "ground"
    reset() {
        this.isFiring = false;
        this.isFiringsound = true;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}
