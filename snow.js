class snow
{
    constructor(x,y)
    {
        var options={
          
           restitution: 0.1,
           friction: 0.002
        }
        this.image=loadImage("snow5.webp")
        this.body = Matter.Bodies.rectangle(x,y,7,7,options);
        World.add(world,this.body);
        this.width = 7;
        this.height = 7;
    }
        display()
        {
           imageMode(CENTER);
           image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        }
        update(){
            if(this.body.position.y>700){
               Matter.Body.setPosition(this.body,{x: random(0,700), y: random(-10,0)});
             }
          }
}