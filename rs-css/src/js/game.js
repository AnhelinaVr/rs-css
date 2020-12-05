import levels from './levels';
import Codemirror from 'codemirror/lib/codemirror';
import 'codemirror/mode/css/css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/display/placeholder';

class Game {
    constructor(containers) {
        this.containers = containers;
        this.editor = Codemirror
            .fromTextArea(this.containers.cssEditor, {
                autofocus: true,
            });
        this.containers.cssEditor = document.querySelector('.CodeMirror');

    }

    createLevel(lvlNumber) {
        const level = levels[lvlNumber];
        this.containers.table.innerHTML = level.htmlMarkup;
        this.containers.doThis.innerText = level.doThis;
        this.containers.htmlMarkup.innerText = level.htmlMarkup;
        hljs.highlightBlock(this.containers.htmlMarkup);
        this.editor.setSize(null, 30);
        this.containers.cssEditor.classList.add('answer');
        this.containers.lvlHeader.innerHTML =
            `Level ${+lvlNumber + 1} of ${levels.length}`;
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
        this.highlightGoalItems(level);
    }

    nextLevel(lvlNumber) {
        if (lvlNumber < levels.length - 1) lvlNumber++;
        this.createLevel(lvlNumber);
        return lvlNumber;
    }

    previousLevel(lvlNumber) {
        if (lvlNumber > 0) lvlNumber--;
        this.createLevel(lvlNumber);
        return lvlNumber;
    }

    highlightGoalItems(level) {
        this.containers.table
            .querySelectorAll(level.answer)
            .forEach((item) => {
                item.classList.add('active');
            });
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
        const answer = this.editor.getValue()
            .replace(/\s+/g, ' ')
            .trim();
        const cssInput = this.containers.cssEditor;
        let isCorrect;

        try {
            isCorrect = nodeListsAreEqual(
                this.containers.table
                .querySelectorAll(answer),
                this.containers.table
                .querySelectorAll(level.answer)
            )
        } catch (error) {
            isCorrect = false;
        }

        if (!isCorrect) {
            cssInput.classList.add('shake');
            cssInput.addEventListener('animationend', () => {
                cssInput.classList.remove('shake');
            });
        } else {
            lvlNumber = this.nextLevel(lvlNumber);
            cssInput.classList.add('correct');
            cssInput.addEventListener('transitionend', () => {
                cssInput.classList.remove('correct');
                this.editor.setValue('');
            });
        }
        return lvlNumber;
    }

    showAnswer(lvlNumber) {
        const answer = levels[lvlNumber].answer;
        let i = 0;
        let cssCode = '';
        const cssEditor = this.editor;
        cssEditor.setValue('sssss');
        cssEditor.setValue('aaaaaa');
        typeWriter(50);

        function typeWriter(speed = 100) {
            if (i < answer.length) {
                cssCode += answer.charAt(i);
                cssEditor.setValue(cssCode);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
    }
}

function nodeListsAreEqual(list1, list2) {
    if (list1.length !== list2.length) {
        return false;
    }
    return Array.from(list1)
        .every((node, index) => node === list2[index]);
}

export default Game;