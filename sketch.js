const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var ground1
 var ball

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(600,height,1200,20)
  
    box1 = new Box(700,320,300,30);
    box2 = new Box(810,300,30,100);
    box4 = new Box(600,300,30,100);
   
Engine.run(engine)
var ball_options={
  isStatic:false,
  restitution:0.3,
  friction:0.5,
  density:1.2
}
ball=Bodies.circle(200,100,20,ball_options)
ball.shapeColor="blue"
World.add(world,ball)
 
}

function draw(){
	background("lightblue");

    Engine.update(engine);
  
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  
  

  
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display(); 
    box4.display();
  ground1.display()

    drawSprites()
   
}
function keypressed(){
  if(keycode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
  }
}