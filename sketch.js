function preload()
{
  snakeimg=loadImage("images/snake1.png");
  mouseimg=loadImage("images/mouse2.png");
  gardenyimg=loadImage("images/gardenY.png");
  gardenximg=loadImage("images/gardenX.png");
  obs1img=loadImage("images/obsX.png");
  obs2img=loadImage("images/obsY.png");
  back=loadImage("images/background.jpg");
  keyimg=loadImage("images/key2.png");
  doorimg=loadImage("images/door2.png")
}




function setup() {
  createCanvas(1200,600);
edges=createEdgeSprites();
wall1=createSprite(115, 90, 10, 300);
wall1.addImage(gardenyimg);

wall2=createSprite(30,250,300,10);
wall2.addImage(gardenximg);


wall3=createSprite(420,450,300,10);
wall3.addImage(gardenximg);

wall4=createSprite(188,81,150,10);
wall4.addImage(gardenximg);


wall5=createSprite(59,350,10,200);
wall5.addImage(gardenyimg);

wall6=createSprite(121,597,10,200);
wall6.addImage(gardenyimg);

wall7=createSprite(260,160,10,200);
wall7.addImage(gardenyimg);

wall8=createSprite(226,580,200,10);
wall8.addImage(gardenximg);

wall9=createSprite(360,60,10,200);
wall9.addImage(gardenyimg);

wall10=createSprite(272,360,250,10);
wall10.addImage(gardenximg);

wall11=createSprite(400,351,10,200);
wall11.addImage(gardenyimg);

wall12=createSprite(567,73,300,10);
wall12.addImage(gardenximg);

wall13=createSprite(1100,106,10,250)
wall13.addImage(gardenyimg);

wall14=createSprite(993,451,200,10)
wall14.addImage(gardenximg);

wall15 =createSprite(993,551,10,200)
wall15.addImage(gardenyimg);

wall16=createSprite(545,294,10,250)
wall16.addImage(gardenyimg);

wall17=createSprite(970,135,250,10)
wall17.addImage(gardenximg);

wall18=createSprite(665,145,10,150);
wall18.addImage(gardenyimg);

wall19=createSprite(780,53,10,174);
wall19.addImage(gardenyimg);

wall20=createSprite(670,450,10,270);
wall20.addImage(gardenyimg);

wall21=createSprite(840,320,200,10);
wall21.addImage(gardenximg);

wall22=createSprite(980,270,250,10);
wall22.addImage(gardenximg);

wall23=createSprite(790,530,10,200)
wall23.addImage(gardenyimg)

wall24=createSprite(520,540,200,10)
wall24.addImage(gardenximg)

wall25=createSprite(380,200,200,10)
wall25.addImage(gardenximg)

wall26=createSprite(140,400,200,10)
wall26.addImage(gardenyimg)

snake=createSprite(1160,560,20,20);
snake.setCollider("rectangle",0,0,100,120)
snake.addImage("snake",snakeimg);
snake.scale=0.3;
snake.debug=true;
mouse=createSprite(30,30,20,20);
mouse.addImage("mouse",mouseimg);
mouse.scale=0.2;


obs1=createSprite(1100,380,30,30);
obs1.addImage(obs1img);
obs1.scale=0.5;
obs1.velocityX=1;
obs1.debug=true;
obs1.setCollider("rectangle",0,0,200,80);
inviobs1=createSprite(1020,380,5,5);
inviobs1.visible=false;

obs2=createSprite(670,390,30,30);
obs2.addImage(obs2img);
obs2.scale=0.4;
obs2.setCollider("rectangle",0,0,90,200);
obs2.velocityY=-1;

obs3=createSprite(230,500,30,30);
obs3.addImage(obs2img);
obs3.scale=0.4;
obs3.velocityY=-1;

obs4=createSprite(200,300,30,30);
obs4.addImage(obs1img);
obs4.scale=0.5;
obs4.velocityX=1;

door=createSprite(110,197,20,20)
door.addImage(doorimg)
door.scale=0.19;

key=createSprite(360,370,20,20)
key.addImage(keyimg)
//key.scale=2
key.scale=0.25;
}

function draw() {
  background(back);  
  if(keyDown(UP_ARROW)){
    snake.y=snake.y-2;
   // snake.velocityY=-2;
  }
  /*if((key)&&(door)){
  if(snake.isTouching(key)){
    // key.destroy()
     door.visible=false;
   }}*/
  if(keyIsDown(DOWN_ARROW)){
    snake.y=snake.y+2;
    //snake.velocityY=2;
  }
  if(keyIsDown(RIGHT_ARROW)){
    snake.x=snake.x+2;
    //snake.velocityX=2;
  }
  if(keyIsDown(LEFT_ARROW)){
    snake.x=snake.x-2;
    //snake.velocityX=-2;
  }
  snake.collide(edges)
  mouse.collide(edges);
  obs1.bounceOff(edges[1])
  obs2.bounceOff(wall18);
  obs2.bounceOff(wall20)
  obs3.bounceOff(wall8)
  obs3.bounceOff(wall10)
  obs4.bounceOff(wall5)
  obs4.bounceOff(wall11)
  if(snake.isTouching(wall1)||snake.isTouching(wall2)||snake.isTouching(wall3)||snake.isTouching(wall4)||snake.isTouching(wall5)||snake.isTouching(wall6)||snake.isTouching(wall7)||snake.isTouching(wall8)||snake.isTouching(wall9)||snake.isTouching(wall10)||snake.isTouching(inviobs1))
  {
    snake.x=1160;
    snake.y=560;
    snake.setVelocity(0,0);
    
  }

  if(snake.isTouching(wall11)||snake.isTouching(wall12)||snake.isTouching(wall13)||snake.isTouching(wall14)||snake.isTouching(wall15)||snake.isTouching(wall16)||snake.isTouching(wall17)||snake.isTouching(wall18)||snake.isTouching(wall19)||snake.isTouching(wall20)||snake.isTouching(wall21)||snake.isTouching(wall22))
  {

    snake.x=1160;
    snake.y=560;
    snake.setVelocity(0,0);
  }
  if(snake.isTouching(obs1)||snake.isTouching(obs2)||snake.isTouching(obs3)||snake.isTouching(obs4))
{
  snake.x=1160;
  snake.y=560;
  snake.setVelocity(0,0);
}
if(snake.isTouching(mouse)){
  textSize(30);
  fill("red");
  text("YOU WON",width/2,height/2)
}




  if(obs1.isTouching(inviobs1))
  {
    obs1.bounceOff(inviobs1);
  }

  drawSprites();
  text(mouseX+" "+mouseY,mouseX,mouseY)
}