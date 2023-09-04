const canvas: HTMLCanvasElement = document.getElementById('canvasContainer');
class Tren{
    private _nombre: string = 'tren';
    
    constructor(nombre?: string){
        if(nombre) this._nombre = nombre;
    }
    set  nombre(nombre){
        this._nombre = nombre
    }
    get nombre(): string{
        return this._nombre
    }
    pintarTren(){
        if (canvas){
            let ctx = canvas!.getContext('2d')

            ctx.fillStyle = randomColor()
            ctx.fillRect(100, 245, 450, 30)

            this.square(120, 200, 90, randomColor())
            this.square(260, 200, 90, randomColor())
            this.square(400, 200, 90, randomColor())

            this.circle(165, 310, 40, randomColor())
            this.circle(305, 310, 40, randomColor())
            this.circle(445, 310, 40, randomColor())

            ctx.fillStyle = randomColor()
            ctx.fillRect(540, 80, 180, 210)
            ctx.fillStyle = randomColor()
            ctx.fillRect(520, 30, 220, 50)
            this.square(585.5, 120, 90, randomColor())
            this.circle(635, 290, 65, randomColor())
            this.square(720, 139, 150, randomColor())
            this.square(780, 89, 50, randomColor())
            ctx.fillStyle = randomColor()
            ctx.fillRect(755, 35, 100, 55)
            this.circle(755, 315, 34, randomColor())
            this.circle(830, 315, 34, randomColor())
            this.triangle(870, 194, 95, randomColor())

            this.hex(138, 110, randomColor())
            this.pent(305, 110, randomColor())
            this.oct(427, 110, randomColor())

            ctx.font = '20px sans-serif'
            ctx.fillStyle = 'white'
            ctx.fillText(this.nombre, 770, 210)
        }
    }
    square(x: Number, y: Number, size: Number, color: String){
        let ctx = canvas!.getContext('2d')
        ctx.beginPath()
        ctx.moveTo(x,y)
        ctx.lineTo((x + size), y)
        ctx.lineTo((x + size), (y + size))
        ctx.lineTo(x, (y + size))
        ctx.fillStyle = color
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
    }
    circle(x: Number, y: Number, size: Number, color: String){
        let ctx = canvas!.getContext('2d')
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI*2)
        ctx.closePath()
        ctx.fillStyle = color
        ctx.fill()
        ctx.stroke()
    }
    triangle(x: Number, y: Number, size: Number, color: String){
        let ctx = canvas!.getContext('2d')
        ctx.beginPath()
        ctx.moveTo(x,y)
        ctx.lineTo(x, (y + size))
        ctx.lineTo((x + size), (y + size))
        ctx.fillStyle = color
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
    }

    hex(x: Number, y: Number, color: String){
        let ctx = canvas!.getContext('2d')
        ctx.beginPath()
        ctx.moveTo(x,y)

        ctx.lineTo((x - 30), (y + 45))
        ctx.lineTo(x, (y + 90))
        ctx.lineTo((x + 55), (y + 90))
        ctx.lineTo((x + 85), (y + 45))
        ctx.lineTo((x + 55), y)

        ctx.fillStyle = color
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
    }
    pent(x: Number, y: Number, color: String){
        let ctx = canvas!.getContext('2d')
        ctx.beginPath()
        ctx.moveTo(x,y)

        ctx.lineTo((x - 45), (y + 40))
        ctx.lineTo((x - 25), (y + 90))
        ctx.lineTo((x + 30), (y + 90))
        ctx.lineTo((x + 45), (y + 40))

        ctx.fillStyle = color
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
    }
    oct(x: Number, y: Number, color: String){
        let ctx = canvas!.getContext('2d')
        ctx.beginPath()
        ctx.moveTo(x,y)

        ctx.lineTo((x - 30), (y + 30))
        ctx.lineTo((x - 30), (y + 60))
        ctx.lineTo(x, (y + 90))
        ctx.lineTo((x + 40), (y + 90))
        ctx.lineTo((x + 70), (y + 60))
        ctx.lineTo((x + 70), (y + 30))
        ctx.lineTo((x + 40), y)
        

        ctx.fillStyle = color
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
    }
    }
    function randomColor(){
        let colors = ['pink', 'orange', 'blue', 'red', 'lightblue', 'purple', 'bisque', 'green', 'lightgreen', 'yellow', 'brown']
        return colors[Math.floor(Math.random() * colors.length)]
    }

const juan: Tren = new Tren();
console.log('Mi nombre es ' + juan.nombre);
juan.nombre = 'Christia'
juan.pintarTren();
console.log(juan.nombre);