"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomColor = exports.randomNumber = void 0;
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.randomNumber = randomNumber;
function randomColor() {
    // let colors = ['pink','gray', 'orange', 'blue', 'red', 'lightblue', 'purple', 'bisque', 'green', 'lightgreen', 'yellow', 'brown']
    // return colors[Math.floor(Math.random() * colors.length)]
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index++) {
        color += letters[Math.floor(Math.random() * (letters.length - 1))];
    }
    return color;
}
exports.randomColor = randomColor;
