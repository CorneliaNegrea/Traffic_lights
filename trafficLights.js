const btn = document.getElementById('btn');

let colorIndex = 0;
btn.style.backgroundColor = 'red';
const colors = ['yellow', 'green','red'];

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = colors[colorIndex];
    if (colorIndex < colors.length) {
      ++colorIndex;
    }
    if (colorIndex == colors.length) {
      colorIndex = 0;
    }
});

  function change() {
    btn.style.backgroundColor = colors[colorIndex];
    if (colorIndex < colors.length) {
      ++colorIndex;
    }
    if (colorIndex == colors.length) {
      colorIndex = 0;
    }
  }
  setInterval(change, 10000);