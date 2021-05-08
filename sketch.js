const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.Constraint;

var engine, world;
var box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var ground1;
var superhero;
var rope;
var bg;
var monster1;
var music;

function preload(){
bg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(1200,1000);
  engine = Engine.create();
  world = engine.world;
  

  ground1 = new ground(180,490,1300,10);
  ground2 = new ground(1100,400,500,10);
 //box1 = new Box(500,450,60,60);
 box2 = new Box(600,390,60,60);
 box3 = new Box(600,330,60,60);
 box4 = new Box(600,270,60,60);
 box5 = new Box(600,210,60,60);
 box6 = new Box(500,450,60,60);
 box7 = new Box(500,390,60,60);
 box8 = new Box(500,330,60,60);
 box9 = new Box(500,270,60,60);
 box10 = new Box(500,210,60,60);

 box11 = new Box(700,450,60,60);
 box12 = new Box(700,390,60,60);
 box13 = new Box(700,330,60,60);
 box14 = new Box(700,270,60,60);
 box15 = new Box(700,210,60,60);
 box16 = new Box(700,150,60,60);




 monster1 = new Monster(1000,380,200,200);
 superhero = new Hero(200,200,150,200);
 rope = new Rope(superhero.body ,{x:350 ,y:50});
}
 

function draw() {
  background(bg);  
 
if(box11.body.position.x>850 || box12.body.position.x>850 || box13.body.position.x>850 || box14.body.position.x>850|| box15.body.position.x>850 || box16.body.position.x>850){
  Matter.Body.setStatic(ground2.body,false);
}

  ground1.display();
  ground2.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display(); 
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  superhero.display();
  rope.display();
  monster1.display();
Engine.update(engine);

}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX ,y:mouseY});
}

  
  
  
    

