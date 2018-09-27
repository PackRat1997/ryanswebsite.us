var slideNum = 1;
function nextSlide() {
  if (slideNum == 0) {document.getElementById('changeIMG').src='img/Positions/Position1.png'};
  if (slideNum == 1) {document.getElementById('changeIMG').src='img/Positions/Position2.png'};
  if (slideNum == 2) {document.getElementById('changeIMG').src='img/Positions/Position3.png'};
  if (slideNum == 3) {document.getElementById('changeIMG').src='img/Positions/Position4.png'};
  if (slideNum == 4) {document.getElementById('changeIMG').src='img/Positions/Position5.png'};
  if (slideNum == 5) {document.getElementById('changeIMG').src='img/Positions/Position6.png'};
  if (slideNum == 6) {window.location.assign("#PAGE2-1");};
  addOne();
}
function previousSlide() {
  if (slideNum > 1) {
  slideNum -= 2;
  nextSlide();}
  window.location.assign("#PAGE2");
}
function addOne() {
  slideNum += 1;
}
function beginning() {
  slideNum = 1;
}
