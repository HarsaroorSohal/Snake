function Snake()
{
  this.x=0;
  this.y=0;
  this.sx=scl;
  this.sy=0;
  this.total = 0;
  this.tail = [];

  this.show = function()
  {
    fill(255);
    rect(this.x,this.y,scl,scl);
    for(var i = 0 ;i<this.tail.length;i++)
    {
      rect(this.tail[i].x,this.tail[i].y,scl,scl);
    }
  }
  this.update = function()
  {

      if(this.total === this.tail.length)
      {
        for(var i =0 ; i<this.tail.length-1; i++)
        {
          this.tail[i] = this.tail[i+1];
        }
    }
    this.tail[this.total-1]=createVector(this.x,this.y);
  this.x=this.x + this.sx;
  this.y=this.y + this.sy;
  this.x = constrain(this.x,0,width-scl);
  this.y = constrain(this.y,0,height-scl);
  }
  this.eat = function()
  {
  let e = dist(this.x,this.y,pos.x,pos.y);
    if (e < 1)
    {
      this.total++;
      pos = createVector(floor(random(width/scl))*scl,floor(random(height/scl))*scl);
      //let t = new Snake();
      //e.this.x = this.x - scl;
    }
  }
  this.hist = function()
    {
      tail.push(snake);


    }
  this.keyPressed = function()
  {
    if(keyCode === UP_ARROW)
    {
      this.sy = -scl;
      this.sx = 0;
    }
    if(keyCode === DOWN_ARROW)
    {
      this.sy = scl;
      this.sx = 0;
    }
    if(keyCode === LEFT_ARROW)
    {
      this.sy = 0;
      this.sx = -scl;
    }
    if(keyCode === RIGHT_ARROW)
    {
      this.sy = 0;
      this.sx = scl;
    }
  }



}
