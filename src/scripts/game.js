import Basket from "./basket";
import Egg from "./egg";
import Rocket from "./rocket";

import blueEgg from "./assets/images/blue-egg64.png";
export default class Game {

    constructor(canvas){
        this.canvas=canvas;
        this.context=canvas.getContext('2d');
        this.basket=new Basket(400,400,10,10);
        this.egg=[];
        this.eggInterval=null;
        this.rocket=[];
        this.rocketInterval=null;
        this.score=0;
        this.raf=null;
        this.countdeath=0;
    }

    addEgg(){
        const alea = n => Math.floor(Math.random()*n);
        const x = alea(this.canvas.width-64); // 
        const iEgg= new Egg(x,0);
        this.egg.push(iEgg);
    }

    updateScoreEgg(egg){
        if(egg.collisionWith(this.basket)){
            this.score+=100;
        }
        document.getElementById('score').textContent= this.score;
    }

    addRocket(){
        const alea = n => Math.floor(Math.random()*n);
        const heightSpawn = alea(this.canvas.height-38);
        const iRocket= new Rocket(0,heightSpawn);
        this.rocket.push(iRocket);
    }

    updateScoreRocket(rocket){
        if(rocket.collisionWith(this.basket)){
            this.score-=500;
            this.countdeath+=1;
        }
        document.getElementById('score').textContent= this.score;
        if(this.countdeath==1){
            document.getElementById('life-3').style.opacity=0;
        }
        else if(this.countdeath==2){
            document.getElementById('life-2').style.opacity=0;
        }
        else if(this.countdeath==3){
            document.getElementById('life-1').style.opacity=0;
            window.alert('Vous avez perdu! Les lapins ne sont pas de votre côté mais vous pouvez toujours relancer en rechargant la page!');
        }
    }



    moveAndDraw(){
        this.context.clearRect(0 ,0,this.canvas.width,this.canvas.height);
        this.basket.move(this.canvas);
        this.basket.draw(this.context);

        this.egg.forEach(elt => elt.move(this.canvas));
        this.egg = this.egg.filter(elt => (elt.y < this.canvas.height));
        this.egg.forEach(elt => (this.updateScoreEgg(elt)));
        this.egg = this.egg.filter(elt => !(elt.collisionWith(this.basket)));
        this.egg = this.egg.filter(elt => (this.rocket.filter(elmt => elt.collisionWith(elmt)).length)==0);
        this.egg.forEach(elt => elt.draw(this.context));

        this.rocket.forEach(elt => elt.move(this.canvas));
        this.rocket = this.rocket.filter(elt => (elt.x < this.canvas.width));
        this.rocket.forEach(elt => (this.updateScoreRocket(elt)));
        this.rocket = this.rocket.filter(elt => !(elt.collisionWith(this.basket)));
        this.rocket.forEach(elt => elt.draw(this.context));
        console.log(this.rocket);

        this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
    }

    keyDownActionHandler(event) {
        switch (event.key) {
            case "ArrowLeft":
            case "Left":
                this.basket.moveLeft();
                break;
            case "ArrowRight":
            case "Right":
                this.basket.moveRight();
                break;
            case "ArrowUp":
            case "Up":
                this.basket.moveUp();
                break;
            case "ArrowDown":
            case "Down":
                this.basket.moveDown();
                break;
            default: return;
        }
        event.preventDefault();
    }

    keyUpActionHandler(event) {
        switch (event.key) {
            case "ArrowLeft":
            case "Left":
                this.basket.stopMoving();
                break;
            case "ArrowRight":
            case "Right":
                this.basket.stopMoving();
                break;
            case "ArrowUp":
            case "Up":
                this.basket.stopMoving();
                break;
            case "ArrowDown":
            case "Down":
                this.basket.stopMoving();
                break;
            default: return;
        }
        event.preventDefault();
    }

    /* start the animation or stop it if previously running */
    startAndStop() {
        if(this.raf==null){
            this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
            this.eggInterval= setInterval(this.addEgg.bind(this),1000);
            this.rocketInterval= setInterval(this.addRocket.bind(this),2000);
        }
    }
}



