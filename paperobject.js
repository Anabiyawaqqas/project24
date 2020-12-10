class paperobject {
    constructor(x,y) {
      var options = {
        isStatic:false,
        restitution :0.3,
        friction:1.5,
        density:1.2
      }
      this.body = Bodies.ellips(x,y,options);
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipsMode(CENTER);
      fill("blue");
      ellips(pos.x, pos.y,);
    }
  };