var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rect,rect1,rect2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	rect=createSprite(width/2,height-50,200,20)
	rect.shapeColor=color("red")
	rect1=createSprite(290,610,20,100)
	rect1.shapeColor=color("red")
	rect2=createSprite(490,610,20,100)
	rect2.shapeColor=color("red")
	


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	rect = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true,restitution:1} );
	 World.add(world, rect);
	 
	//rect = Bodies.rectangle({isStatic:true}) 
	// World.add(world, rect);
	 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}