function setup(){
  createCanvas(600,600);
  background(255);
}

function draw(){
  drawGrid();
}

function drawGrid(){
  for(var i=60;i<600;i+=60)
  {
    strokeWeight(2);
    line(i,60,i,height - 60);
    line(60,i,width - 60,i);
  }
}
