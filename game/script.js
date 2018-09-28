var money = 0;
var moneyPC = 1;
var upgrdCost = 100;
var upgradeAmt = 5;
function update() {
  document.getElementById("moneyCount").innerHTML = 'Money: ' + Math.round(money);
  document.getElementById("moneyButton").innerHTML = 'Money +' + moneyPC;
  if(upgrdCost < 1000000) {document.getElementById("upgrade-money-button").innerHTML = 'Upgrade to: ' + '+' + upgradeAmt + ' Cost: ' + Math.ceil(upgrdCost);}
  if(upgrdCost >= 1000000) {document.getElementById("upgrade-money-button").innerHTML = 'Not Available';}
}

function moneyButton() {
  money += moneyPC;
  update();
}

function upgrade() {
  if(money >= upgrdCost) {
    money -= upgrdCost;
    upgrdCost *= 7.8;
    moneyPC = upgradeAmt;
    upgradeAmt *=4;
    update();
  }

}
function win() {
  if(money >= 1000000) {
    money -= 1000000;
    document.getElementById("winner").innerHTML = "You win, enjoy a picture of a sock!"
    document.body.style.backgroundImage = "url('https://3.bp.blogspot.com/-THCFEB_lLv4/VnP_hAek04I/AAAAAAAALBQ/jsFsSbAg7SQ/s1600/2015-12-14%2B09.42.34.jpg')";
  }
}
