var canvas,balloonImg,backgroundImg;
var balloon,database,height;
function preload(){
  backgroundImg=loadImage("images/AirB-01.png");
  balloonImg=loadAnimation("images/AirB-01.png","images/AirB-02.png","images/AirB-04.png")
}
function setup() {
  database = firebase.database();
  console.log(database);

canvas=  createCanvas(500,500);

  balloon=createSprite (100,400,20,20);
  balloon.addAnimation("balloon",balloonImg);
  balloon.scale = 0.4;

}

function draw() {
  background(backgroundImg);  
 
 if(keyDown(LEFT_ARROW)){
  updateHeight(-10,0);

 }
 else if(keyDown(RIGHT_ARROW)){
  updateHeight(10,0);
   
 }
 else if(keyDown(UP_ARROW)){
  updateHeight(0,-10);
   balloon.addAnimation("hotAirballoon",balloonImg);
   balloon.scale=balloon.scale-0.01;
 }
 else if(keyDown(DOWN_ARROW)){
  updateHeight(0,10);
  balloon.addAnimation("hotAirballoon",balloonImg);
  balloon.scale=balloon.scale+0.01;
   
 }
  drawSprites();


}
/*
function changePosition(x,y){
balloon.x=x;
balloon.y=y;
}
*/
function updateHeight(x,y){
  database.ref('balloon/height').set({

    'x': position.x + x ,
    'y': position.y + y
  })
}

function readHeight(data){
  position = data.val();
  console.log(position.x);
  balloon.x = position.x;
  balloon.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}
