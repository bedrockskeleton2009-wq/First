//board
let board;
let boardHeight = 250;
let boardWidth = 750;
let context;
//cactus
let cactusArray = [];
let cactus1Width = 34;
let cactus2Width = 69;
let cactus3Width = 102;
let cactusHeight = 70;
let cactusX = 700;
let cactusY = boardHeight - cactusHeight;
let cactus1Img;
let cactus2Img;
let cactus3Img;

//physics
let velocityX = -8;
let velocityY = 0;
let gravity = .4;

let gameOver = false;
let score = 0;


//dino
let dinoWidth = 88;
let dinoHeight = 94;
let dinoX = 50;
let dinoY = boardHeight - dinoHeight;
let dinoImg;
let dino = {
  x: dinoX,
  y: dinoY,
  width: dinoWidth,
  height: dinoHeight,
};
window.onload = function () {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d"); //used for drawing
  //test dino
  //context.fillStyle = "green";
  //context.fillRect(dino.x, dino.y, dino.width, dino.height)
  dinoImg = new Image();
  dinoImg.src = "./dino.png";
  dinoImg.onload = function () {
    context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
  };
  cactus1Img = new Image();
  cactus1Img.src = "./cactus1.png";
  cactus2Img = new Image();
  cactus1Img.src = "./cactus2.png";
  cactus3Img = new Image();
  cactus3Img.src = "./cactus3.png";


  requestAnimationFrame(update);
  setInterval(placeCactus, 1000);//1000 milliseconds
};
function update() {

  requestAnimationFrame(update);
  context.clearRect(0, 0, board.width, board.height);
  context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
  for(i = 0; i < cactusArray.length; i++){
    let cactus = cactusArray[i];
    let cactus.x += velocityX;
    context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height)
  }
}

function placeCactus(){
  let cactus = {
    img : null,
    x : cactusX,
    y : cactusY,
    width : null,
    height : cactusHeight

  }
  
  let placeCactusChance = Math.random();
  if (placeCactusChance > .90){
    cactus.img = cactus3Img;
    cactus.width = cactus3Width;
    cactusArray.push(cactus);
  } else if (placeCactusChance > .70){
    cactus.img = cactus2Img;
    cactus.width = cactus2Width;
    cactusArray.push(cactus);

  } else (placeCactusChance > .50){
    cactus.img = cactus1Img;
    cactus.width = cactus1Width;
    cactusArray.push(cactus);
  }

  if(cactusArray > 5){
    cactusArray.shift();//removes the first element
  }
}
