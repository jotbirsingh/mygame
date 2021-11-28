class Bottle{
    constructor(x,y,w,h,angle){
    var options={
        isStatic: true
    }
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.angle=angle;
    this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
    this.image=loadImage("game image/download.png");
    World.add(world,this.body);
    }
    display(){
        setTimeout(() => {
            this.angle=this.angle+1 ;
         }, 1000);
         // this.angle = this.angle+1;
  
          push();
          translate(this.x, this.y);
  
          rotate(this.angle);
         // this.angle = this.angle+1;
         
          image(this.image,0,0,this.w,this.h);
                  pop();
      }

}