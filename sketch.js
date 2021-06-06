const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisions = [];
var divisionsHeight=300;
var particles = [];
var plinkos = [];

function preload(){

}

function setup() {
  createCanvas(800,900);

  engine=Engine.create();
  world = engine.world;

  //Create the bodies here
  ground = new Ground(400,790,800,10);
 

  for (var i = 0; i<=width; i= i+80){
     divisions.push(new Division(i,height-divisionsHeight/2,10,divisionsHeight));
  }

  for (var j = 75; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));
 }

 for (var j = 50; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j, 175));
}

for (var j = 75; j<=width; j=j+50){
  plinkos.push(new Plinko(j, 275));
}

for (var j = 50; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j, 375));
}

Engine.run(engine);

}
function draw() {
  rectMode(CENTER);
  background(0);

  


  for (var n = 0; n<divisions.length; n++){
    divisions[n].display();
  }

  if (frameCount %90 === 0 ) {
    particles.push(new Particle(random(width/2-30, width/2+30),10,10));
  }
 
  //particles display
  for (var j = 0; j < particles.length; j++)
{
  particles[j].display();
}
//division display
  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  // plinkos display
  for (var g = 0; g < plinkos < plinkos.length; g+10){
    
    plinkos[g].display();
  }

  ground.display();
 

}