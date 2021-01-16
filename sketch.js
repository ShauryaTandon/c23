const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground
var box2

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
 ground=Bodies.rectangle(200,380,400,10,{isStatic:true})
 World.add(world, ground)
     box1= new Box(100,20,40,40)
     box2= new Box(200,40,50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    rectMode(CENTER)
   rect(ground.position.x, ground.position.y, 400,10)

   box1.display()
   box2.display()
   
}