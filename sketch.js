const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    rubber = new Rubber(900,550,35)
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(600,530,70,70);
    iron= new Iron(300,530,30,50);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

  
    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
 
}