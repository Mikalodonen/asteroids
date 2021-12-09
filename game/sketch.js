function setup() {
  createCanvas(400, 400); 
}

function draw() {
  background(255);
  
 let CirkelX = 200
  let CirkelY = 150
  let headsize = 45
  
  //head
  fill('red');
  circle(CirkelX, CirkelY, headsize);

  //body
  strokeWeight(10)
  stroke('red')
  
  line(CirkelX, CirkelY + headsize/2, CirkelX, 250)
  line(200, 190, 140, 160)
  line(250, 250, 200, 190)
  line(250, 300, 200, 250)
  line(150, 300, 200, 250)
}
