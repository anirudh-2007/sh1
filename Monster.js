class Monster{
    constructor(x,y,w,h) {
        var options = {
           
           'restitution':0.25665,
            //'friction':0.5,
            'density':0.5
        }
        this.w=w;
        this.h=h;
        this.image = loadImage("Monster-01.png");
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