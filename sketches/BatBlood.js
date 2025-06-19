class BatBlood {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.particles = [];
    this.startFrame = frameCount;
    this.duration = 40; // 시간 제한
  }

  emit(n) {
    if (frameCount - this.startFrame < this.duration) {
      for (let i = 0; i < n * 2; i++) {
        this.particles.push(new Particle(this.x, this.y));
      }
    }
  }

  update() {
    for (let p of this.particles) {
      p.update();
    }
  }

  show() {
    for (let p of this.particles) {
      p.show();
    }
  }
}
