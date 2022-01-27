//vi er kommet til 19:10

let ship;
let asteroids = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship()
  asteroids.push(new Asteroid())
}

function draw() {
  background("darkgrey");
  ship.render();
  ship.turn()
  ship.update()
  ship.edges()

  for (let i = 0; i < asteroids.length; i++) {
    asteroids[i].render()
  }
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