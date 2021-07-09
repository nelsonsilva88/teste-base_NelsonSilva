export class Balls extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture,) {
        super(scene, x, y, texture, );

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        this.setBounce(1, 1);

        
        
 
        //this.setVelocity(-velocity ,-200);
    
       // this.setVelocity(velocity ,200);
    }
        }
  

