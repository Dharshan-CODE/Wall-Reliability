var bullet,wall;
var thickness,weight,speed;
var damage;

function setup() {
  createCanvas(1000,400);

  thickness = random(53,99);
  weight = random(30,52);
  speed = random(43,73);


  bullet = createSprite(100, 200, 50, 20);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
  bullet.debug=true;

  wall = createSprite(800,200,thickness,height/2);
  wall.shapeColor="cyan";
  wall.debug=true;

  

  
}

function draw() {
  background("black");

  if(isTouching(bullet,wall)){
  damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
  bullet.velocityX=0;
  if(damage<10){
  bullet.shapeColor="green";
  wall.shapeColor="green";
  }

  if(damage>10){
  bullet.shapeColor="red";
  wall.shapeColor="red";
  }



  }


  drawSprites();





}

