const botonesPestañas = document.querySelectorAll('.boton-pestaña');
const contenidosPestañas = document.querySelectorAll('.contenido-pestaña');
const reproductor = document.getElementById('reproductor-musica');

const musicas = {
    navidad: '../sounds/ena.mp3',
    cumple: '../sounds/extasis.mp3',
    anio: '../sounds/comoHago.mp3'
};

botonesPestañas.forEach(boton => {
    boton.addEventListener('click', () => {
        botonesPestañas.forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');

        const idPestaña = boton.getAttribute('data-pestaña');

        contenidosPestañas.forEach(contenido => contenido.classList.remove('activo'));
        document.getElementById(idPestaña).classList.add('activo');

        // Cambiar música
        if (musicas[idPestaña]) {
            reproductor.src = musicas[idPestaña];
            reproductor.play().catch(() => {
                console.log("Reproducción automática bloqueada por el navegador");
            });
        }
    });
});

// Guardado automático con localStorage
const idsTextos = ['texto-navidad', 'texto-cumple', 'texto-anio'];

idsTextos.forEach(id => {
    const elemento = document.getElementById(id);

    if (localStorage.getItem(id)) {
        elemento.innerHTML = localStorage.getItem(id);
    }

    elemento.addEventListener('input', () => {
        localStorage.setItem(id, elemento.innerHTML);
    });
});

// Reproducir música inicial (Navidad)
reproductor.src = musicas.navidad;