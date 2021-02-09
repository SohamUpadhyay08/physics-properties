const Engine = Matter.Engine; //namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ball;
var ground;
var ball1;

function setup(){
  var canvas=createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }
  
  var ball_options ={
    restitution: 1.0
  }
  ground = Bodies.rectangle(200,390,400,20, ground_options);
  World.add(world,ground);
 ball = Bodies.rectangle(200,200,50,50, ball_options);
 World.add(world,ball);
 ball1 = Bodies.circle(100,100,30,ball_options);
 World.add(world, ball1);
 console.log(ball.position.x);
  

}
function draw()
{
  background(0);
  Engine.update(engine);

  rectMode(CENTER);
  rect(ball.position.x, ball.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball1.position.x, ball1.position.y, 30,30);
}
