class RiverLine extends Line {
  constructor(x, y) {
    super(x, y);
    let speed = random([grid/50,grid/40]);
    let space = random([grid*3,grid*4,grid*5]);
    for (let i = 0; i < 3; i++) {
      let x = i * space;
      logs[logIndex] = new Log(x, this.y+2, grid * 2, grid-4,speed);
      logIndex++;
    }
  }
 show(){
   // noStroke();
        fill(41,235,122);
        rect(this.x, this.y, width, grid+speedY);
  }
}