window.onload = getElement;
function getElement() {
  output = document.getElementById('input');

}
function restart() {
  delete localStorage.money;
  alert(localStorage.money);
}

function clickHandler() {
  //localStorage.money;
  money = localStorage.getItem('money')
  //localStorage.setItem('money', 1)
  localStorage.money = Number(localStorage.money)+1;
  alert(money);
  if (localStorage.money) {
    localStorage.money = Number(localStorage.money)+1;
  } else {
    localStorage.money = 1;
  }
}
