
// Kommet til 13:46

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

}

function keyReleased() {
  ship.setRotation(0.0)

}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    ship.setRotation(0.1)
  } else if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1)
  } else if (keyCode == UP_ARROW) {
    ship.boost()
  }

}

function Ship() {

  //Player starter i centrum
  this.pos = createVector(width / 2, height / 2)
  // Radius
  this.r = 10
  this.heading = 0
  this.rotation = 0
  this.vel = createVector(0, 0)

  this.update = function () {
    this.pos.add(this.vel)
  }
  this.boost = function () {
    let force = p5.Vector.fromAngle(this.heading)
    this.vel.add(force)
  }

  // bruges til at indlæse playerens look
  this.render = function () {
    // sætter figur i midtten
    translate(this.pos.x, this.pos.y)
    rotate(this.heading + PI / 2)
    //figuren
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r)
  }

  this.setRotation = function (a) {
    this.rotation = a
  }

  this.turn = function () {
    this.heading += this.rotation

  }
}