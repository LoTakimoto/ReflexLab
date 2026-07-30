const area = document.getElementById('area');
const message = document.getElementById('message');
const result = document.getElementById('result');
const history = document.getElementById('history');

let state = 'idle'; 
let timer = null;
let greenInstant = 0;
const MAX_HISTORY = 5;

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
    greenInstant = performance.now();
}

function registerClick() {
    const reactionTimeMs = performance.now() - greenInstant;
    state = 'idle';
    area.style.background = '#b23a3a';
    message.textContent = 'click to try again';
    result.textContent = `${Math.round(reactionTimeMs)} ms`; 
    addToHistory(reactionTimeMs);
}

function tooEarly() {
    clearTimeout(timer);
    state = 'idle';
    area.style.background = '#6b2626';
    message.textContent = 'too early! click to try again';
}

function addToHistory(ms) {
    const item = document.createElement('li');
    item.textContent = `${Math.round(ms)} ms`;
    history.prepend(item);

    while(history.children.length > MAX_HISTORY) {
        history.removeChild(history.lastChild);
    }
}

area.addEventListener('click', () => {
    if (state === 'idle') {
        arm();
    } else if (state === 'armed') {
        tooEarly();
    } else if (state === 'ready') {
        registerClick();
    }
}); 


// falta programar o history, quero deixar mais fofinho e quero que apareça um cronometro quando o estado for pra verde
// !!! botar mais funções legais -> mudar cor, efeitos sonoros, usar barra de espaço?..