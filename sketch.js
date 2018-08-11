let gw; //Grid Width
let gh; //Grid Height
let obs = [];
let n = 5,shade = 2,cell=12;

function setup(){
  createCanvas(900,900);
  background(255);
  frameRate(5);
  gw = width / cell;
  gh = height / cell;
  // for(let i = 0; i < n; i++) {
  // obs[i] = new Observer(width/2,height/2);
  // }
 }

function mousePressed(){
  // let color = { r: shade*floor(random(shade,(255-shade) / shade)),
  //               g: shade*floor(random(shade,(255-shade) / shade)),
  //               b: shade*floor(random(shade,(255-shade) / shade))};
  let color = { r: random(10,250),g: random(10,250),b: random(10,250)};
  let b = new Observer(width/2,height/2,color);
  obs.push(b);
}

function draw(){
  background(255);
  drawGrid();
  for(let i=0;i < obs.length;i++){
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
