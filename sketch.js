
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;

function preload() {

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinObj = new Dustbin(1200, 650);
	groundObject = new Ground(width / 2, 670, width, 20);
	paperObject = new Paper(200, 450, 70)

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	paperObject.display();
	dustbinObj.display();
	groundObject.display()


}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body, paperObject.body.position, { x: 85, y: -85 });

	}
}

