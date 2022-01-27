function Ship() {

  //Player starter i centrum
  this.pos = createVector(width / 2, height / 2)
  // Radius
  this.r = 10
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

  // bruges til at indlæse playerens look
  this.render = function () {
    push()
    // sætter figur i midtten
    translate(this.pos.x, this.pos.y)
    rotate(this.heading + PI / 2)
    //figuren
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