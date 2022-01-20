//vi er kommet til 19:10

let ship;

function setup() {
  createCanvas(600, 600);
  ship = new Ship()
}

function draw() {
  background("darkgrey");
  ship.render();
  ship.turn()
  ship.update()
  ship.edges()
}

function keyReleased() {
  ship.setRotation(0.0)
  ship.boosting(false)
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    ship.setRotation(0.1)
  } else if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1)
  } else if (keyCode == UP_ARROW) {
    ship.boosting(true)
  }

}