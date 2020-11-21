class paper {
constructor(x,y,p)
{
    var options = {
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.x=x;
    this.y=y;
    this.p=p
    this.body=Bodies.circle(this.x,this.y,this.p/2,options)
    World.add(waorld,this.body);
}
}
display()
{
    var paperpos=this.body.position
    push()
    translate(paperpos.x,paperpos.y);
    rectMode(CENTRE)
    strokeWeight(3);
    fill(255,0,255)
    ellipse(0,0,this.p,this.p);
    pop();
}