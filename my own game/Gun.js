class Gun{
    constructor(x,y,w,h,angle){
        var option={
            isStatic: true
            
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.angle=angle;
        //this.body =Bodies.rectangle(this.x,this.y,this.w,this.h,option);
        this.image=loadImage("game image/gun.jpg");
       // World.add(world,this.body);

    }

    display(){
      //  var pos = this.body.position;
       // var angle =this.body.angle;
      // setTimeout(() => {
        //  this.angle=this.angle+1 ;
       //}, 1000);
       // this.angle = this.angle+1;

        push();
        translate(this.x, this.y);

       // rotate(this.angle);
       // this.angle = this.angle+1;
       imageMode (CENTER);
        image(this.image,0,0,this.w,this.h);
                pop();
     
    }
}