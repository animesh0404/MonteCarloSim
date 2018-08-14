let gw; //Grid Width
let gh; //Grid Height
let obs = [];
let n=10,cell=52;
let sinks = [];
let rslider,gslider,bslider,button,RedP,gridB;
let fps = 60;

function setup(){
  createCanvas(800,800);
  background(255);
  RedP = createP('');
  rslider = createSlider(0,255,255);
  gslider = createSlider(0,255,0);
  bslider = createSlider(0,255,0);
  nslider = createSlider(1,100,1);
  fpsSlider = createSlider(1,60,5);
  n = nslider.value();
  button = createButton("Go");
  gridP = createP('');
  gridB = createSlider(0,10,10);
  gridC = createSlider(2,50,6);
  button.mousePressed(addObservers);
}

function draw(){
  fps = fpsSlider.value();
  frameRate(fps);
  gw = width / cell;
  gh = height / cell;
  sinks = [ {x:gw,       y:gh },              //Top-Left Corner
            {x:width-gw, y:gh},          //Top-Right Corner
            {x:width-gw, y:height-gh},   //Bottom-Left Corner
            {x:gw,       y:height-gh},  ];       //Bottom-RIght Corner
            // {x:gw,       y:height/2},
            // {x:width-gw, y:height/2},
            // {x:width/2,  y:gh},
            // {x:width/2,  y:height-gh}];
  background(255);
  drawGrid();
  drawSinks();
  RedP.html('<h2 class="indent">Red:'+ rslider.value()
                          + ' Green:' + gslider.value()
                          + ' Blue:' + bslider.value()
                          + ' Number:' + nslider.value()
                          +' Fps:'+ fpsSlider.value()
                          +'  Alive:'+obs.length     + ' </h2>');
  gridP.html('<h2 class="indent"> Grid Thickness:'+ gridB.value()
                          +' Grid Cells:'+ pow((gridC.value()*2 - 2),2) + ' </h2>');
  //createP('<br> Red:' + rslider.value() + ' :' + rslider.value() + ' Green:' + gslider.value());
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
  n = nslider.value();
  let color = {r:rslider.value(),g:gslider.value(),b:bslider.value()};
  for(let i = 0; i < n; i++) {
   obj = new Observer(width/2,height/2,color);
   obs.push(obj);
  }
}

function drawGrid(){
  cell = gridC.value() * 2;
  for(var i=gw;i<width;i+=gw)
  {
    strokeWeight(gridB.value() * 0.1);
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
