var wall,thickness;
var bullet,speed,weight;

function setup() {

  createCanvas(1600,400);

  speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);

bullet=createSprite(50, 200, 50, 50);
bullet.velocityX=speed;
bullet.shapeColor=color(255);

wall=createSprite(1500,200,thickness,height/2);
wall.shapeColor=color(60,60,60); 
}

function draw() {
  background(0); 

  if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   if(damage>8){
     wall.shapeColor=color("red");
   }
   if(damage<8){
    wall.shapeColor=color("green");
  }
  }

  drawSprites();
}
function hasCollided(bullet1,wall1){
  bulletRightEdge=bullet1.x+bullet1.width;
  wallLeftEdge=wall1.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}