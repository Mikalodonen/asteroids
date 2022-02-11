function Ship() {

  //Player starter i centrum
  this.pos = createVector(width / 2, height / 2)
  // Radius
  this.r = 15
  this.heading = 0
  this.rotation = 0
  this.vel = createVector(0, 0)
  this.isBoosting = false

  //functionen for at vi kan bevæge os
  this.boosting = function (b) {
    this.isBoosting = b;

  }

  this.update = function () {
    if (this.isBoosting) {
      this.boost();
    }
    this.pos.add(this.vel)
    this.vel.mult(0.99)
  }
  this.boost = function () {
    let force = p5.Vector.fromAngle(this.heading)
    force.mult(0.1)
    this.vel.add(force)
  }
  this.hits = function (asteroid) {
    let d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y)
    if (d < this.r + asteroid.r) {
      return true
    } else {
      return false
    }
  }
  // bruges til at indlæse playerens look
  this.render = function () {
    push()
    // sætter figur i midtten
    translate(this.pos.x, this.pos.y)
    rotate(this.heading + PI / 2)
    //figuren
    fill(118, 167, 227)
    stroke(181, 201, 232)
    // Dette er til skip 2 der kommer til at være rød eller noget 
    // fill(183, 118, 227)
    // stroke(203, 181, 232)
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r)
    pop()
  }
  //function der gør at vi kan køre ud til højre og kom ind fra venstre
  this.edges = function () {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }

  }
  this.setRotation = function (a) {
    this.rotation = a
  }

  this.turn = function () {
    this.heading += this.rotation

  }
}