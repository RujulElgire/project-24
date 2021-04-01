class Rubber{
	constructor(x,y,r)
	{
	var options = {
		'restitution':1.5,
		'friction':0.5,
		'density':9999999990,
		'isStatic':false
	}
		this.x=x;
		this.y=y;
		this.r=r;
		this.debug = true;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipseMode(CENTER);
			ellipse(50,46,150,150)
			pop()
	}

}