class SlingShot
{
    constructor(bodyA, pointB)
    {
        var options=
        {
            length: 10,
            stiffness: 0.04,
            bodyA: bodyA,
            pointB: pointB
        }
        
        this.pointB= pointB;

        this.slingShot= Matter.Constraint.create(options);
        World.add(world, this.slingShot);



    }

    display()
    {
        if(this.slingShot.bodyA)
        {
            
        var pointA= this.slingShot.bodyA.position;
        var pointB= this.slingShot.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
    }

    fly()
    {
        this.slingShot.bodyA= null;
        
    }

}