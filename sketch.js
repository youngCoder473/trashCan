
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box,box2,box3,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	ball=Bodies.circle(40,375,30,{restitution:0.6});
	World.add(world,ball);
	
	ground=Bodies.rectangle(width/2,620,800,15,{isStatic:true});
	World.add(world,ground);

  box = new Box(700,600,60,10);
  wall = new BoxOne(625,540,10,10);
  wallTwo = new BoxOne(775,540,10,10);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ballPos=ball.position;
  fill("red");
  ellipse(ballPos.x,ballPos.y,30);
  drawSprites();

  gPos=ground.position;
  fill("white");
  rect(gPos.x,gPos.y,800,15);
  box.display();
  wall.display();
  wallTwo.display();
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:0.0199,y:0});
  }

  
}


  



