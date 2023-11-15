const btn = document.getElementById('btn');

let index = 0;
btn.style.backgroundColor = 'red';
const colors = ['yellow', 'green','red'];

btn.addEventListener('click', function onClick() {
    btn.style.backgroundColor = colors[index];
    btn.style.color = 'black';
    index = index >= colors.length - 1 ? 0 : index + 1;
});