//vi er kommet til part 2
let health
let ship;
let asteroids = []
let lazers = []
let space
let deathScreen

function preload(){
space = loadImage('space.png')
deathScreen = loadImage('Death.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight );
  ship = new Ship()
  health = new Health()
  for (let i = 0; i < 10; i++) {
    asteroids.push(new Asteroid())
  }
}

function draw() {
  background(space);
  // image(space, 0, 0, windowWidth, windowHeight )
  health.render()
  
  if(health.isGameOver()){
    console.log("you dead!")
    //show game over screen
    image(deathScreen, 0, 0, windowWidth, windowHeight)
  } else{
    //Her har jeg taget "lazerne" ind da man stadig kunne skyde når man har død
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
    } //close for lazeren
    // Har taget det her ned da skibet vil forsvinde når man dør 
    ship.render();
    ship.turn()
    ship.update()
    ship.edges()
    
  } //close for health.isGameOver

  for (let i = 0; i < asteroids.length; i++) {
    if (ship.hits(asteroids[i])) {
      health.takeDamage()
    }
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