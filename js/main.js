window.onload = getElement;
function getElement() {
  output = document.getElementById('input');
  amount = document.getElementById('amount');
  amount.innerHTML = localStorage.money;
}
function restart() {
  delete localStorage.money;
  alert(localStorage.money);
}

function clickHandler() {
  //localStorage.money;
  money = localStorage.getItem('money')
  //localStorage.setItem('money', 1)

  if (localStorage.money) {
            localStorage.money = Number(localStorage.money)+1;
        } else {
            localStorage.money = 1;
        }
}
