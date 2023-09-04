const canvas: HTMLCanvasElement = document.getElementById('ProbandoCanvas');
console.log(canvas);

const aviableWidth = window.screen.availWidth;
const height = window.screen.availHeight;

canvas.style.width = `${aviableWidth * .75}px`;
canvas.style.height = `${height * .75}px`;
canvas.style.backgroundColor = 'red';

window.addEventListener('load', ()=>{
    if(canvas.getContext){
        const dimernsion = canvas.getContext('2d');
        // dimernsion?.beginPath();
        // dimernsion?.moveTo(0,0);
        // dimernsion?.lineTo(200,200);
        dimernsion?.fillStyle = 'orange';
        dimernsion?.fillRect(5,5,100,100);
        dimernsion?.strokeStyle= '#b40900';
        dimernsion?.beginPath();
        dimernsion?.moveTo(50,30);
        dimernsion?.lineTo(200, 50);
        dimernsion?.stroke();

        dimernsion?.fillRect(200,5,100,100);

    }

})
