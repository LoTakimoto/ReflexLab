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
    area.classList.remove('early');
    area.style.background = '#C74D4D';
    message.textContent = 'Wait for green...';
    result.textContent = '';

    const delay = 1000 + Math.random() * 3000;
    timer = setTimeout(getReady, delay);
}

function getReady() {
    state = 'ready';
    area.style.background = '#39D98A';
    message.textContent = 'REFLEX!';
    greenInstant = performance.now();
}

function registerClick() {
    const reactionTimeMs = performance.now() - greenInstant;
    state = 'idle';
    area.style.background = '#C74D4D';
    message.textContent = 'Click to try again :)';
    result.textContent = `${Math.round(reactionTimeMs)} ms`; 
    addToHistory(reactionTimeMs);
}

function tooEarly() {
    clearTimeout(timer);
    state = 'idle';
    area.style.background = '#6b2626';
    message.textContent = 'Too early! Click to try again';
}

function addToHistory(ms) {
    const item = document.createElement('li');
    item.textContent = `${Math.round(ms)} ms`;
    item.style.background = colorForTime(ms);
    history.prepend(item);
    

    while(history.children.length > MAX_HISTORY) {
        history.removeChild(history.lastChild);
    }
}

function colorForTime(ms) {
    if (ms < 250) {
        return '#39D98A';
    } else if (ms < 400) {
        return '#F58A1F';
    } else {
        return '#C74D4D';
    }
}


function startOrReact() {
    if (state === 'idle') {
        arm();
    } else if (state === 'armed') {
        tooEarly();
    } else if (state === 'ready') {
        registerClick();
    }
}

area.addEventListener('click', startOrReact);

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.code === 'Enter') {
        event.preventDefault();
        startOrReact();
    }
});

const startScreen = document.getElementById('startScreen');
const game = document.getElementById('game');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    game.classList.remove('hidden');
});

const settingsButton = document.getElementById('settingsButton');

settingsButton.addEventListener('click', () => {
    alert('Coming soon!')
});

settingsButton.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    settingsScreen.classList.remove('hidden');
});