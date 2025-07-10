let t = 0;

function setup() {
  createCanvas(600, 400);
  stroke(50);
  noFill();
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  let breath = sin(t) * 20;
  for (let i = 0; i < 10; i++) {
    let y = i * 10;
    let offset = map(i, 0, 9, 60, 100) + breath;
    beginShape();
    curveVertex(-offset, y);
    curveVertex(-offset, y);
    curveVertex(0, y + 5);
    curveVertex(offset, y);
    curveVertex(offset, y);
    endShape();
  }
  t += 0.03;
}