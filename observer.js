class Observer {

  constructor(x,y,c)
  {
    this.x = x;
    this.y = y;
    this.c = c;
  }

//getters
  getY() { return this.y; }
  getX() { return this.x; }

  show()
  {
    stroke(this.c.r,this.c.g,this.c.b);
    strokeWeight(10);
    point(this.x,this.y);
  }

  move(dir)
  {

    switch(dir){
      case 1:
              this.y -=  gh;
              if(this.y < gh) { this.y = gh; }
              break;
      case 2:
              this.x +=  gw;
              if(this.x > width-gw) { this.x = width-gw; }
              break;
      case 3:
              this.y +=  gh;
              if(this.y > height-gh) { this.y = height-gh; }
              break;

      case 4:
              this.x -=  gw;
              if(this.x < gw) { this.x = gw; }
              break;
      }
  }

}
