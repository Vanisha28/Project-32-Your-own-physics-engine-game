const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world,ground;
var block1,block2,block3,block4,block5,block6,block7,
block8,block9,block10,block11,block12,block13,block14,
block15,block16,block17,block18,block19,block20,block21;
var polygon,polygon_img;
var slingShot
var ground1,ground2,ground3;
var score = 0;

function preload(){
ballHit = loadSound("sounds/ball_hit.wav");
bottlesFalling = loadSound("sounds/bottles_falling.mp3");
    
}
function setup()
{
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(435,265,400,20);
  ground2 = new Ground(830,200,300,20);
  ground3 = new Ground(600,380,2000,20);
  //Level four
  block1 = new Box(890,160,60,60);
  block2 = new Box(860,160,60,60);
  block3 = new Box(830,160,60,60);
  block4 = new Box(800,160,60,60);
  block5 = new Box(770,160,60,60);
  block6 = new Box(360,235,60,60);
  block7 = new Box(390,235,60,60);
  block8 = new Box(420,235,60,60)
  block9 = new Box(450,235,60,60);
  block10 = new Box(480,235,60,60);
  block11 = new Box(510,235,60,60);
  block12 = new Box(540,235,60,60);
  
  //Level three
  block13 = new Box(390,195,60,60);
  block14 = new Box(420,195,60,60);
  block15 = new Box(450,195,60,60);
  block16 = new Box(480,195,60,60);
  block17 = new Box(860,120,60,60);
  block18 = new Box(830,120,60,60);
  block19 = new Box(800,120,60,60);
  block20 = new Box(510,195,60,60);

  //Level two
  block21 = new Box(420,155,60,60);
  block22 = new Box(450,155,60,60);
  block23 = new Box(480,155,60,60)
  block24 = new Box(830,80,60,60);

  //Top
  block25 = new Box(450,100,60,60);
 
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  //For creating the slingShot variable:-
  slingShot = new SlingShot(this.polygon,{x:50,y:250});
  Engine.run(engine);
}
function draw()
{
  background("lightpink");
  Engine.update(engine);
  fill("blue");
  ellipseMode(RADIUS);
  ellipse(polygon.position.x,polygon.position.y,10,10);
  //To display the text:-
  textSize(25);
  stroke('purple');
  fill('black');
  text("Drag the Ball and Release it, to Launch it towards the bowling pins...",200,350);
 
  ground1.display();
  ground2.display();
  ground3.display();
  slingShot.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
    ballHit.play ();
}
function mouseReleased(){
    slingShot.fly();
    bottlesFalling.play();
}

function keyPressed(){
if(keyCode===32){
slingShot.attach(this.polygon);
}
}
