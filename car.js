class Car extends Rectangle {
  constructor(x, y, width, height, speedX) {
    super(x, y, width, height);
    this.speedX = speedX;
    this.carType = random([1, 2, 3, 4, 5, 6])
  }
  show() {
    if (this.speedX >= 0) {
      push()
      scale(-1, 1)
      image(carImg[this.carType], -this.x, this.y, this.width, this.height)
      pop()

    } else {
      push();
      image(carImg[this.carType], this.x, this.y, this.width, this.height)
      pop()
    }
  }
  update() {
    this.x += this.speedX;
    if (this.speedX > 0 && this.x > width + 100) {
      this.x = 0;
    } else if (this.speedX < 0 && this.x < -this.width - 100) {
      this.x = width + 100;
    }
    this.y += speedY;
    if (speedY > 0 && this.y > height) {
      this.y = -grid + speedY;
    }
  }
}