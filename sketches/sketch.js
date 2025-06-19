let video;
let batBloods = [];

function setup() {
  createCanvas(800, 400);
  video = createCapture(VIDEO);
  video.size(800, 400);
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
  rotate(random(-0.03, 0.0)); //화면 흔들리게
  tint(random(255), random(255), random(255)); //색상 변경
  image(video, -newWidth / 2, -newHeight / 2, newWidth, newHeight);
  pop();
  fill('#D19339');
  noStroke();
  circle(mouseX, mouseY, 50);
  rect(mouseX - 25, mouseY, 50, 150);
  circle(mouseX, mouseY + 150, 50);
  rect(mouseX - 13, mouseY + 150, 26, 100);
  ellipse(mouseX, mouseY + 250, 50, 25);

  fill('red'); // 글씨 색
  textSize(32); // 글씨 크기
  textAlign(CENTER, TOP); // 왼쪽 위 정렬
  text("🔪🩸I'm your friend till the end! 🩸🔪", width / 2, 20); // 글씨 위치

  for (let batBlood of batBloods) {
    batBlood.emit(5);
    batBlood.show();
    batBlood.update();
  }
}

function mousePressed() {
  batBloods.push(new BatBlood(mouseX, mouseY));
}
