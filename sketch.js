
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	hammer1 = new hammer(100, 500, 200, 20);
	ground1 = new ground(400, 680, 800, 20);
	stone1 = new stone(500, 600, 50, 50);
	rubber1 = new rubber(600, 400, 70, 70);
	iron1 = new iron(200, 200, 60, 50);
	sand1 = new sand(300, 300, 10, 10);
	sand2 = new sand(300, 300, 10, 10);
	sand3 = new sand(320, 320, 10, 10);
	sand4 = new sand(310, 310, 10, 10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  hammer1.display();
  ground1.display();
  stone1.display();
  rubber1.display();
  iron1.display();
  sand2.display();
  sand3.display();
  sand4.display();

  drawSprites();
}



