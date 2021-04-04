class SafetyLine extends Line {
  constructor(x, y) {
    super(x, y);
    this.space = random([grid*3,grid*4,grid*5]);
    this.spaceCoin = random(0,100);
    for (let i = 0; i < 2; i++) {
      let x = i * this.space
      trees[treeIndex] = new Tree(x, this.y, grid);
      treeIndex++;
    }
    //coin
    // for (let i = 0; i < 1; i++) {
    //   let x = i * this.spaceCoin + this.space
    //   coins[coinIndex] = new Coin(x, this.y+10, grid- 20);
    //   coinIndex++;
    // }
  }
  show() {
    noStroke();
    fill(126,204,42);
    rect(this.x, this.y, width, grid+speedY);
  }
}