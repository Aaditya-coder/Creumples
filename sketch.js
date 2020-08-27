const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg,platform,platform2;
var bird, slingshot,dustbinobj;




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    dustbinobj = new dustbin(800,380);
    

    bird = new Bird(100,100);

   // log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200,y:100});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);

    ground.display();
    dustbinobj.display();

    bird.display();
    platform.display();
 //   log6.display();
    slingshot.display();    

}


function mouseDragged(){

Matter.Body.setPosition( bird.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

slingshot.fly();

}



