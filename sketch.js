const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var box1, box2;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground= new Ground(200,380,400,30);

    box1 = new Box(220,50,50,90);
    box2 = new Box(200,100,50,50);
    


}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    console.log(box1);

    
   
    
}