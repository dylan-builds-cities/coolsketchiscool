var size = 0;

function setup() {
  createCanvas(400, 400);
   background(255);
}

function draw() {
  fill(mouseX, mouseY, mouseX);
  ellipse(200, 200, 200, 200);
  fill(mouseX, mouseX, mouseY);
  ellipse(50, 50, 50, 50);
  fill(mouseY, mouseX, mouseY);
  ellipse(350,350, 50, 50);
  fill(mouseY, mouseY, mouseX);
  ellipse(50, 350, 50, 50);
  fill(mouseY, mouseX, mouseX);
  ellipse(350,50, 50, 50);
  ellipse(mouseY, mouseX, size, size); 
}

function mousePressed() {
  size = size + 20;
}
