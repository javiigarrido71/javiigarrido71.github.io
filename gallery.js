const ruta = './Fotos/';

const imagenes = [
    { src: ruta + 'Diciembre.jpg', mes: 'Diciembre', texto: 'Todo comenzó un diciembre de 2022....' },
    { src: ruta + 'Enero.jpg', mes: 'Enero', texto: 'Dónde decidimos probar qué pasaría de nuevo' },
    { src: ruta + 'Febrero.jpg', mes: 'Febrero', texto: 'No nos iba mal, ¡Hasta íbamos a jugar por ahí! (Ya te había pedido salir jeje)' },
    { src: ruta + 'Marzo.jpg', mes: 'Marzo', texto: 'Nos encanta vestir arregladitos. Somos todo unos presumidos' },
    { src: ruta + 'Abril.jpg', mes: 'Abril', texto: 'Hasta que por fin, nos atrevimos a nuestra primera aventura' },
    { src: ruta + 'Mayo.jpg', mes: 'Mayo', texto: 'Día de cruces curioso: Discusión, pasarlo bien y problemas con el clavel' },
    { src: ruta + 'Junio.jpg', mes: 'Junio', texto: 'Lo que pides por AliExpress' },
    { src: ruta + 'Julio.jpg', mes: 'Julio', texto: 'Lo que te llega (estamos guapos igual)' },
    { src: ruta + 'Agosto.jpg', mes: 'Agosto', texto: 'Duda existencial, lo bien que me queda? Coño que esto es de los dos perdón' },
    { src: ruta + 'Septiembre.jpg', mes: 'Septiembre', texto: 'FIIUUM LA FOKIN COPA PISTÓN' },
    { src: ruta + 'Octubre.jpg', mes: 'Octubre', texto: '¿Pero sabes ya pa que lao se hace o no?' },
    { src: ruta + 'Noviembre.jpg', mes: 'Noviembre', texto: 'Mes aburrido pero nunca feos (Foto cristal típica nuestra de antes)' },
    { src: ruta + 'Diciembre1.jpg', mes: 'Diciembre', texto: 'Siempre gordos nunca ingordos' },
    { src: ruta + 'Enero1.jpg', mes: 'Enero', texto: 'COXEEEEEE ADVENTURESSS' },
    { src: ruta + 'Febrero1.jpg', mes: 'Febrero', texto: 'Y aquí hacemos un año oficial ¿Nos hechamos la de Febrero? 📸' },
    { src: ruta + 'Bonus1.jpg', mes: 'BONUS 1', texto: 'Q ASE BEBESIN, HAS VISTO UN LERE €?' },
    { src: ruta + 'Bonus2.jpg', mes: 'BONUS 2', texto: 'Enojá 😠🔪' },
    { src: ruta + 'Bonus3.jpg', mes: 'BONUS 3', texto: 'Perri 😝😝😝' },
    { src: ruta + 'Bonus4.jpg', mes: 'BONUS 4', texto: 'FELIIIIII SONRISAA?' },
    { src: ruta + 'Bonus5.jpg', mes: 'BONUS 5', texto: 'CABAIO HORSE BRRRR' },
    { src: ruta + 'Bonus6.jpg', mes: 'BONUS 6', texto: '¿Guarri? 😛' },
    { src: ruta + 'Bonus7.jpg', mes: 'BONUS 7', texto: 'MORDISIÓN 🧛‍♀️ Y FELI' },
    { src: ruta + 'Bonus8.jpg', mes: 'BONUS 8', texto: 'En ve de miedo damo risa 😭😭' },
];

const final = 'JA, ¿TE CREÍAS QUE ESO ERA TODO? SIGUE PASANDO, AHORA VIENE LO MEJOR';

const letras = [
    { texto: 'T' },
    { texto: 'E' },
    { texto: 'Q' },
    { texto: 'U' },
    { texto: 'I' },
    { texto: 'E' },
    { texto: 'R' },
    { texto: 'O' },
    { texto: 'M' },
    { texto: 'I' },
    { texto: 'R' },
    { texto: 'A' },
    { texto: 'T' },
    { texto: 'I' },
    { texto: '♥' },
    { texto: final },
    { texto: final },
    { texto: final },
    { texto: final },
    { texto: final },
    { texto: final },
    { texto: final },
    { texto: 'Te quiero mi dory pe 🐟, a seguir haciendo el payaso juntos 💘' },
];

const galeria = document.getElementById('galeria');
const textoMes = document.getElementById('texto-mes');
const anteriorBtn = document.getElementById('anterior');
const siguienteBtn = document.getElementById('siguiente');
const foto = document.querySelector('.foto');
const imagenBack = document.querySelector('.imagen-back');
const letra = document.getElementById('letra');

let index = 0;
let girada = false;

function actualizarGaleria() {
    const actual = imagenes[index];
    document.getElementById('texto-mes').textContent = actual.texto;
    document.querySelector('.imagen-back').style.backgroundImage = `url(${actual.imagenBack})`;
    letra.textContent = letras[index].texto;

    if (girada) {
        textoMes.style.display = 'none';
        imagenBack.style.display = 'block';
        foto.style.transform = 'rotateY(180deg)';
    } else {
        textoMes.style.display = 'block';
        imagenBack.style.display = 'none';
        foto.style.transform = 'rotateY(0deg)';
    }

    imagenBack.style.backgroundImage = `url(${actual.src})`;
}

function ocultarTextoMes() {
    textoMes.style.display = 'none';
}

anteriorBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = imagenes.length - 1;
    }

    girada = false;

    actualizarGaleria();
});

siguienteBtn.addEventListener('click', () => {
    if (index < imagenes.length - 1) {
        index++;
    } else {
        index = 0;
    }

    girada = false;
    actualizarGaleria();
});

anterior1.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = imagenes.length - 1;
    }

    girada = false;
    actualizarGaleria();
});

siguiente1.addEventListener('click', () => {
    if (index < imagenes.length - 1) {
        index++;
    } else {
        index = 0;
    }

    girada = false;
    actualizarGaleria();
});

foto.addEventListener('click', function() {
    girada = !girada;
    actualizarGaleria();
});


actualizarGaleria();

document.getElementById("musica").play();
  