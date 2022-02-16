function Health() {

    this.health = 100
    this.maxHealth = 100
    this.deathHealth = 0

    this.isGameOver = function(){
        return this.health <=0
    }

    this.takeDamage = function () {
        this.health = this.health - 0.5
        if (this.health < 0) {
            this.health = 0
        }
    }
    
    this.render = function () {
        push()
        stroke(83, 76, 99)
        strokeWeight(4)
        noFill()
        rect(width / 2 - 100, 700, 200, 15,20)
        noStroke()
        fill(255, 38, 53)
        rect(width / 2 - 100, 700, map(this.health, 0, this.maxHealth, 0, 200), 15, 20)
        pop()
    }
}



