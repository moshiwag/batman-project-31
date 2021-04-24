const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var umbrella_man, thunder1Img, thunder2Img, thunder3Img,thunder4Img;
var drops = [];
var max_Drops = 200;
var thunderCreatedFrame;    //declared this variable
var man;

function preload(){
    umbrella_man = loadImage("walking_1.png");
    thunder1Img = loadImage("1.png");
    thunder2Img = loadImage("2.png");
    thunder3Img = loadImage("3.png");
    thunder4Img = loadImage("4.png");
}

function setup(){
    var canvas = createCanvas(600,600);

    engine = Engine.create();
    world = engine.world;

    man = new Man();


    for(var i= 0;i<max_Drops; i++){
        var drop = new Drop(random(0,600),random(0,600),3);
        drops.push(drop);
    }
    
}

function draw(){
    background(0);
    Engine.update(engine);


    man.display();

    // attaching different thunder images to the thundr sprite as per the choice 
    // between 1 and 4
   var rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunder = createSprite(random(10,570),random(10,30),10,10);
        thunder.scale = 0.5;
        thunderCreatedFrame = frameCount;   //updated the variable here
        switch(rand){
            case 1 : thunder.addImage(thunder1Img);
            break;
            case 2 : thunder.addImage(thunder2Img);
            break;
            case 3 : thunder.addImage(thunder3Img);
            break;
            case 4 : thunder.addImage(thunder4Img);
            break;
            default : break;
        }
    }

    // destroying thunder sprites after 20 frames from its creation
    if(thunderCreatedFrame+20 === frameCount && thunder){   
        thunder.destroy();
    }

    for(var i = 0; i< max_Drops; i++){
        drops[i].display();
        drops[i].update();
    }
    //added here  (without this the thunders are not visible as thunder is a sprite)
    drawSprites() 
}   

