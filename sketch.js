var movingRect, fixedRect
var gameObject



function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite (200,250,100,80);
  gameObject = createSprite(100,90,70,60);
}

function draw() {
  background("black"); 
  
  movingRect.y=mouseY;
  movingRect.x=mouseX;

  isTouching(gameObject,movingRect);
  isTouching(fixedRect,movingRect);
  if(isTouching(gameObject,movingRect)){
    gameObject.shapeColor="yellow";
    movingRect.shapeColor="yellow";
  }
  else{
   gameObject.shapeColor="blue";
   movingRect.shapeColor="blue"; 

  }

  
 
  drawSprites();
}

