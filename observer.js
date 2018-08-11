class Observer {


  // constructor()
  // {
  //   this.x = width/2;
  //   this.y = height/2;
  // }

  constructor(x,y)
  {
    this.x = x;
    this.y = y;
  }

  show()
  {
    stroke(255,0,0);
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
