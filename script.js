const abrirBtn = document.getElementById("abrirBtn");
const contenido = document.getElementById("contenido");
const inicio = document.getElementById("pantallaInicio");

const mensaje = `
Querido tío, hoy celebramos no solo tu cumpleaños,
sino también la gran persona que eres.

Gracias por tu ejemplo, tus consejos y por estar siempre presente
en los momentos importantes.

Te deseo mucha salud, felicidad y éxito.

Que Dios te bendiga hoy y siempre.

¡Feliz cumpleaños!
`;

abrirBtn.addEventListener("click", ()=>{

inicio.style.display="none";
contenido.style.display="block";

document.getElementById("musica").play();

escribirMensaje();

celebracion();

});

function escribirMensaje(){

let i=0;

const velocidad=40;

const escribir=setInterval(()=>{

document.getElementById("mensaje").innerHTML += mensaje.charAt(i);

i++;

if(i>=mensaje.length){
clearInterval(escribir);
}

},velocidad);

}

function celebracion(){

setInterval(()=>{

confetti({
particleCount:120,
spread:100,
origin:{y:0.6}
});

},3000);

}