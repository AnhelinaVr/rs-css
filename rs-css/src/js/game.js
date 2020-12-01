import levels from './levels';

class Game {
    constructor(containers) {
        this.containers = containers;
    }

    createLevel(lvlNumber) {
        const level = levels[lvlNumber];
        this.containers.table.innerHTML = level.htmlMarkup;
        this.containers.doThis.innerText = level.doThis;
        this.containers.htmlMarkup.innerText = level.htmlMarkup;
        this.containers.lvlHeader.innerHTML = `Level ${+lvlNumber + 1} of ${levels.length}`;
        this.containers.title.innerHTML = level.title;
        this.containers.comment.innerHTML = level.comment;
        this.containers.syntax.innerHTML = level.syntax;
        this.containers.hint.innerHTML = level.hint;
        this.containers.examples.innerHTML = level.examples;
        this.containers.notes.innerHTML = level.notes;
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

    checkAnswer(lvlNumber) {
        const level = levels[lvlNumber];
        const answer = this.containers.cssEditor.value.replace(/\s+/g, ' ').trim();
        if (answer === level.answer) alert('OK!')
            //|| document.querySelectorAll(level.answer) === document.querySelectorAll('то что надо')
        else alert('NOT OK!');
    }

}

export default Game;