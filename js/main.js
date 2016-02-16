window.onload = getElement;
function getElement() {
  output = document.getElementById('input');

}
function restart() {
  delete localStorage.money;
  alert(localStorage.money);
}

function clickHandler() {
  localStorage.money;
  money = localStorage.getItem('money')
  localStorage.setItem('money', money+output)
  alert(money);
}
