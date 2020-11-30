import '../styles/style.css';
import Game from './game';
import levels from './levels';

const containers = {
    section: document.querySelector('.space'),
    htmlMarkup: document.querySelector('.html-view').querySelector('.markup'),
    cssEditor: document.querySelector('.css-editor').querySelector('.answer'),
    lvlHeader: document.querySelector('.level-text'),
    selectorName: document.querySelector('.selector-name'),
    lvlTitle: document.querySelector('.title'),
    syntax: document.querySelector('.syntax'),
    hint: document.querySelector('.hint'),
    examples: document.querySelector('.examples'),
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
game.createLevel(getLevelNumber());


for (let i = 1; i <= 20; i += 1) {
    document.querySelector('.line-numbers').innerHTML += `${i}<br>`;
}

document.querySelector('.level-nav').addEventListener('click', (e) => {
    let lvlNumber = getLevelNumber();
    if (e.target.classList.contains('next')) {
        if (lvlNumber < levels.length - 1) lvlNumber++;
    } else if (e.target.classList.contains('previous')) {
        if (lvlNumber > 0) lvlNumber--;
    }
    setLevelNumber(lvlNumber);
    game.createLevel(lvlNumber);
});

const itemsList = document.querySelector('.menu__box').childNodes;

itemsList.forEach((item, index) => {
    item.addEventListener('click', () => {
        setLevelNumber(index);
        game.createLevel(index);
    });
});