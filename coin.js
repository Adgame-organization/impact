class Coin extends Rectangle {
  constructor(x, y, width) {
    super(x, y, width, width);
    this.appear = random([true,false])
  }
  
  update() {
    this.y += speedY;
    if ( this.y >= height) {
      this.appear = random([true,false])
      this.y = -grid ;
    }
  }
  show() {
    if(this.appear){
      image(coinImg, this.x, this.y, this.width, this.width)
    }
  }
}