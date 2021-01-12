//Create variables here
var dog, dogHappy, dogSprite, dogImg;
var foodS, foodStock;
var database;

function preload()
{
  dogImg = loadImage("dogImg.png");
  dogHappy = loadImage("happydog.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);
  

  dogSprite = createSprite(250,250,20,20);
  dogSprite.addImage(dogImg);
  database = firebase.database();
  foodStock = database.ref('Food');
 foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);
  drawSprites();
  //add styles here
  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dogSprite.addImage(dogHappy);
     }

}
function readStock(data){   
  foodS=data.val();
 }

function writeStock(x){
  if(x<=0){
      x=0;
   }else{
 x=x-1;    

}
database.ref('/').update({
     Food:x
  })

  drawSprites();

  text("Food:"+ foodStock,490,20);
  fill("red");
  stroke(2);
}



