
export default class Mobile{

    constructor(x,y,deltaX=0,deltaY=0,imgSrc){
        this.x=x;
        this.y=y;
        this.deltaX=deltaX;
        this.deltaY=deltaY;
        this.image=this.#createImage(imgSrc);
    }

    /* crée l'objet Image à utiliser pour dessiner cette balle */
    #createImage(imageSource) {
        const newImg = new Image();
        newImg.src = imageSource;
        return newImg;
    }


    get width() {
        return this.image.width;
      }
    get height() {
        return this.image.height;
      }

    draw(context){
        context.drawImage(this.image,this.x,this.y);
    }

    move(canvas){
        this.x+=this.deltaX;
        this.y+=this.deltaY;
    }

    collisionWith(mobile){
		let x1 =mobile.x;
		let y1 =mobile.y;

		let x2 =mobile.x +mobile.width;
		let y2 =mobile.y +mobile.height;

		let xp1 = this.x;
		let yp1 = this.y;

		let xp2 = this.x + this.image.height;
		let yp2 = this.y + this.image.width;

		let p1x = Math.max(x1,xp1);
		let p1y = Math.max(y1,yp1);

		let p2x = Math.min(x2,xp2);
		let p2y = Math.min(y2,yp2);

		if (p1x < p2x && p1y < p2y) {
			return true;
		}
		else {
			return false;
		}
	}
}