function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  let eyeX = width / 2;
  let eyeY = height / 2;
  let pupilX = map(mouseX, 0, width, -15, 15);
  let pupilY = map(mouseY, 0, height, -15, 15);

  // Eye outline
  fill(240);
  stroke(0);
  ellipse(eyeX, eyeY, 100, 60);

  // Iris
  fill(100, 180, 255);
  ellipse(eyeX + pupilX, eyeY + pupilY, 30, 30);

  // Pupil
  fill(0);
  ellipse(eyeX + pupilX, eyeY + pupilY, 10, 10);
}