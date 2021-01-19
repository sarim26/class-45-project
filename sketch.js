
var b,bi,boyi;
var e,ei,obstaclei;
var groun,invisibleGround
var house,houseImg
var sword
var score = 0
var gameState="END"
function preload(){

boyi=loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png")
//enemyi=loadAnimation("enemy.gif")
obstaclei=loadImage("hand3.png")

//obstacle2=loadAnimation("zombie1.png","zombie2.png","zombie3.png","zombie4.png","zombie5.png")
obstacle2=loadImage("z1.png")
boyz=loadImage("boyzombie.png")

houseImg=loadImage("hauntedhouse.jpg")
GameOveri=loadImage("GameOver.png")
}

function setup(){

createCanvas(1000,500)

house=createSprite(500,240,200,10)
house.addImage(houseImg)
house.scale=0.6
house.velocityX=-2
boy=createSprite(400,460)
//enemy=createSprite(100,100)
boy.scale=2
boy.addAnimation("r",boyi)
//enemy.addAnimation("g",enemyi)
boy.addImage("z",boyz)
edges = createEdgeSprites()
obstaclegroup = new Group()

GameOver= createSprite(500,225)
GameOver.addImage(GameOveri)
GameOver.visible=false

}

function draw(){

background(0)

score= Math.round(frameCount/60)
 
house.velocityX=-2
if(house.x<500){
  house.x=600 
}

if(keyDown("space") && boy.y>410){

    boy.velocityY = -18
}
boy.velocityY = boy.velocityY+ 0.8


if (boy.isTouching(obstaclegroup)){
    
    boy.changeImage("z",boyz)
    GameOver.visible=true
 boy.velocityY=0
 obstaclegroup.setVelocityXEach(0)
 house.velocityX=0
}

boy.collide(edges[3])
spawnobstacles()

drawSprites();

stroke("red")
strokeWeight("20")
textSize(20)
text("Lived So Far : "+ score, width/2,50)

}

function spawnobstacles(){
if(frameCount%200===0){

    obstacle=createSprite(1000,470)
    
    obstacle.velocityX=-7
    
    //obstacle.addImage(obstaclei)
    
var rand= Math.round(random(1,2))
switch(rand){
case 1 :    obstacle.addImage(obstaclei);
break;

case 2 :    obstacle.addImage(obstacle2)
break; 

default: break;
}
obstaclegroup.add(obstacle)
//obstacle.scale=0.15

//obstacle.debug=true
obstacle.setCollider("circle",0,0,40)
}
}