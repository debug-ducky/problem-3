var inc = document.getElementById('#inc-btn');
var dec = document.getElementById('dec-btn');

var counter = 0;

function renderCounter() {
  var countEl = document.getElementById('count');
  countEl.textContent = counter;
}

renderCounter()

incEl.onclick = function() {
  counter = counter + 1;
  renderCounter();
}

decEl.onClick = function() {
  counter = counter - 1;
  renderCounter();
}