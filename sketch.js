let gw; //Grid Width
let gh; //Grid Height
let obs = [];
let n = 5;

function setup(){
  createCanvas(900,900);
  background(255);
  frameRate(5);
  gw = width / 10;
  gh = height / 10;
  for(let i = 0; i < n; i++) {
  obs[i] = new Observer(width/2,height/2);
  }
 }

function draw(){
  background(255);
  drawGrid();
  for(let i=0;i < n;i++){
    obs[i].show();
    obs[i].move(floor(random(1,5)));
  }
}

function drawGrid(){
  for(var i=gw;i<width;i+=gw)
  {
    strokeWeight(1);
    stroke(0);
    line(i,gh,i,height - gh);
    line(gw,i,width - gw,i);
  }
}

// function mousePressed(){
//   a.move(floor(random(1,5)));
// }
