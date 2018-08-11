let gw; //Grid Width
let gh; //Grid Height
let a;

function setup(){
  createCanvas(600,600);
  background(255);
  frameRate(5);
  gw = width / 10;
  gh = height / 10;
  a = new Observer;
 }

function draw(){
  background(255);
  drawGrid();
  a.show();
  a.move(floor(random(1,5)));
}

function drawGrid(){
  for(var i=gw;i<width;i+=gw)
  {
    strokeWeight(2);
    stroke(0);
    line(i,gh,i,height - gh);
    line(gw,i,width - gw,i);
  }
}

// function mousePressed(){
//   a.move(floor(random(1,5)));
// }
