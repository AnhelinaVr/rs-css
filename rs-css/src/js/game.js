import Codemirror from 'codemirror/lib/codemirror';
import hljs from 'highlight.js';
import levels from './levels';
import 'codemirror/mode/css/css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/display/placeholder';

function nodeListsAreEqual(list1, list2) {
  if (list1.length !== list2.length) return false;
  return Array.from(list1)
    .every((node, index) => node === list2[index]);
}

class Game {
  constructor(containers, statistics) {
    this.containers = containers;
    this.statistics = statistics;
    // Codemirror to dynamic highlighting CSS
    this.editor = Codemirror
      .fromTextArea(this.containers.cssEditor, {
        autofocus: true,
      });
    this.containers.cssEditor = document.querySelector('.CodeMirror');
  }

  createLevel(lvlNumber) {
    const level = levels[+lvlNumber];
    this.createGameElements(level);
    this.containers.doThis.innerText = level.doThis;
    // highlight.js to highlight HTML
    hljs.highlightBlock(this.containers.htmlMarkup);
    this.editor.setSize(null, 30);
    this.editor.setValue('');
    this.containers.cssEditor.classList.add('answer');
    this.containers.lvlHeader.innerHTML = `Level ${+lvlNumber + 1} of ${levels.length}`;
    this.containers.title.innerHTML = level.title;
    this.containers.comment.innerHTML = level.comment;
    this.containers.syntax.innerHTML = level.syntax;
    this.containers.hint.innerHTML = level.hint;
    this.containers.examples.innerHTML = level.examples;
    this.containers.notes.innerHTML = level.notes;
    this.containers.menu.childNodes.forEach((item) => {
      item.classList.remove('active');
    });
    this.containers.menu.children[lvlNumber]
      .classList.add('active');
    this.highlightGoalItems(level);
    this.progressBar(lvlNumber);
  }

  createGameElements(level) {
    this.containers.htmlMarkup.innerHTML = '';
    this.containers.table.innerHTML = '';
    this.containers.tooltips.innerHTML = '';
    for (const item of level.code) {
      const parent = document.createElement(item.tag);
      if (item.class !== null) parent.classList.add(item.class);
      if (item.id) parent.id = item.id;
      if (item.for) parent.dataset.for = item.for;
      if (item.child !== null) {
        const child = document.createElement(item.child.tag);
        parent.appendChild(child);
      }
      this.containers.table.appendChild(parent);
    }
    const parents = Array.from(this.containers.table.childNodes);
    let mark = '';
    for (const item of parents) {
      mark += `${item.outerHTML}\n`;
    }
    // Add elements into HTML container
    for (const iterator of mark.split('\n')) {
      const span = document.createElement('span');
      this.containers.htmlMarkup.appendChild(span);
      span.innerText += `${iterator}\n`;
    }
    // To separate the elements to further highlight when you hover
    setTimeout(() => {
      const nodes = Array
        .from(this.containers.htmlMarkup.childNodes);
      for (const [key, value] of parents.entries()) {
        const tooltip = document.createElement('span');
        tooltip.innerText += nodes[key].innerText;
        tooltip.classList.add('tooltiptext');
        this.containers.tooltips.appendChild(tooltip);
        value.addEventListener('mouseover', () => {
          value.classList.add('hovered');
          nodes[key].classList.add('hovered');
          tooltip.style.visibility = 'visible';
        });
        value.addEventListener('mouseout', () => {
          parents[key].classList.remove('hovered');
          nodes[key].classList.remove('hovered');
          tooltip.style.visibility = 'hidden';
        });
        nodes[key].addEventListener('mouseover', () => {
          value.classList.add('hovered');
          nodes[key].classList.add('hovered');
          tooltip.style.visibility = 'visible';
        });
        nodes[key].addEventListener('mouseout', () => {
          value.classList.remove('hovered');
          nodes[key].classList.remove('hovered');
          tooltip.style.visibility = 'hidden';
        });
      }
    }, 350);
  }

  winMessage() {
    this.containers.table.innerHTML = '<h2>You did it!<br>HAPPY NEW YEAR</h2>';
    document.querySelector('.snow').classList.add('show');
  }

  nextLevel(lvlNumber) {
    if (+lvlNumber < levels.length - 1) lvlNumber = +lvlNumber + 1;
    this.createLevel(lvlNumber);
    return lvlNumber;
  }

  progressBar(lvlNumber) {
    let i = (100 * lvlNumber) / levels.length;
    if (i === 0) i = 1;
    const elem = this.containers.progressBar;
    let width = i;
    if (width >= 100) i = 0;
    else {
      width += (100 / levels.length);
      elem.style.width = `${width}%`;
    }
  }

  previousLevel(lvlNumber) {
    if (lvlNumber > 0) lvlNumber -= 1;
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
    const { menu } = this.containers;
    menu.innerHTML = '';
    for (const [key, value] of levels.entries()) {
      const li = document.createElement('li');
      const icon = document.createElement('i');
      // font-awesome classes
      icon.classList.add('fa');
      icon.classList.add('fa-check');
      li.appendChild(icon);
      if (this.statistics[key]) icon.classList.add('helped');
      else if (this.statistics[key] === false) icon.classList.add('done');
      li.classList.add('menu__item');
      li.innerHTML += `${key + 1} - ${value.syntax}`;
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
          .querySelectorAll(level.answer),
      );
    } catch (error) {
      isCorrect = false;
    }

    if (!isCorrect) {
      cssInput.classList.add('shake');
      cssInput.addEventListener('animationend', () => {
        cssInput.classList.remove('shake');
        this.editor.setValue('');
      });
    } else {
      if (+lvlNumber === (levels.length - 1)) {
        this.winMessage();
        return lvlNumber;
      }
      if (!this.statistics[lvlNumber]) {
        this.containers.menu.childNodes[lvlNumber]
          .querySelector('.fa')
          .classList.add('done');
        this.addToStatistics(lvlNumber);
      }
      lvlNumber = this.nextLevel(lvlNumber);
      cssInput.classList.add('correct');
      cssInput.addEventListener('transitionend', () => {
        cssInput.classList.remove('correct');
      });
    }
    return lvlNumber;
  }

  addToStatistics(lvlNumber, isHelped = false) {
    this.statistics[lvlNumber] = isHelped;
    localStorage.setItem('helped', JSON.stringify(this.statistics));
  }

  showAnswer(lvlNumber) {
    const { answer } = levels[lvlNumber];
    let i = 0;
    let cssCode = '';
    const cssEditor = this.editor;
    this.containers.menu.childNodes[lvlNumber]
      .querySelector('.fa')
      .classList.add('helped');
    const isHelped = true;
    this.addToStatistics(lvlNumber, isHelped);

    function typeWriter(speed = 100) {
      if (i < answer.length) {
        cssCode += answer.charAt(i);
        cssEditor.setValue(cssCode);
        i += 1;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter(50);
  }
}

export default Game;
