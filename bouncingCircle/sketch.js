var x = 0;
var y = 0;
var directionX = 5;
var directionY = 5;


function setup() {
  // put setup code here
    createCanvas(800, 600);
        background(0);

}

function draw() {
  // put drawing code here
    noStroke();
    fill(random(0,255),random(0,255),random(0,255)), 25;
    ellipse(x, y, 2, 2);
move();
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
