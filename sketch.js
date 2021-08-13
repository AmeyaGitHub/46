var background1
var king
var queen
var score=0
var fire,fire2
var edges
var bg
var war
function preload(){

king1=loadImage("image/king.png")
queen1=loadImage("image/queen.png")
witch1=loadImage("image/witch.png")
fire1=loadImage("image/fire.png")
shoot=loadImage("image/shoot.png")
bullet1=loadImage("image/bullet.png")
stone1=loadImage("image/stone.png")
backG1=loadImage("image/backg.png")
war1=loadImage("image/war.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  edges=createEdgeSprites()
  bg=createSprite(displayWidth/2, 0,displayWidth, displayHeight);
  bg.addImage(backG1)
  bg.scale=2.5
  bg.velocityX=2
  king=createSprite(1200, 200, 50, 50);
king.addImage(king1)
  queen=createSprite(displayWidth/2, displayHeight/2, 50, 50);
  queen.addImage(queen1)
  
  
  queen.velocityY+=10
 fire2=new Group()
 witch2=new Group()
 bulletG=new Group()
}

function draw() {
  queen.visible = true;
  king.visible = true;
  if(bg.x>displayWidth){
    bg.x=bg.width/2
  }

  queen.bounceOff(edges)
    king.y=mouseY
    
    if (keyDown("space")) {
      createFire();
      
    }
    if(keyDown(DOWN_ARROW)){
      createStone()
    }
  
    if (witch2.isTouching(fire2)){
      king.addImage(shoot)
      king.scale = 0.5;
      witch2.destroyEach()
      fire2.destroyEach()
      score+=1
     
    }
    if(score>4){
      createBullet()
    }
     if(bulletG.isTouching(king)){
     
      bulletG.destroyEach()
      witch2.destroyEach()
      //witch2.velocityXEach(0)
      bulletG.velocityXEach(0)
      queen.visible = false;
    king.visible = false;
      fill("green")
      
      text("gameOver",1000,500)
      war=createSprite(displayWidth/2, displayHeight/2, 50, 50);
      war.addImage(war1)
    }
  
    background("white");  
  spawnWitches()
  
  
  drawSprites();
  textSize(50)
  fill ("yellow")
  text("Score: "+ score, 500,50);
  
}
function spawnWitches(){
  if(frameCount % 60=== 0) {
    var witch = createSprite(random(200,600),random(100,1500),10,40);
    witch.addImage(witch1)
    witch.velocityX=+5
    witch2.add(witch)

  }

}
function createFire() {
  fire = createSprite(1200,king.y,20,50);
  fire.addImage(fire1); 
  fire.scale = 0.5;
  king.y=fire.y
  fire.velocityX = -4;
  fire.lifetime = 10000;
  fire2.add(fire)



}
function createStone() {
  stone = createSprite(1000,500,20,50);
  stone.addImage(stone1); 
  stone.scale = 0.5;
 stone.lifetime =300;
 if(stone.isTouching(bulletG)){
  bulletG.destroyEach()
}



}
function createBullet() {
  if(frameCount % 30=== 0) {


  
  bullet = createSprite(queen.x,queen.y,20,50);
  bullet.addImage(bullet1); 
  bullet.scale = 0.5;
  
  bullet.velocityX = +4;
  bullet.lifetime =300;
  bulletG.add(bullet)
  }


}