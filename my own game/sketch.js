const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
var gun;
var engine;
var world;
var angle;
var bulletImg;
var bullet;
function preload(){
backgroundImg = loadImage("background.jpg");
bulletImg = loadImage("bullet.png");
redBottleImg = loadImage("game image/red bottle.png");
}

function setup(){
  createCanvas(1200,600);
  
  engine = Engine.create()
  world=engine.world
  angleMode(DEGREES);
  angles =20;
 // background= createSprite(50, width/2, 100,height);
  //background.addImage(backgroundImg);
gun = new Gun(300,360,125,95,angles);

bottle = new Bottle(500,350,65,105,angles);
//bullet =createSprite(150,height/2,15,15);

bulletGroup = new Group();
}

function draw(){
  background("game image/background.jpg");
  Engine.update(engine);

  if(keyDown("space")){
    shootBullet();
 }
 
  drawSprites();
// shootBullet();
//background.display();
bottle.display();
  gun.display();
 // bullet.display();

}


function shootBullet(){
  bullet =createSprite(300,360,15,15);
  bullet.addImage(bulletImg);
 bullet.scale=0.10;
  bullet.velocityX = 3;
  bullet.lifetime=300;
  //bullet.y = gun.y-40;
  bulletGroup.add(bullet);
  
}