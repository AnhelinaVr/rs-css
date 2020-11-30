import levels from './levels';

class Game {
    constructor(containers) {
        this.containers = containers;
    }

    createLevel(lvlNumber) {
        const level = levels[lvlNumber];
        this.containers.section.innerHTML = level.spaceMarkup;
        this.containers.htmlMarkup.innerText = level.spaceMarkup;
        this.containers.lvlHeader.innerHTML = `Level ${+lvlNumber + 1} of ${levels.length}`;
        this.containers.selectorName.innerHTML = level.selectorName;
        this.containers.lvlTitle.innerHTML = level.helpTitle;
        this.containers.syntax.innerHTML = level.syntax;
        this.containers.hint.innerHTML = level.help;
        this.containers.examples.innerHTML = level.examples;
        this.containers.menu.childNodes.forEach(item => {
            item.classList.remove('active');
        });
        this.containers.menu.children[lvlNumber].classList.add('active');
    }

    createMenu() {
        const menu = this.containers.menu;
        menu.innerHTML = '';
        for (let i = 0; i < levels.length; i += 1) {
            let li = document.createElement('li');
            li.classList.add('menu__item')
            li.innerHTML = `${i + 1} - ${levels[i].syntax}`;

            menu.appendChild(li);
        }
    }
}

export default Game;