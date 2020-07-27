var pointDist = 35;
var pointd;
var a=1;
var i=1;
var zoomIncrement= 0.05;
var boxSize=100;

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
    if(document.getElementById("p5bg") == null) {
    remove();
  }
  else{
    myCanvas.parent("p5bg");
  }
}

function draw() {
  background(255);
  fill(210);
  noStroke();
  for(a=-8; a<8; a++) {
    for(i=-10; i<10; i++) {

      //bg
      push();
      translate(0,-60,-35);
      circle(pointDist*i,pointDist*a, pointd);
      fill(190);
      noStroke();
      pointd=3;
      pop();
    }
  }
  push();
  fill(230);
  stroke(255);
  strokeWeight(2);
  translate(0,-80,0);
  if(mouseIsPressed) {
    rotateX(mouseY/-100);
    rotateY(mouseX/-100);
    zoomIncrement+=0.05;
    if(boxSize<150){
      boxSize+=(1/zoomIncrement);
    }
  }
  else{
    rotateX(frameCount * 0.01-mouseX/-500);
    rotateY(frameCount * 0.01-mouseY/-500);
    rotateZ(frameCount * 0.01-mouseY/-500);
    zoomIncrement+=0.005;
    if(boxSize>100){
      boxSize-=(1/zoomIncrement);
    }
  }
  box(boxSize);
  pop();
}

function mouseReleased() {
  zoomIncrement= 1.5;
}
function mousePressed() {
  zoomIncrement= 0.1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
