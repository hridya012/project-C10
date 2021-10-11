var ship,shipImg;
var sea,seaImg;
function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);
  

  sea= createSprite(200,200);
  sea.addAnimation("sea",seaImg);
  sea.scale=0.4;
sea.velocityX = -2;


  ship= createSprite(200,200);
  ship.addAnimation("ship",shipImg);
  ship.scale=0.4;

}

function draw() {
  background("blue");
 
if(sea.x < 0){
  sea.x = 200;
}

  drawSprites();
}