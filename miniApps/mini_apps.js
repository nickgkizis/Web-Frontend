function colorChange(){
    const body =document.getElementById('bd');
    const rgb = getRandomColor();
    body.style.backgroundColor = rgb;
    document.getElementById('color').innerHTML=`RGB Code: ${rgb}`;
}

function colorChange1() {
    const box1 = document.getElementById('color-box-1');
    if (box1.style.backgroundColor === 'white') {
        box1.style.backgroundColor = 'red';
    } else if (box1.style.backgroundColor === 'red') {
        box1.style.backgroundColor = 'green';
    } else if (box1.style.backgroundColor === 'green') {
        box1.style.backgroundColor = 'blue';
    } else {
        box1.style.backgroundColor = 'white';
    }
}

function colorChange2() {
    const box2 = document.getElementById('color-box-2');
    const rgb = getRandomColor();
    box2.style.backgroundColor = rgb;
    document.getElementById('color2').innerHTML=`RGB Code: ${rgb}`;
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

let history = [];

function randomNum() {
  const num = Math.floor(Math.random() * 999);
  document.getElementById('number-box').innerHTML = num;
  history.push(num);
}

function reset() {
  document.getElementById('number-box').innerHTML = 0;
  history = [];
  document.getElementById('record').innerHTML = ''
}

function showRecord() {
  const recordElement = document.getElementById('record');
  recordElement.innerHTML = history.join(', ');
  document.getElementById('record').style.display = 'block';
}
let counter = 0;

function resetCount(){
    counter = 0;
    document.getElementById('counter-box').innerHTML=counter;
}

function plus(){
    counter += 1;
    document.getElementById('counter-box').innerHTML=counter;
}

function minus(){
    counter -= 1;
    document.getElementById('counter-box').innerHTML=counter;
}

function plus10(){
    counter += 10;
    document.getElementById('counter-box').innerHTML=counter;
}

function minus10(){
    counter -= 10;
    document.getElementById('counter-box').innerHTML=counter;
}

function imageChanger(){
    const rand = Math.floor(Math.random() * 6);
    const loadImg = `<img src="./pic${rand}.jpg">`;
    document.getElementById('image-container').innerHTML=loadImg;
}

const scrambleBox = document.getElementById('scrambleBox');
const scrambleButton = document.getElementById('scrambleButton');
const unscrambleButton = document.getElementById('unscrambleButton');
const userInput = document.getElementById('userInput');

function getRandomPosition(max) {
  return Math.floor(Math.random() * max) + 'px';
}

function createScrambledLetters(text) {
  scrambleBox.innerHTML = '';
  const letters = text.split('');
  letters.forEach((letter, index) => {
    const span = document.createElement('span');
    span.classList.add('letter');
    span.textContent = letter;
    span.dataset.top = '50%';
    span.dataset.left = `${index * 5}%`;
    span.style.top = getRandomPosition(200);
    span.style.left = getRandomPosition(200);
    scrambleBox.appendChild(span);
  });
  addHoverEffect();
}

function addHoverEffect() {
  const letters = scrambleBox.querySelectorAll('.letter');
  scrambleBox.addEventListener('mouseover', () => {
    letters.forEach(letter => {
      letter.style.top = letter.dataset.top;
      letter.style.left = letter.dataset.left;
    });
  });
  scrambleBox.addEventListener('mouseout', () => {
    letters.forEach(letter => {
      letter.style.top = getRandomPosition(200);
      letter.style.left = getRandomPosition(200);
    });
  });
}

function unscrambleLetters() {
  const letters = scrambleBox.querySelectorAll('.letter');
  letters.forEach(letter => {
    letter.style.top = '50%';
    letter.style.left = letter.dataset.left;
  });
}

scrambleButton.addEventListener('click', () => {
  const text = userInput.value.trim();
  if (text) {
    createScrambledLetters(text);
  }
});

unscrambleButton.addEventListener('click', () => {
  unscrambleLetters();
});

