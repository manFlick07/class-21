var fixedRect, movingRect;
var o1,o2,o3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = -1;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = 1;

//   o1 = createSprite(100,100,50,50);
//   o1.shapeColor = "green";
//   o2 = createSprite(200,200,50,50);
//   o2.shapeColor = "green";
//   o3 = createSprite(300,300,50,50);
//   o3.shapeColor = "green";
 }

function draw() {
  background(0,0,0);  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;
  // if(isTouching(movingRect,o2)){
  //   movingRect.shapeColor = "red";
  //   o2.shapeColor = "red";
    
bounceOff(movingRect,fixedRect);

  // }
  // else {
  //   movingRect.shapeColor = "green";
  //   o2.shapeColor = "green";

  // }
 
  drawSprites();
}

