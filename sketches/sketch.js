const { Responsive } = PSTemplate;

function setup() {
  new Responsive().createResponsiveCanvas(1440, 1080, 'contain', true);
}

function draw() {
  background('#000000');
  noStroke();
  fill('red');
  circle(mouseX, mouseY, 100);
  Responsive.drawReferenceGrid('#ffffff');
}
