let gw; //Grid Width
let gh; //Grid Height
let obs = [];
let n=100,cell=12;
let sinks = [];

function setup(){
  createCanvas(900,900);
  background(255);
  //frameRate(5);
  gw = width / cell;
  gh = height / cell;
  sinks = [ {x:gw, y: gh },              //Top-Left Corner
            {x:width-gw, y:gh},          //Top-Right Corner
            {x:width-gw, y:height-gh},   //Bottom-Left Corner
            {x:gw, y:height-gh} ];    //Bottom-RIght Corner

  let color = {r:255,g:0,b:0 };
  for(let i = 0; i < n; i++) {
   obs[i] = new Observer(width/2,height/2,color);
  }
}

function draw(){
  background(255);
  drawGrid();
  drawSinks();
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

function mouseClicked(){
  let color = {r:255,g:0,b:0 };
  for(let i = 0; i < n; i++) {
   obj = new Observer(width/2,height/2,color);
   obs.push(obj);
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
function drawSinks(){
  for(let i=0;i<sinks.length; i++)
  {
    strokeWeight(20);
    stroke(0,255,0);
    point(sinks[i].x,sinks[i].y);
  }
}
