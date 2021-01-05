class Particle {
    constructor(x,y,r) {
var options ={
    restitution:0.4,
    isStatic:false
}
this.r=10
this.body = Bodies.circle(x,y,r,options)
this.color=color(random(0,255),random(0,255),random(0,255))
World.add(world,this.body)

    }
display() {
    var angle = this.body.angle
    push()
    translate(this.body.position.x,this.body.position.y)
    angleMode(RADIANS);
    rotate(angle);
    noStroke();
    fill(this.color)
    ellipseMode(RADIUS)
    ellipse(0,0,this.r,this.r)
    pop()
}


}