var cat,catImage,catImage2,catImage3,catImage4
var mouse, mouseImage,mouseImage2,mouseImage3,mouseImage4
var bg,bgImage
function preload() {
    //load the images here

    bgImage=loadImage("garden.png")
    catImage=loadImage("tomOne.png");
    catImage2=loadImage("tomTwo.png");
    catImage3=loadImage("tomThree.png");
    catImage4=loadImage("tomFour.png");
    mouseImage=loadImage("jerryOne.png");
    mouseImage2=loadImage("jerryTwo.png");
    mouseImage3=loadImage("jerryThree.png");
    mouseImage4=loadImage("jerryFour.png");
}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here

  bg=createSprite(800,800);
  bg.addImage("background" , bgImage);
  
  cat=createSprite(600, 400, 50, 80);
  cat.addImage(catImage,"tomeOne.png");

  mouse=createSprite(400,200,80,30);
  mouse.addImage(tomImage,"jerryOne.png");
  

}

function draw() {
background(0);
     if(cat.x-mouse.x<(cat.width-mouse.width)/2){
       cat.addAnimation(catImage3);
       cat.changeAnimation(catImage3);
     }

  
      }
    drawSprites();

    function keyPressed(){

      //For moving and changing animation write code here
      if(keyCode===LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation(catImage2,"tomeTwo.png");
        cat.changeAnimation(catImage2);
      }
      }


  


