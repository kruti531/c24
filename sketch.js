
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1, dustbin2, dustbin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(200, 450, 40);
    dustbin1 = new Dustbin(500, 610, 20, 100);
    dustbin2 = new Dustbin(585, 650, 150, 20);
    dustbin3 = new Dustbin(670, 610, 20, 100);
    ground = new Ground(width/2, 670, width, 20);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed() {

if(keyCode === UP_ARROW) {
   Matter.Body.applyForce(paper.body, paper.body.position, {x: 50, y: -50});
}

}



