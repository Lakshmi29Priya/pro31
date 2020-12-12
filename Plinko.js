class Plinko
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:1,
			friction:0,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		Plinko.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
       this.color=color(random(50,80)),(random(200,250)),(random(100,150));
        World.add(world, Plinko.body);

	}
	display()
	{
			
            var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
            rectMode(CENTER)
            fill(this.color);
			//strokeWeight(4);
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}