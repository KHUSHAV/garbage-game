const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1 , border1 , border2 , border3 , border3 ;
var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 300);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,height-50,width,20);

	paper1 = new Paper(90,50,50);


	border1 = new Border(width-120,height-50,200,40);
	border2 = new Border(width-30,height-90,20,100);
	border3 = new Border(width-210,height-90,20,100);
	border1 = createSprite(width-120,height-50,200,20);
	border2 = createSprite(width-30,height-90,20,100);
	border3 = createSprite(width-210,height-90,20,100);
    border1.shapeColor = "red" ;
	border2.shapeColor = "red" ;
	border3.shapeColor = "red" ;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  border1.display();
  border2.display();
  border3.display();
  paper1.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Body.applyForce(paper1.body,paper1.body.position,{x:500,y:-450})
	}
}

