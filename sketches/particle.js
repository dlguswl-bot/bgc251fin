class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(1, 3));
    this.lifetime = 300;
  }

  update() {
    this.pos.add(this.vel);
    this.lifetime -= 5;
  }

  show() {
    noStroke();
    fill(255, 0, 0, this.lifetime); //
    ellipse(this.pos.x, this.pos.y, 24);
  }
}
