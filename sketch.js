
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ellipse1, rect1, rect2, rect3, rect4;
function black(x){
	x.shapeColor = color(0);
}
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	groundSprite=createSprite(400, 650, 800,100);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(200 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(400, 650, 800, 100 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	ellipse1 = createSprite(200, 100, 100, 50);
	rect1 = createSprite(290, 100, 90, 20);
	rect2 = createSprite(200, 75, 10, 60);
	rect3 = createSprite(200, 75, 60, 10)
	rect4 = createSprite(200, 125, 100, 10);
	ellipse1.shapeColor = (100, 100, 100);
	rect1.shapecolor = (100, 100, 100);
	black(rect2);
	black(rect3);
	black(rect4);
}


function draw() {
	rectMode(CENTER);
	background(222);
	rect(packageBody.position.x, packageBody.position.y, 20, 20);
	drawSprites();
	keyPressed();
	

}
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   Matter.Body.setStatic(packageBody, false);
	   console.log(packageBody.position.y);
 }
}