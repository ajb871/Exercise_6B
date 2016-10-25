//Rather than using an old exercise, I decided to create 
//a new character that I could use for this exercise
//a bug that moves towards the mouse from around the screen
//I'm using vectors for position, velocity, and acceleration
//possibly use arrays to store several bugs
//references to seek_00 and Nature of Code ch.1

function setup() {
  createCanvas(500, 500);
  background(80, 125, 255);
  derek = new Bug(100, 100); //this is my bug, derek
}

function draw() {
  background(80, 125, 255);
  fill(10, 255, 120);
  rect(0, 400, width, 100);
  var mouse = createVector(mouseX, mouseY); //vector for mouse position
  //methods of derek
  derek.follow(mouse); //pass mouse parameter, could use any value
  derek.update();
  derek.display();

  //flower graphic where mouse is
  noStroke();
  fill(255, 120, 120);
  ellipse(mouseX, mouseY - 10, 15, 15);
  ellipse(mouseX, mouseY + 10, 15, 15);
  ellipse(mouseX - 10, mouseY, 15, 15);
  ellipse(mouseX + 10, mouseY, 15, 15);
  fill(255, 245, 40);
  ellipse(mouseX, mouseY, 10, 10);
  
  //used to check acceleration values
  //console.log(derek.acceleration.x);
}