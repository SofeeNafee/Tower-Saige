  
const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Constraint =  Matter.Constraint;

var engine,world;

function setup() {
  createCanvas(1400,400);
  engine = Engine.create();
  world = engine.world;
  stand1 = new Ground(590,300,250,10);
  stand2 = new Ground(900,200,200,10);
  ball = new Ball(200,200,20);
  slingshot = new SlingShot(this.ball.body,{x:200,y:200});
  box1 = new Box(500,275,30,40,"purple");
  box2 = new Box(530,275,30,40,"purple");
  box3 = new Box(560,275,30,40,"purple");
  box4 = new Box(590,275,30,40,"purple");
  box5 = new Box(620,275,30,40,"purple");
  box6 = new Box(650,275,30,40,"purple");
  box7 = new Box(680,275,30,40,"purple");

  box8 = new Box(530,235,30,40,"green");
  box9 = new Box(560,235,30,40,"green");
  box10 = new Box(590,235,30,40,"green");
  box11 = new Box(620,235,30,40,"green");
  box12 = new Box(650,235,30,40,"green");

  box13 = new Box(560,195,30,40,"red");
  box14 = new Box(590,195,30,40,"red");
  box15 = new Box(620,195,30,40,"red");
  box16 = new Box(590,155,30,40,"pink");

  box17 = new Box(840,175,30,40,"blue");
  box18= new Box(870,175,30,40,"blue");
  box19 = new Box(900,175,30,40,"blue");
  box20 = new Box(930,175,30,40,"blue");
  box21 = new Box(960,175,30,40,"blue");

  box22 = new Box(870,135,30,40,"red");
  box23 = new Box(900,135,30,40,"red");
  box24 = new Box(930,135,30,40,"red");
  box25 = new Box(900,95,30,40,"pink");


}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  stand1.display();
  stand2.display();
  box1.display();  
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
  box17.display();  
  box18.display();  
  box19.display();  
  box20.display();  
  box21.display();  
  box22.display();  
  box23.display();  
  box24.display();  
  box25.display(); 
  ball.display();
  slingshot.display(); 
}

function mouseDragged() {
  Matter.Body.setPosition (this.ball.body,{x:mouseX,y:mouseY});
  
}
function mouseReleased(){
  slingshot.fly();
}
