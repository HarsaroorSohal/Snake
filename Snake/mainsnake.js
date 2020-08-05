var tail = [];
var snake;
var pos;
var scl = 20;
var hist;
var graph;



function setup()
{
  graph = createGraphics(600,600);
  graph.background(31);
  //pixelDensity(1);
createCanvas(600,600);
  snake = new Snake();
  pos = createVector(floor(random(width/scl))*scl,floor(random(height/scl))*scl);
  frameRate(12);


}
function draw()
{
  // for(var i = 0; i<;i ++)
  // {
  //
  // }

  //background(51);
  image(graph,0,0);
  snake.show();
  snake.update();
  snake.keyPressed();
  snake.hist();
  snake.eat();

  fill(255,0,0);
  rect(pos.x,pos.y,20,20);
  tint(0,255,0);


}
