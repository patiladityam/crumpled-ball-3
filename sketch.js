var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

dustbin=new dustbin(500,690,100,100);	
paper1=new Paper(200,450,70);
ground = new Ground(600,height,1200,20);
	

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	Engine.run(engine);
	slingshot = new SlingShot(paper1.body,{x:300, y:300});
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  dustbin.display();
  paper1.display();
  ground.display();
  slingshot.display();
  drawSprites();
}

//function keyPressed() {
	//if (keyCode === UP_ARROW) {

	//	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-43})
		
//	}
//}
function mouseDragged(){
    Matter.Body.setPosition(paper1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
