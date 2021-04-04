class RoadLine extends Line {
  constructor(x, y) {
    super(x, y);
    let speed = random([-grid/25,-grid/40,-grid/50,grid/50,grid/40,grid/25]);
    let space = random([grid*3,grid*4,grid*5]);
    for (let i = 0; i < 2; i++) {
      let posX = i * space ;
      cars[carIndex] = new Car(posX, this.y, grid * 2, grid,speed);
      carIndex++;
    }
  }
  show() {
    noStroke();
    fill(47,52,46);
    rect(this.x, this.y, width, grid+speedY);
  }
}