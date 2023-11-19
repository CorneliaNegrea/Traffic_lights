const btn = document.getElementById('btn');
let colorIndex = 0;

const colors = ['yellow', 'green', 'red'];

function changeColor() {
  btn.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}

btn.style.backgroundColor = 'red';

btn.addEventListener('click', changeColor);
