function Asteroid() {
    this.pos = createVector(random(width), random(height))

    this.r = 50

    this.render = function () {
        push()
        // stroke()
        translate(this.pos.x, this.pos.y)
        //ellipse(0, 0, this.r * 2)
        beginShape()
        for (let i = 0; i < 10; i++) {
            let angle = map(i, 0, 10, 0, TWO_PI)
            let x = this.r * cos(angle)
            let y = this.r * sin(angle)

            vertex(x, y)
        }
        endShape()

        pop()
    }
}