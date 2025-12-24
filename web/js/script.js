const botonesPestañas = document.querySelectorAll('.boton-pestaña');
const contenidosPestañas = document.querySelectorAll('.contenido-pestaña');
const reproductor = document.getElementById('reproductor-musica');
const tituloPrincipal = document.getElementById('titulo-principal');

const configuraciones = {
    navidad: {
        musica: './sounds/MA_SoundCreator_Winter_Holiday.wav', // Cambia si el nombre es diferente
        clase: 'navidad',
        inicio: 60  // Minuto 1
    },
    cumple: {
        musica: './sounds/tu_archivo_cumple.wav', // Pon aquí el nombre real de tu archivo de cumpleaños
        clase: 'cumple',
        inicio: 60
    },
    anio: {
        musica: './sounds/tu_archivo_anio.wav', // Pon aquí el nombre real de tu archivo de año nuevo
        clase: 'anio',
        inicio: 60
    }
};

botonesPestañas.forEach(boton => {
    boton.addEventListener('click', () => {
        // Botón activo
        botonesPestañas.forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');

        const idPestaña = boton.getAttribute('data-pestaña');

        // Mostrar contenido
        contenidosPestañas.forEach(c => c.classList.remove('activo'));
        document.getElementById(idPestaña).classList.add('activo');

        // Cambiar tema del título
        tituloPrincipal.className = 'titulo-principal ' + configuraciones[idPestaña].clase;

        // Reproducir música desde el minuto 1
        const config = configuraciones[idPestaña];
        reproductor.src = config.musica;
        reproductor.currentTime = config.inicio;
        reproductor.play().catch(() => {
            console.log("Sonido bloqueado. Haz click en una pestaña para activarlo.");
        });
    });
});

// Inicio: pestaña Navidad
tituloPrincipal.classList.add('navidad');
reproductor.src = configuraciones.navidad.musica;
reproductor.currentTime = configuraciones.navidad.inicio;