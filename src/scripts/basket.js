import Mobile from "./mobile";
import MoveState from "./moveState";

import basketImgSrc from "./assets/images/basket128.png";

export default class Basket extends Mobile{

    constructor(x,y,deltaX,deltaY){
        super(x,y,deltaX,deltaY,basketImgSrc);
        this.moving=MoveState.NONE;
    }

    moveLeft(){
        this.moving=MoveState.LEFT;
    }

    moveRight(){
        this.moving=MoveState.RIGHT;
    }

    moveUp(){
        this.moving=MoveState.UP;
    }

    moveDown(){
        this.moving=MoveState.DOWN;
    }

    stopMoving(){
        this.moving = MoveState.NONE;
    }

    move(canvas){
        if (this.moving === MoveState.LEFT) {
            this.x = Math.max(0, this.x - this.deltaX);
        }
        if (this.moving === MoveState.RIGHT) {
            this.x = Math.min(canvas.width - this.width, this.x + this.deltaX);
        }
        if (this.moving === MoveState.UP) {
            this.y = Math.max(0, this.y - this.deltaY);
        }
        if (this.moving === MoveState.DOWN) {
            this.y = Math.min(canvas.height - this.height, this.y + this.deltaY);
        }
    }
    
}