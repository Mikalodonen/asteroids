let ship

function setup() {
  createCanvas(windowWidth,windowHeight); 
}

function draw() {
  background("darkgrey");

 // Vi skal snart lvae noget
}
function player(){

  //Player starter i centrum
  this.pos = createVector(height/2, width/2)
    
  // bruges til at indlæse playerens look
    this.render = function() {
      
      triangle()

    }
}