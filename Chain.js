class Chain{ 
constructor(bodyA,bodyB,bodyC){
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        bodyC:bodyC,
        stiffness:1,
        length:3
    }
   this.chain=Constraint.create(options)  
World.add(world,this.chain)
}
display(){
    var pointA=this.chain.bodyA.position   
    var pointB=this.chain.bodyB.position
    var pointC=this.chain.bodyC.position
    strokeWeight(5)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    line(pointB.x,pointB.y,pointC.x,pointC.y)
}

}