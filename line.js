class Line extends Rectangle {
  constructor(x, y) {
    super(x, y, width, grid);
  }
  update() {
    this.y += speedY;
    if (this.y >= height) {
      this.y = -grid ;
    }
  }
}