import Mobile from "./mobile";

import rocket from "./assets/images/rocket128.png";

export default class Rocket extends Mobile{

    constructor(x,y){
        super(x,y,6,0,rocket);
    }
}