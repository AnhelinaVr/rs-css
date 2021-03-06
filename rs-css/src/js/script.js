import '../styles/style.css';
import { containers, statistics } from './constants';
import Game from './game';

function getLevelNumber() {
  return localStorage.getItem('level') || 0;
}

function setLevelNumber(number) {
  if (Number.isInteger(number)) localStorage.setItem('level', number);
}

function getStatistics() {
  return JSON.parse(localStorage.getItem('helped')) || statistics;
}

function clearObject(obj) {
  for (const prop of Object.getOwnPropertyNames(obj)) {
    delete obj[prop];
  }
}

const game = new Game(containers, getStatistics());
game.createMenu();

function createLevel(lvlNumber = getLevelNumber()) {
  game.createLevel(lvlNumber);
}

createLevel();

// Arrows
document.querySelector('.level-nav')
  .addEventListener('click', (e) => {
    if (e.target.classList.contains('next')) {
      setLevelNumber(
        game.nextLevel(getLevelNumber()),
      );
    } else if (e.target.classList.contains('previous')) {
      setLevelNumber(
        game.previousLevel(getLevelNumber()),
      );
    }
  });

// Change level if menu item clicked

containers.menu.addEventListener('click', (event) => {
  if (event.target.classList.contains('menu__item')) {
    const index = Array.from(containers.menu.childNodes)
      .findIndex((item) => item === event.target);
    setLevelNumber(index);
    createLevel(index);
    document.getElementById('menu__toggle').checked = false;
  }
});

// Reset progress
document.querySelector('.reset-button')
  .addEventListener('click', () => {
    if (window.confirm('Are you sure?')) {
      localStorage.clear();
      clearObject(statistics);
      game.statistics = statistics;
      game.createMenu();
      createLevel();
    }
  });

// Check answer

function checkAnswer(lvlNumber) {
  setLevelNumber(
    game.checkAnswer(lvlNumber),
  );
}

document.querySelector('.enter-button')
  .addEventListener('click', () => {
    checkAnswer(getLevelNumber());
  });

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    checkAnswer(getLevelNumber());
  }
});

// Show answer (help)

document.querySelector('.help-button')
  .addEventListener('click', () => {
    game.showAnswer(getLevelNumber());
  });
