const area = document.getElementById('area');
const message = document.getElementById('message');
const result = document.getElementById('result');

let state = 'idle'; 
let timer = null;

function arm() {
    state = 'armed';
    area.style.background = '#b23a3a';
    message.textContent = 'wait for green...';
    result.textContent = '';

    const delay = 1000 + Math.random() * 3000;
    timer = setTimeout(getReady, delay);
}

function getReady() {
    state = 'ready';
    area.style.background = '#2f9e63';
    message.textContent = 'click now!';
}

area.addEventListener('click', () => {
    if (state === 'idle') {
        arm();
    }
});