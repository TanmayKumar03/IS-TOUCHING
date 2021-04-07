var mrect,frect;
function setup() {
  createCanvas(400,400);
  mrect=createSprite(50, 200, 50, 50);
  mrect.shapeColor = "black";
  frect=createSprite(200, 200, 50, 50);
  frect.shapeColor = "red";
}

function draw() {
  background("green"); 
  mrect.x = mouseX;
  mrect.y = mouseY;
  
  if(mrect.x - frect.x < frect.width/2 + mrect.width/2 && 
    frect.x - mrect.x < frect.width/2 + mrect.width/2 &&
    mrect.y - frect.y < frect.height/2 + mrect.height/2 &&
    frect.y - mrect.y < frect.height/2 + mrect.height/2){
    mrect.shapeColor = "yellow";
    frect.shapeColor = "yellow";  
  }
  else{
    mrect.shapeColor = "black";
    frect.shapeColor = "red";  
  }
  drawSprites();
}