class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.3,
            length:250
        }
        this.pointB = pointB;
        this.rope = constraint.create(options);
        World.add(world ,this.rope);

    }
    attach(body){
        this.rope.bodyA=body;
    }

    fly(){
        this.rope.bodyA=null;
    }

    display(){
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
        }
    }
}