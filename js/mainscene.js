
import { Balls } from './balls.js';
export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    init() { 
    }

    preload() {
        this.load.spritesheet('balls', './images/Balls.png',
       { 
           frameWidth: 128,
           frameHeight: 32
    })
}

    create() { 
        this.ballsnumber = 200;


        this.balls = new Balls ( 
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            'balls', 1, 2, 3, 
        

        )
        
        this.scoreText = this.add.text(this.game.config.width * 0.5, 100, `${this.ballsnumber}`,
        {
            fontFamily: 'Arial',
            fontSize: 64    ,
            color: "#ffff",
            align: 'center'
        }
        )
    }


    update(time) {
    }
}