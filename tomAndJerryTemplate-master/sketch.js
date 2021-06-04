var cat,mouse,garden,gardenImg;
var catImg1,catImg2,catImg3;
var mouseImg1,mouseImg2,mouseImg3;


function preload() {
    //load the images here

    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    gardenImg = loadImage("images/garden.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");

}
 
function setup(){
    //create tom and jerry sprites here
    createCanvas(800,800);
    //garden=createSprite(300,300);
    //garden.addImage("gardenImg",gardenImg);

    cat = createSprite(width/1.1,height-100,20,20);
    cat.addAnimation("catRunning",catImg1);
    cat.scale=0.11;

    mouse = createSprite(width/4,height-100,20,20);
    mouse.addAnimation("mouseRunning",mouseImg1);
    mouse.scale=0.14;
}

function draw() {

  
    background(gardenImg);

    edges= createEdgeSprites();
    if (cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.X=300;
        cat.velocityX=0;
        cat.addAnimation("catLastImage",catImg3);
        cat.changeAnimation("catLastImage");

        mouse.addAnimation("mouse4.png",mouseImg3);
        mouse.changeAnimation("mouse4.png");
        cat.scale=0.2;
        mouse.scale=0.2;
    }



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW){
    cat.velocityX=-3;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
    cat.scale=0.2;

    mouse.addAnimation("mouseRunning",mouseImg2);
    mouse.changeAnimation("mouseRunning");
  
    }

}
