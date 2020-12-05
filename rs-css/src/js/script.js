import '../styles/style.css';
import Game from './game';

const containers = {
    table: document.querySelector('.table'),
    doThis: document.querySelector('.do-this'),
    htmlMarkup: document.querySelector('.markup'),
    cssEditor: document.querySelector('.answer'),
    lvlHeader: document.querySelector('.level-current'),
    title: document.querySelector('.level-title'),
    comment: document.querySelector('.comment'),
    syntax: document.querySelector('.syntax'),
    hint: document.querySelector('.hint'),
    examples: document.querySelector('.examples'),
    notes: document.querySelector('.notes'),
    menu: document.querySelector('.menu__box')
};

function getLevelNumber() {
    return localStorage.getItem('level') || 0;
}

function setLevelNumber(number) {
    if (Number.isInteger(number))
        localStorage.setItem('level', number);
}

const game = new Game(containers);
game.createMenu();

function createLevel(lvlNumber) {
    lvlNumber = lvlNumber || getLevelNumber();
    game.createLevel(lvlNumber);
}

createLevel();

// Arrows
document.querySelector('.level-nav')
    .addEventListener('click', (e) => {
        if (e.target.classList.contains('next')) {
            setLevelNumber(
                game.nextLevel(getLevelNumber())
            );
        } else if (e.target.classList.contains('previous')) {
            setLevelNumber(
                game.previousLevel(getLevelNumber())
            );
        }
    });

// Change level if menu item clicked
document.querySelector('.menu__box').childNodes
    .forEach((item, index) => {
        item.addEventListener('click', () => {
            setLevelNumber(index);
            createLevel(index);
            document.getElementById('menu__toggle').checked = false;
        });
    });

// Reset progress
document.querySelector('.reset-button')
    .addEventListener('click', () => {
        if (confirm('Are you sure?')) {
            localStorage.clear();
            createLevel();
        }
    });

// Check answer

function checkAnswer(lvlNumber) {
    setLevelNumber(
        game.checkAnswer(lvlNumber)
    );
}
document.querySelector('.enter-button')
    .addEventListener('click', () => {
        checkAnswer(getLevelNumber());
    });
document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        checkAnswer(getLevelNumber());
    }
});

// Show answer (help)

document.querySelector('.help-button')
    .addEventListener('click', () => {
        game.showAnswer(getLevelNumber());
    });