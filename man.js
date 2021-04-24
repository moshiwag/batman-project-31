class Man{
    constructor(){
        var options = {
            isStatic:true,
            restitution: 0.5
        }
        
        this.body = Bodies.circle(100,350,50,options); //changed here
        World.add(world, this.body);        
    }
    display(){
        var pos =  this.body.position;
        image (umbrella_man, pos.x-150, pos.y-30, 300,300);   //changed here
    }
}