const { Responsive } = P5Template;

let video;
let batBloods = [];

function setup() {
  new Responsive().createResponsiveCanvas(1440, 800, 'contain', true);
  video = createCapture(VIDEO, { flipped: true });
  video.hide();
  console.log(video);
}

function draw() {
  background(random(0, 255));
  let aspectRatioCanvas = width / height;
  let aspectRatioVideo = video.width / video.height;
  let newWidth, newHeight;
  let zeroX, zeroY;
  if (aspectRatioCanvas > aspectRatioVideo) {
    newWidth = width;
    newHeight = newWidth / aspectRatioVideo;
  } else {
    newHeight = height;
    newWidth = newHeight / aspectRatioVideo;
  }

  // 중심 기준으로 회전
  push();
  translate(width / 2, height / 2); // 중심 이동
  rotate(random(-0.04, 0.04)); //화면 흔들리게
  tint(random(255), random(255), random(255)); //색상 변경
  image(video, -newWidth / 2, -newHeight / 2, newWidth, newHeight);
  pop();

  fill('#D19339');
  noStroke();
  circle(mouseX, mouseY, 100);
  rect(mouseX - 50, mouseY, 100, 300);
  circle(mouseX, mouseY + 300, 100);
  rect(mouseX - 26, mouseY + 300, 52, 200);
  ellipse(mouseX, mouseY + 500, 100, 50);

  fill('red'); // 글씨 색
  textSize(50); // 글씨 크기
  textAlign(CENTER, TOP); // 위 중앙 정렬
  text("🔪Hi, I'm Chucky. Wanna play?🔪", width / 2, 40); // 글씨 위치
  textAlign(CENTER, BOTTOM); // 아래 중앙 정렬
  text("🩸I'm your friend till the end!🩸", width / 2, height - 40); // 글씨 위치

  for (let batBlood of batBloods) {
    batBlood.emit(5);
    batBlood.show();
    batBlood.update();
  }
}

function mousePressed() {
  batBloods.push(new BatBlood(mouseX, mouseY));
}
