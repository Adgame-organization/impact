class RiverLine extends Line {
  constructor(x, y) {
    super(x, y);
    let speed = random(-2,2);
    let space = random(300,350);
    for (let i = 0; i < 3; i++) {
      let x = i * 200 + space;
      logs[logIndex] = new Log(x, this.y+2, grid * 2, grid-4,speed);
      logIndex++;
    }
  }
 show(){
   noStroke();
        fill(41,235,122);
        rect(this.x, this.y, width, grid);
  }
}