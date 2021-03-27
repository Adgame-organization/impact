class RoadLine extends Line {
  constructor(x, y) {
    super(x, y);
    let speed = random(-2,2);
    let space = random(300,350);
    for (let i = 0; i < 2; i++) {
      let x = i * space + 100;
      cars[carIndex] = new Car(x, this.y, grid * 2, grid,speed);
      carIndex++;
    }
  }
  show() {
    noStroke();
    fill(47,52,46);
    rect(this.x, this.y, width, grid);
  }
}