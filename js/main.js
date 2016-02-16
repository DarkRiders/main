window.onload = getElement;
function getElement() {
  output = document.getElementById('input');
  amount = document.getElementById('amount');
  amount.innerHTML = localStorage.money;
}
function restart() {
  delete localStorage.money;
}

function clickHandler() {
  money = localStorage.getItem('money')
  if (localStorage.money) {
            localStorage.money = Number(localStorage.money) + Number(output.value);
        } else {
            localStorage.money = 1;
        }
}
