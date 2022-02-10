//vi er kommet til part 2

let ship;
let asteroids = []
let lazers = []
let space

function preload(){
space = loadImage('space.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight );
  ship = new Ship()
  for (let i = 0; i < 10; i++) {
    asteroids.push(new Asteroid())
  }
}

function draw() {
  background("darkgrey");
  image(space, 0, 0, windowWidth, windowHeight )
  ship.render();
  ship.turn()
  ship.update()
  ship.edges()

  

  for (let i = 0; i < asteroids.length; i++) {
    if (ship.hits(asteroids[i])) {

    }
    asteroids[i].render()
    asteroids[i].update()
    asteroids[i].edges()
  }
  for (let i = lazers.length - 1; i >= 0; i--) {
    lazers[i].render()
    lazers[i].update()
    if (lazers[i].offscreen()) {
      lazers.splice(i, 1)
    } else {
      for (let j = asteroids.length - 1; j >= 0; j--) {
        if (lazers[i].hits(asteroids[j])) {
          if (asteroids[j].r > 10) {
            let newAsteroids = asteroids[j].breakup()
            //console.log(newAsteroids)
            asteroids = asteroids.concat(newAsteroids)
          }
          asteroids.splice(j, 1)
          lazers.splice(i, 1)
          break
        }
      }
    }
  }

}

function keyReleased() {
  ship.setRotation(0.0)
  ship.boosting(false)
}

function keyPressed() {
  if (key == ' ') {
    lazers.push(new Lazer(ship.pos, ship.heading))
  }

  if (keyCode == RIGHT_ARROW) {
    ship.setRotation(0.1)
  } else if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1)
  } else if (keyCode == UP_ARROW) {
    ship.boosting(true)
  }

}