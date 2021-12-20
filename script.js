'use strict';


const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.addElement = function () {
    let element = 0;
    const attr = this.selector.slice(1);
    if (this.selector.startsWith('.')) {
        element = document.createElement('div');
        element.classList.add(attr);
        element.textContent = 'Tag <div>';
    } else if (this.selector.startsWith('#')) {
        element = document.createElement('p');
        element.textContent = 'Tag <p>';
        element.id = attr;
    } else {
        alert('Некорректный ввод');
    }
    if (element) {
        element.style.cssText = `height: ${this.height}px; 
        width: ${this.width}px; 
        background-color: ${this.bg}; 
        font-size: ${this.fontSize}px;
        position: absolute;`;
        const body = document.querySelector('body');
        body.append(element);
    }
};

const createElem = function () {
    const newElement = new DomElement('.block', '100', '100', 'green', '16');
    newElement.addElement();
};

document.addEventListener("DOMContentLoaded", createElem);

const render = function (x, y) {
    const elem = document.querySelector('.block');
    elem.style.left = x + "px";
    elem.style.top = y + "px";
};

const keyPress = function (event) {
    let rectElem = document.querySelector('.block').getBoundingClientRect();
    let x = rectElem.x,
        y = rectElem.y;

    switch (event.code) {
        case "ArrowRight":
            x += 10;
            render(x, y);
            break;
        case "ArrowLeft":
            x -= 10;
            render(x, y);
            break;
        case "ArrowUp":
            y -= 10;
            render(x, y);
            break;
        case "ArrowDown":
            y += 10;
            render(x, y);
            break;
        default:
            alert('Нажимайте стрелки');
            break;
    }
};

document.addEventListener('keydown', keyPress);