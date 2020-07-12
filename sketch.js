


var wall,car1,car2,car1_speed, car2_speed, deformation,car1_weight, car2_weight;



function setup() {
  createCanvas(800,400);
  
  wall=createSprite(700,200,50,400);

  car1=createSprite(100,100,40,40);
  car1_speed=random(20,100);
  car1_weight=random(20,100);
  car1.velocityX=2

  car2=createSprite(100,300,40,40);
  car2_speed=random(20,100)
  car2_weight=random(20,100)
  car2.velocityX=2
}

function draw() {
  background("lightblue");  

  car1.collide(wall);
  car2.collide(wall);

if (wall.width/2+car1.width/2) {
  deformation = 0.5 * car1_weight * car1_speed * 2260/ 22500;
  //console.log("car1 : " + deformation);
  if(deformation > 180) car1.shapeColor = "red";
  if(deformation > 80 && deformation < 180) car1.shapeColor = "orange";
 
  else if(deformation < 80) 
  car1.shapeColor = "green";
}

if (wall.width/2+car2.width/2) {
deformation = 0.5 * car2_weight * car2_speed * 2260/ 22500;
//console.log("car1 : " + deformation);
if(deformation > 180) car2.shapeColor = "red";

if(deformation > 80 && deformation < 180) car2.shapeColor = "orange";
else if(deformation < 80) 
car2.shapeColor = "green";
}

  drawSprites();
}