//vi er kommet til part 2

let ship;
let asteroids = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship()
  for (let i = 0; i < 10; i++) {
    asteroids.push(new Asteroid())
  }
}

function draw() {
  background("darkgrey");
  ship.render();
  ship.turn()
  ship.update()
  ship.edges()

  for (let i = 0; i < asteroids.length; i++) {
    asteroids[i].render()
    asteroids[i].update()
    asteroids[i].edges() 
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