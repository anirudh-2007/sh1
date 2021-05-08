class Hero{
    constructor(x,y,w,h) {
        var options = {
           
           
            'frictionAir':0.005,
            'density':1
        }
        this.w=w;
        this.h=h;
        this.image = loadImage("sh1.png");
        this.body = Bodies.rectangle(x,y,w,h,options);
        
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        
        image(this.image,0,0,this.w,this.h);
        pop();
      }
}