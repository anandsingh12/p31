const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var manImage;
var maxDrops = 100;
var drops = [];
var umbrella;

function preload(){
    manImage = loadImage("walking_1.png");
}

function setup(){
    var canvas = createCanvas(300,500);

    engine = Engine.create();
    world  = engine.world;
    
    umbrella = new Umbrella();

  if(frameCount%100===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400),3,10));
     }
    }
}

function draw(){
    background(0);
    Engine.update(engine);
    
    umbrella.display();
  
  for(var i=0; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }
  drawSprites();
}   

