const rickAndMorty = document.getElementById("rickAndMorty");
const eyes = document.querySelectorAll(".eye");

const anchor = [];
const rects = [];
const anchorX = [];
const anchorY = [];

eyes.forEach((_eye) => {
  anchor.push(_eye);
  rects.push(_eye.getBoundingClientRect());
});

rects.forEach((_rect) => {
  anchorX.push(_rect.left + _rect.width / 2);
  anchorY.push(_rect.top + _rect.height / 2);
});

document.addEventListener("mousemove", (_el) => {
  const mouseX = _el.clientX;
  const mouseY = _el.clientY;

  eyes.forEach((_eye, _index) => {
    const angleDeg = angle(mouseX, mouseY, anchorX[_index], anchorY[_index]);
    _eye.style.transform = `rotate(${180 + angleDeg}deg)`;
    rickAndMorty.style.filter = `hue-rotate(${angleDeg}deg)`
  });
});

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}
