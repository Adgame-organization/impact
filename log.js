// class Log extends Car {
//     constructor(x, y, width, height, speedX) {
//         super(x, y, width, height, speedX);
//     }
//     show(){
//         image(logImg,this.x, this.y, this.width, this.height)
//     }
// }

class Log extends Rectangle {
  constructor(x, y, width, height, speedX) {
    super(x, y, width, height);
    this.speedX = speedX;
  }
  show() {
    image(logImg, this.x, this.y, this.width, this.height)
  }
  update() {
    this.x += this.speedX;
    if (this.speedX > 0 && this.x > width + grid) {
      this.x = -this.width - grid;
    } else if (this.speedX < 0 && this.x < -this.width - grid) {
      this.x = width + grid;
    }
    this.y += speedY;
    if (speedY > 0 && this.y > height) {
      this.y = -grid + speedY;
    }
  }
}