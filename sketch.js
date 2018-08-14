let gw; //Grid Width
let gh; //Grid Height
let obs = [];
let n=10,cell=102;
let sinks = [];
let rslider,gslider,bslider,button;

function setup(){
  createCanvas(800,800);
  background(255);
  //frameRate(5);
  createP('<br><h1>Red&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspBlue&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspGreen</h1>');
  rslider = createSlider(10,255,10);
  gslider = createSlider(10,255,10);
  bslider = createSlider(10,255,10);
  button = createButton("Go");

  gw = width / cell;
  gh = height / cell;
  sinks = [ {x:gw, y: gh },              //Top-Left Corner
            {x:width-gw, y:gh},          //Top-Right Corner
            {x:width-gw, y:height-gh},   //Bottom-Left Corner
            {x:gw, y:height-gh} ];    //Bottom-RIght Corner
  button.mousePressed(addObservers);
  // let color = {r:255,g:0,b:0 };
  // for(let i = 0; i < n; i++) {
  //  obs[i] = new Observer(width/2,height/2,color);
  // }
}

function draw(){
  background(255);
  drawGrid();
  drawSinks();
  //createP('<br> Red:' + rslider.value() + ' Blue:' + rslider.value() + ' Green:' + gslider.value());
  for(let i=obs.length-1;i>=0;i--){
   obs[i].move(floor(random(1,5)));
   obs[i].show();
  //console.log(typeof(ob));
    for(let j=0;j<sinks.length;j++){
      if( (obs[i].getX() == sinks[j].x) && (obs[i].getY() == sinks[j].y) ){
        obs.splice(i,1);
        console.log("Popped "+obs.length+" left!");
        break;
      }
    }
  }
  //noLoop();
}

function addObservers(){
  let color = {r:rslider.value(),g:gslider.value(),b:bslider.value()};
  for(let i = 0; i < n; i++) {
   obj = new Observer(width/2,height/2,color);
   obs.push(obj);
  }
}

function drawGrid(){
  for(var i=gw;i<width;i+=gw)
  {
    strokeWeight(0);
    stroke(0);
    line(i,gh,i,height - gh);
    line(gw,i,width - gw,i);
  }
}
function drawSinks(){
  for(let i=0;i<sinks.length; i++)
  {
    strokeWeight(20);
    stroke(0,255,0);
    point(sinks[i].x,sinks[i].y);
  }
}
