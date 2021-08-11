var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class particles {
    constructor(canvas, text, stars) {
        // las posiciones
        this.x = 0;
        this.y = 0;
        // el angulo que va a tomar
        this.angle = 0.1;
        // hacia que direccion va a ir
        this.directionX = Math.random() * 1 - 0.7;
        this.directionY = Math.random() * 1 - 0.7;
        // este es para que se conecte
        this.limit = 200;
        // este es el texto que va a mostrar
        this.text = "hello world";
        // estas son algunas cosas para la animacion y eso
        this.index = 0;
        this.stars = 1;
        this.color = `(${55 + Math.random() * 200},${20 + Math.random() * 200},${55 + Math.random() * 200},0.5)`;
        this.x = Math.random() * canvas.width; // hacemos esto para generarlo en alguna parte del mapa
        this.y = Math.random() * canvas.height;
        this.text = text;
        this.angle = Math.random() * Math.PI;
        this.stars += stars;
    }
    move(ctx, canvas) {
        return __awaiter(this, void 0, void 0, function* () {
            // esto va  a hacer que de unas vueltitas
            this.x += this.directionX + Math.sin(this.angle) * 0.5;
            this.y += this.directionY + Math.sin(this.angle) * 0.2;
            // esto cambiara el angulo
            this.angle += Math.random() * 0.009 - 0.005;
            // esto nos servira para cambiar el donde ir en cierto momento
            this.index += 1;
            // en el caso de se pase del canvas hacemos esto para reiniciarlo
            if (this.x > canvas.width ||
                this.x < 0 ||
                this.y > canvas.height ||
                this.y < 0) {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.directionX = Math.random() * 1 - 0.7;
                this.directionY = Math.random() * 1 - 0.7;
            }
            // esto cambiara la direccion dependiendo del index
            if (!(this.index % this.limit)) {
                this.directionX = Math.random() * 1 - 0.7;
                this.directionY = Math.random() * 1 - 0.7;
            }
            // y aqui es donde ponemos el texto
            ctx.beginPath();
            ctx.fillStyle = "rgb" + this.color;
            ctx.textAlign = "center";
            // entre mas estrellas tenga mas grande sera
            ctx.font = this.stars * 5 + "px sans-serif";
            ctx.fillText(this.text, this.x, this.y);
            ctx.restore();
        });
    }
    connect(ctx, particles) {
        return __awaiter(this, void 0, void 0, function* () {
            particles
                .filter((i) => {
                let r1 = i.x - this.x; //aqui lo que hacemos es filtrar las particulas que estan alrededor de la actual con un limite de ya puesto
                let r2 = this.x - i.x;
                return (r1 >= 0 && r1 <= this.limit) || (r2 >= 0 && r2 <= this.limit);
            })
                .filter((i) => {
                let r1 = i.y - this.y; // lo mismo
                let r2 = this.y - i.y;
                return (r1 >= 0 && r1 <= this.limit) || (r2 >= 0 && r2 <= this.limit);
            })
                .forEach((i) => __awaiter(this, void 0, void 0, function* () {
                // y aqui ponemos lo que queriamos
                ctx.beginPath();
                ctx.strokeStyle = "rgba" + this.color;
                ;
                // hacemos una linea de punto this.x a i.x y i.y a this.y
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(i.x, i.y);
                // coloreamos la linea
                ctx.stroke();
                ctx.restore();
            }));
        });
    }
}
export function textAnimation(ctx, canvas) {
    // esto solo es para el centro
    let width = canvas.width / 2;
    let height = canvas.height / 2;
    for (let i = 0; i <= 10; i++) {
        ctx.beginPath();
        // generamos el color
        ctx.fillStyle = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},0.70)`;
        ctx.beginPath();
        //delimitamos el tamaño y estilo
        ctx.font = "10vw sans-serif";
        ctx.textAlign = "center";
        // lo mostramos
        ctx.fillText("ranon-rat", Math.floor(width - 10 + Math.random() * 20), Math.floor(height - 10 + Math.random() * 10));
    }
}
