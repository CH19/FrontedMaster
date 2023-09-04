"use strict";
const canvas = document.getElementById('ProbandoCanvas');
console.log(canvas);
const aviableWidth = window.screen.availWidth;
const height = window.screen.availHeight;
canvas.style.width = `${aviableWidth * .75}px`;
canvas.style.height = `${height * .75}px`;
canvas.style.backgroundColor = 'red';
window.addEventListener('load', () => {
    if (canvas.getContext) {
        const dimernsion = canvas.getContext('2d');
        // dimernsion?.beginPath();
        // dimernsion?.moveTo(0,0);
        // dimernsion?.lineTo(200,200);
        dimernsion === null || dimernsion === void 0 ? void 0 : dimernsion.fillStyle = 'orange';
        dimernsion === null || dimernsion === void 0 ? void 0 : dimernsion.fillRect(5, 5, 100, 100);
        dimernsion === null || dimernsion === void 0 ? void 0 : dimernsion.strokeStyle = '#b40900';
        dimernsion === null || dimernsion === void 0 ? void 0 : dimernsion.beginPath();
        dimernsion === null || dimernsion === void 0 ? void 0 : dimernsion.moveTo(50, 30);
        dimernsion === null || dimernsion === void 0 ? void 0 : dimernsion.lineTo(200, 50);
        dimernsion === null || dimernsion === void 0 ? void 0 : dimernsion.stroke();
        dimernsion === null || dimernsion === void 0 ? void 0 : dimernsion.fillRect(200, 5, 100, 100);
    }
});
