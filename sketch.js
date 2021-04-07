const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber=new Rubber(200,200,10,10);
    rubber2=new Rubber(250,200,10,10);
    rubber3=new Rubber(300,200,10,10);
    rubber4=new Rubber(350,200,10,10);  
    rubber5=new Rubber(400,200,10,10);
    rubber7=new Rubber(250,150,10,10);
    rubber8=new Rubber(300,150,10,10);
    rubber9=new Rubber(350,150,10,10);
    rubber10=new Rubber(400,150,10,10);
    rubber11=new Rubber(420,150,10,10);
    rubber12=new Rubber(450,150,10,10)

    rubber6=new Rubber(750,150,100,100);

     

     box=new Box(500,200,80,80);
    // fill("green");
     box2=new Box(600,200,100,100)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
   rubber5.display();
   rubber6.display();
   rubber7.display();
   rubber8.display();
   rubber9.display();
   rubber10.display();
   rubber11.display();
   rubber12.display();

   fill("cyan");
   rubber6.display();

   fill("yellow");
   box.display();

    fill("black");
   box2.display();
}