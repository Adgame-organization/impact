let frog;
let cars = [];
let logs = [];
let grid = 50;
let speedY = 0;
let road = [];
let river = [];
let trees = [];
let coins = [];
let logImg;
let carImg = []
let frogImg = [];
let treeImg = [];
let coinImg ;
let roadWidth = 4;
let riverWidth = 5;
let treeIndex = 0;
let coinIndex = 0;
let carIndex = 0;
let logIndex = 0;
var screen = 0;

var score = 0;
let timer =0;
let started = false;
let mXStart = 0;
let mYStart = 0;
let mXEnd = 0;
let mYEnd = 0;


let charPosition = 1;


function resetGame() {
  speedY = 0;
  cars=[];
  logs=[];
  road=[];
  river=[];
  trees = [];
  coins = [];
  carIndex = 0;
  logIndex = 0;
  treeIndex = 0;
  coinIndex = 0;
  setupGame();
  started = false;
}

function preload() {
  logImg = loadImage('./img/log.png');
  
  carImg[1] = loadImage('./img/car01.png');
  carImg[2] = loadImage('./img/car02.png');
  carImg[3] = loadImage('./img/car03.png');
  carImg[4] = loadImage('./img/car04.png');
  carImg[5] = loadImage('./img/car05.png');
  carImg[6] = loadImage('./img/car06.png');
  
  frogImg[1] = loadImage('./img/char-up.png');
  frogImg[2] = loadImage('./img/char-down.png');
  frogImg[3] = loadImage('./img/char-right.png');
  frogImg[4] = loadImage('./img/char-left.png');
  
  treeImg[1] = loadImage('./img/tree1.png')
  treeImg[2] = loadImage('./img/tree2.png')
  treeImg[3] = loadImage('./img/tree3.png')
  treeImg[4] = loadImage('./img/tree4.png')
  
  coinImg = loadImage('./img/coin.png')
}

function setupGame() {
  grid = windowHeight/18;
  textSize(grid/2.5);
  createCanvas(grid*9, grid*18);
  frog = new Frog(width / 2 - grid / 2, height - grid + 2.5, grid - 5);
  frog.attach(null);
  let indexRoad = 0;
  let indexRiver = 0;
  safetyLine0 = new SafetyLine(0, -grid);
  safetyLine1 = new SafetyLine(0, height - grid);
  safetyLine2 = new SafetyLine(0, height - grid * 2);
  safetyLine6 = new SafetyLine(0, height - grid * 7);

  // river
  for (let i = 9; i < 9 + riverWidth; i++) {
    river[indexRiver] = new RiverLine(0, height - grid * i);
    indexRiver++;
  }
  safetyLine4 = new SafetyLine(0, height - grid * 14);
  safetyLine5 = new SafetyLine(0, height - grid * 15);
  // road
  for (let i = 3; i < 3 + roadWidth; i++) {
    road[indexRoad] = new RoadLine(0, height - grid * i);
    indexRoad++;
  }
  safetyLine3 = new SafetyLine(0, height - grid * 8);
  // road
  for (let i = 16; i < 19; i++) {
    road[indexRoad] = new RoadLine(0, height - grid * i);
    indexRoad++;
  }
}

function setup() {
  // frameRate(30)
  setupGame();
}

function draw() {
  if(started){
    score=ceil((timer+50)/1000)*10;
    timer += 50
  }
  if (screen == 0) {
    startScreen()
  } else if (screen == 1) {
    gameOn()
  } else if (screen == 2) {
    endScreen()
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    frog.move(0, -1);
    if(screen == 1){
      started=true;
    }
    charPosition=1
  } else if (keyCode === DOWN_ARROW&& started) {
    frog.move(0, 1);
    charPosition=2
  } else if (keyCode === RIGHT_ARROW) {
    frog.move(1, 0);
    charPosition=3
  } else if (keyCode === LEFT_ARROW) {
    frog.move(-1, 0);
    charPosition=4
  }
}


function startScreen() {
  score =0 ;
  timer = 0 ;
  background(96, 157, 255)
  fill(255)
  textAlign(CENTER);
  text('click to start', width / 2, height / 2 + 20);
}

function endScreen() {
  background(150)
  textAlign(CENTER);
  text('GAME OVER', width / 2, height / 2)
  text("SCORE = " + score, width / 2, height / 2 + 20)
  text('click to play again', width / 2, height / 2 + 40);
}

function gameOn() {
  background(41,235,122);
  safetyLine0.show();
  safetyLine0.update();
  safetyLine1.show();
  safetyLine1.update();
  safetyLine2.show();
  safetyLine2.update();
  safetyLine3.show();
  safetyLine3.update();
  safetyLine4.show();
  safetyLine4.update();
  safetyLine5.show();
  safetyLine5.update();
  safetyLine6.show();
  safetyLine6.update();
  for (i = 0; i < road.length; i++) {
    road[i].update();
    road[i].show();
  }
  for (i = 0; i < river.length; i++) {
    river[i].update();
    river[i].show();
  }
  for (let i = 0; i < cars.length; i++) {
    cars[i].update();
    cars[i].show();
    if (frog.intersectsCar(cars[i])) {
      resetGame();
      screen = 2
    }
  }
  for (i = 0; i < logs.length; i++) {
    logs[i].update();
    logs[i].show();
  }
  for (i = 0; i < river.length; i++) {
    let ok = false;
    if (frog.intersects(river[i])) {
      for (i = 0; i < logs.length; i++) {
        if (frog.intersects(logs[i])) {
          ok = true;
          frog.attach(logs[i]);
        }
      }
      if (!ok) {
        resetGame();
        screen = 2
      }
    } else {
      frog.attach(null);
    }
  }
  for (i = 0; i < coins.length; i++) {
    coins[i].update();
    coins[i].show();
  }
  for (i = 0; i < trees.length; i++) {
    trees[i].update();
    trees[i].show();
  }
  frog.update();
  frog.show();
  push();
  fill('white')
  textStyle(BOLD);
  text("SCORE : " + score, 80, 40)
  pop();
  if(score==0){
    speedY=0
  }
  else if(score>0 && score < 500){
    speedY=grid/200
  }
  else if(score>500 && score<700){
    speedY=grid/100
  }
  else if(score>700&&score<1000){
    speedY=grid/80
  }
  else if(score>1000){
    speedY=grid/50
  }
}

function mousePressed() {
  if (screen == 0) {
    screen = 1
  } else if (screen == 2) {
    screen = 0
  }
}

function touchStarted() {
   mXStart = mouseX;
   mYStart = mouseY;
}
function touchEnded(event) {
   mXEnd = mouseX;
   mYEnd = mouseY;
  if (mYStart>mYEnd && Math.abs(mXStart-mXEnd)<grid) {
    frog.move(0, -1);
    if(screen == 1){
      started=true;
    }
    charPosition=1
  } 
  else if (mYStart<mYEnd && started && Math.abs(mXStart-mXEnd)<grid) {
    frog.move(0, 1);
    charPosition=2
  } 
  else if (mXStart<mXEnd&& Math.abs(mXStart-mXEnd)>grid) {
    frog.move(1, 0);
    charPosition=3
  } else if (mXStart>mXEnd&& Math.abs(mXStart-mXEnd)>grid) {
    frog.move(-1, 0);
    charPosition=4
  }
  mXStart = 0;
  mYStart = 0;
  mXEnd = 0;
  mYEnd = 0;
}
