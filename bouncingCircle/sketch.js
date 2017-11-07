var x = 0;
var y = 0;
var directionX = 3;
var directionY = 3;
var redRange = 150;
var greenRange = 150;
var blueRange = 150;
var val = 10;


function setup() {
  // put setup code here
    createCanvas(800, 600);
        background(0);

}

function draw() {
  // put drawing code here
    noStroke();
    fill(redRange, greenRange, blueRange, 25);
    ellipse(x, y, 5, 5);
move();
colChange();
}


function move(){
    if(x < 0 || x > width){
        directionX = directionX * -1;
    }
    if(y < 0 || y > height){
        directionY = directionY * -1;
    }
    x = x + directionX;
    y = y + directionY;
}

function colChange(){
  if(x == width && y == height){
    redRange = redRange - val;
    greenRange = greenRange + val;
    blueRange = blueRange - val;  
}
}
