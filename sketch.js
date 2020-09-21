const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var side1,side2,paper3;
var ground1;

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(600,650,1200,20);

	bin1 = new Dustbin(200,200);

	paper2 = new Paper(200, 300);

	wall1 = new Wall (823,480,10,320);
	wall2 = new Wall (1148,480,10,320)

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(255);

	Engine.update(engine);

	ground1.display();
    
    bin1.display();

	paper2.display();
	
	wall1.display();
	wall2.display();
  
	drawSprites();
 
}

function keyPressed () {
    if(keyCode === UP_ARROW) {
        Matter.Body.applyForce(paper2.body,paper2.body.position,{x:800, y:-1300})
    }
}
