class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  intersects(otherRectangle) {
    let left = this.x
    let right = this.x + this.width;
    let top = this.y;
    let bottom = this.y + this.height;
    let oleft = otherRectangle.x
    let oright = otherRectangle.x + otherRectangle.width;
    let otop = otherRectangle.y;
    let obottom = otherRectangle.y + otherRectangle.height;
    return !(left >= oright ||
      right <= oleft ||
      top >= obottom ||
      bottom <= otop);
  }
  intersectsCar(otherCar) {
    if (otherCar.speedX < 0) {
      let left = this.x
      let right = this.x + this.width;
      let top = this.y;
      let bottom = this.y + this.height;
      let oleft = otherCar.x
      let oright = otherCar.x + otherCar.width;
      let otop = otherCar.y;
      let obottom = otherCar.y + otherCar.height;
      return !(left >= oright ||
        right <= oleft ||
        top >= obottom ||
        bottom <= otop);
    }
    if (otherCar.speedX > 0) {
      let left = this.x
      let right = this.x + this.width;
      let top = this.y;
      let bottom = this.y + this.height;
      let oleft = -otherCar.x + otherCar.width;
      let oright = -otherCar.x 
      let otop = otherCar.y;
      let obottom = otherCar.y + otherCar.height;
      return !(left >= -oright ||
        right <= -oleft ||
        top >= obottom ||
        bottom <= otop);
    }
  }
}