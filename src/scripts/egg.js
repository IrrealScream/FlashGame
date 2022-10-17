import Mobile from "./mobile";

import blueEgg from "./assets/images/blue-egg64.png";
import greenEgg from "./assets/images/green-egg64.png";
import yellowEgg from "./assets/images/yellow-egg64.png";

const eggTab=[blueEgg,greenEgg,yellowEgg];

export default class Egg extends Mobile{

    constructor(x,y){
        const random = (Math.floor(Math.random()*3))
        super(x,y,0,4,eggTab[random]);
    }
}