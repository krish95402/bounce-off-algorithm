var fixrect,movingrect;

function setup() {
  createCanvas(1200,800);
  
fixrect=createSprite(400, 100, 50, 50); 
fixrect.shapeColor="green";
fixrect.debug=true;

movingrect=createSprite(400,800,80,80);
movingrect.shapeColor="green"
movingrect.debug=true;
movingrect.velocityY=-5;
fixrect.velocityY=5;
}

function draw() {
  background(0);  
  
  if(fixrect.x-movingrect.x< fixrect.width/2+movingrect.width/2
    &&movingrect.x-fixrect.x<movingrect.width/2+fixrect.width/2
    
    ){
    movingrect.velocityX=movingrect.velocityX *(-1);
    fixrect.velocityX=fixrect.velocityX*(-1);
    }
    if(fixrect.y-movingrect.y<fixrect.height/2+movingrect.height/2
      &&movingrect.y-fixrect.y<movingrect.height/2+fixrect.height/2){
      fixrect.velocityY=fixrect.velocityY*(-1);
      movingrect.velocityY=movingrect.velocityY*(-1);

    }
  drawSprites();

   
}