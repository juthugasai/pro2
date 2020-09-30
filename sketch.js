//Create variables here
var dog,happyDog,doghappy, database, foodS, foodStock;
var database;

function preload()
{
  //load images here
  happyDog= loadImage("images/dogImg.png");
  doghappy= loadImage("images/dogImg1.png");
  
}

function setup() {
  createCanvas(500,500);


  database= firebase.database();
   
    var foodStock=database.ref('Food');
    foodStock.on("value",readStock);
  dog= createSprite(300,300)
  dog.addImage(happyDog);
 dog.scale=0.2;
 
  
}


function draw() {  
  background(46, 139, 87) ;
  text()

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(doghappy);
}
if(keyWentDown(DOWN_ARROW)){
  writeStock(foodS)
  dog.addImage(happydog);
}



  drawSprites();
  //add styles here
  text("Note:Press UP_ARROW key to feed drago milk",200,200);
  textSize=20;
  fill(0)
  stroke(20)
}

function readStock(data){
  foodS=data.val;
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
database.ref('/').update({
Food:x
})

}

