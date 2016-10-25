//class Bug, character made of simple shapes
function Bug(x, y) {
  //create vectors for position, velocity, and acceleration
  this.position = createVector(x, y); //create a vector from x,y parameters
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.velocity.limit(8);

  //update function for movement, adding accel to velocity and velocity to position
  //velocity limit of 8
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(8);
    this.position.add(this.velocity);
  }

  //method so that the bug follows the mouse
  this.follow = function(dest1) {
    //destination is the difference between the desired point and the current position
    //the direction and value of acceleration comes from this vector
    var destination = p5.Vector.sub(dest1, this.position);
    
    //I normalized this vector, which keeps direction, and multiplied it by
    //another value to increase it
    //normalizing it creates a kind of "hover" effect around the mouse, rather than jerking movements
    destination.normalize(); //make acceleration = 1
    destination.mult(1.5); //makes the accelerate bug a little faster
    
    this.acceleration = destination;
  }

  //butterfly-shaped bug
  this.display = function() { //display function
      //I tried to rotate the bug depending on the direction of the velocity, but I couldn't make it work

      /*push();
      translate(this.position.x, this.position.y); //translate to bug position for rotation
      rotate(this.velocity.heading() + radians(90));
      */

      //antenna
      strokeWeight(4);
      stroke(100);
      line(this.position.x - 5, this.position.y - 35, this.position.x - 10, this.position.y - 60);
      line(this.position.x + 5, this.position.y - 35, this.position.x + 10, this.position.y - 60);
      fill(40, 255, 70);
      noStroke();
      ellipse(this.position.x - 10, this.position.y - 60, 6, 6);
      ellipse(this.position.x + 10, this.position.y - 60, 6, 6);


      noStroke();
      //wings
      fill(127, 170);
      ellipse(this.position.x - 30, this.position.y - 20, 40, 30);
      ellipse(this.position.x + 30, this.position.y - 20, 40, 30);
      ellipse(this.position.x - 30, this.position.y + 5, 45, 40);
      ellipse(this.position.x + 30, this.position.y + 5, 45, 40);

      //body
      fill(255, 245, 60);
      ellipse(this.position.x, this.position.y, 30, 50);
      ellipse(this.position.x, this.position.y - 25, 30, 30);

      strokeWeight(4);
      stroke(0);
      point(this.position.x - 10, this.position.y - 30);
      point(this.position.x + 10, this.position.y - 30);
      //pop();

    } //display
}