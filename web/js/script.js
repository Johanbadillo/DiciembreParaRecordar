const botones = document.querySelectorAll('.boton-pestaña');
const secciones = document.querySelectorAll('.contenido-pestaña');
const titulo = document.getElementById('titulo-principal');
const audio = document.getElementById('reproductor-musica');

const config = {
    navidad: { clase: 'navidad', musica: './sounds/comoHago.mp3', inicio: 60 },
    cumple:  { clase: 'cumple',  musica: './sounds/ena.mp3', inicio: 60 },
    anio:    { clase: 'anio',    musica: './sounds/extasis.mp3', inicio: 60 }
};

function cambiarPestana(id) {
    botones.forEach(b => {
        b.classList.toggle('activo', b.dataset.pestaña === id);
        b.setAttribute('aria-selected', b.dataset.pestaña === id);
    });

    secciones.forEach(s => {
        s.classList.toggle('activo', s.id === id);
    });

    titulo.className = `titulo-principal ${config[id].clase}`;

    audio.pause();
    audio.src = config[id].musica;
    audio.currentTime = config[id].inicio;
    audio.play().catch(() => {});
}

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        cambiarPestana(boton.dataset.pestaña);
    });
});

// Inicio
cambiarPestana('navidad');