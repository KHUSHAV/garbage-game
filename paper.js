class Paper{
    constructor(a,b,radius){
        
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2 
        }
        
        
        this.body = Bodies.circle(a,b,radius,options);
        this.radius = radius;
        

        World.add(world,this.body);

        
    }

    display(){
        var pos = this.body.position;

        rectMode(CENTER);

        fill("white");

        rect(pos.x,pos.y,this.width,this.height);
    }
}