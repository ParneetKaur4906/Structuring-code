var database;
var canvas,backgroundImg;
var gameState = 0;
var playerCount;
var form,game,player;

function setup(){
    canvas = createCanvas(500,500);
    database = firebase.database();
     game = new Game();
     game.getState();
     game.start();
}

function draw(){
   
    
    
}


