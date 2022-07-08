//board
var blockSize=25;
var rows=20;
var cols=20;
var board;
var context;
//snakes head
var snakeX=blockSize * 5;
var snakeY=blockSize * 5;
//snakes speed;
var velocityX=0;
var velocityY=0;

//foods
var foodX;
var foodY;

window.onload=function(){
    board=document.getElementById("board");
    board.height=rows * blockSize;
    board.width=cols * blockSize;
    context=board.getContext("2d");//draws board
    spawnFood();
    document.addEventListener("keyup",ChangeDirection);
    //update();
    setInterval(update,1000/10)//update tie setting
}
function update(){
    context.fillStyle="black";
    context.fillRect(0,0,board.width,board.height);

    //food
    context.fillStyle="yellow";
    context.fillRect(foodX,foodY,blockSize,blockSize);
    
    //Snake and food colliding
    if(snakeX == foodX && snakeY == foodY){
        spawnFood();
    }

    //snake
    context.fillStyle="crimson";

    //Snakes movement
    snakeX+=velocityX*blockSize;
    snakeY+=velocityY*blockSize;
    context.fillRect(snakeX,snakeY,blockSize,blockSize);

   


}
function ChangeDirection(e){
    if(e.code=="ArrowUp"){
        velocityX=0;
        velocityY=-1;
    } else if(e.code=="ArrowDown"){
        velocityX=0;
        velocityY=1;
    } else if(e.code=="ArrowLeft"){
        velocityX=-1;
        velocityY=0;
    } else if(e.code=="ArrowRight"){
        velocityX=1;
        velocityY=0;
    }

}
function spawnFood(){
    foodX=math.floor(Math.random()*cols)*blockSize;
    foodY=math.floor(Math.random()*rows)*blockSize;
}