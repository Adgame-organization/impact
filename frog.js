class Frog extends Rectangle {
  constructor(x, y, width) {
    super(x, y, width, width);
    this.attached = null;
  }
  attach(log) {
    this.attached = log;
  }
  update() {
    if (this.attached != null) {
      this.x += this.attached.speedX;
    }
    this.x = constrain(this.x, 0, width - this.width);
    this.y += speedY;
    if (this.y > height) {
      resetGame();
      screen = 2;
    }
    if (this.y < -grid) {
        resetGame();
        screen = 2;
    }
  }
  show() {
    image(frogImg[charPosition], this.x, this.y, this.width, this.height)
  }
  move(xdir, ydir) {
    this.x += xdir * grid;
    this.y += ydir * grid;
  }
}