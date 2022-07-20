var catWalk, sebUp, youWin


function preload() {
    cat_licking = loadAnimation("animations/cat licking animation/a1.png", "animations/cat licking animation/a2.png", "animations/cat licking animation/a3.png");

    cat_walking = loadAnimation("animations/cat walking animation/c1.png", "animations/cat walking animation/c2.png");

    person_walking = loadAnimation("animations/person walking animation/b1.png", "animations/person walking animation/b2.png",
        "animations/person walking animation/b3.png", "animations/person walking animation/b4.png");

    PickUp_cat = loadAnimation("animations/picking up cat animation/d1.png", "animations/picking up cat animation/d2.png", "animations/picking up cat animation/d3.png",
        "animations/picking up cat animation/d4.png", "animations/picking up cat animation/d5.png", "animations/picking up cat animation/d6.png",
        "animations/picking up cat animation/d7.png", "animations/picking up cat animation/d8.png", "animations/picking up cat animation/d9.png");

    you_win = loadAnimation("animations/Win animation/1.png", "animations/Win animation/2.png", "animations/Win animation/3.png",
        "animations/Win animation/4.png", "animations/Win animation/5.png", "animations/Win animation/6.png", "animations/Win animation/7.png",
        "animations/Win animation/8.png", "animations/Win animation/9.png", "animations/Win animation/10.png");

    sebBase = loadAnimation("e1.png");

    person_walking_right = loadAnimation("animations/person walking right/f1.png", "animations/person walking right/f2.png",
        "animations/person walking right/f3.png", "animations/person walking right/f4.png");

    //make crouch, spaggaethi mode, cat2 




}

function setup() {
    createCanvas(1879, 900);

    // sehWalkR = createSprite(5)



    //catLick = createSprite(120, 828);
    //catLick.scale = 0.06

    catWalk = createSprite(200, 811, 18, 85);
    catWalk.addAnimation("walking", cat_walking)
    catWalk.addAnimation("catLicking",cat_licking);
    
    catWalk.scale = 0.25;

    // seb = createSprite(1500,680,200,250);
    // seb.scale = 0.19;

    // sebUp = createSprite(250,680,200,300);
    // sebUp.scale = 0.25;

    youWin = createSprite(950, 500);
    youWin.addAnimation("you_win", you_win);
    youWin.scale = 0.85;

    sebWalk = createSprite(500, 680);
    sebWalk.addAnimation("person_walking", person_walking);
    sebWalk.addAnimation("person_walking_right", person_walking_right);
    sebWalk.addAnimation("base_stand", sebBase);
    sebWalk.addAnimation("pickUp", PickUp_cat);

    sebWalk.debug = true
    sebWalk.setCollider("rectangle" , 80 , 0 , 180 , 400)

    sebWalk.scale = 0.25;

    edges = createEdgeSprites()

}

function draw() {



    if (keyDown("d")) {

        sebWalk.x = sebWalk.x + 5
        sebWalk.changeAnimation("person_walking_right")
        sebWalk.scale = 1
    }



    if (keyDown("a")) {

        // sebWalk.velocityX = -5;

        sebWalk.x = sebWalk.x - 5


        sebWalk.changeAnimation("person_walking");
        sebWalk.scale = 0.26;

    };

    if (keyDown("q") && sebWalk.isTouching(catWalk)) {

        sebWalk.changeAnimation("pickUp")
        sebWalk.scale = 0.25
    }

    background("gray")

    sebWalk.bounceOff(edges)
   
    drawSprites()




}




