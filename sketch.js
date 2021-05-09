var bgIMG;
function preload(){
  bgIMG = loadImage("snow1.jpg");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(bgIMG);  
 // drawSprites();
}