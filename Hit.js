let hitcount = 0;
let isgamestart = false;
function start() {
  document.getElementById("gamestatus").innerText = "Game Start";
  hitcount = 0;
  isgamestart = true;
  let Monster = document.getElementById("Monster");

  let time = setInterval(() => {
    let i = Math.floor(Math.random() * 500) + 1;
    let j = Math.floor(Math.random() * 500) + 1;
    Monster.style.left = i + "px";
    Monster.style.top = j + "px";
  }, 1000);
  setTimeout(() => {
    clearTimeout(time);
    isgamestart = false;
    document.getElementById("gamestatus").innerText = "Game Over";
  }, 30000);
}

function HitMon() {
  if (isgamestart) {
    hitcount++;
    document.getElementById("totalHit").innerText = hitcount;
  }
}
