var bg;
var spaceShipImg,spaceShip1,spaceShip2Img,spaceShip2;
var astroidImg,astroid;
var starImg,star;

function preload(){
    bg = loadImage("background.jpg");
    starImg = loadImage("star.png");
    astroidImg = loadImage("astroid.png");
    spaceShipImg = loadImage("spaceship1.png")
    spaceShip2Img = loadImage("spaceship2.png")
}

function setup(){
    canvas = createCanvas(1690,800)

    spaceShip1 = createSprite(150,400,50,50);
    spaceShip1.addImage(spaceShipImg);
    spaceShip1.scale = 0.5
    spaceShip1.rotation = 90

    spaceShip2 = createSprite(1500,400,50,50);
    spaceShip2.addImage(spaceShip2Img);
    spaceShip2.scale = 0.5
    spaceShip2.rotation = -90

    astroid = createSprite(400,100,50,50);
    astroid.addImage(astroidImg);
    astroid.scale= 0.2

    star = createSprite(300,600,50,50);
    star.addImage(starImg);
    star.scale = 0.2
}

function draw(){
    background(bg);

    drawSprites()
}
