// CONFIGURACIÓN: Pon aquí la fecha en que empezaron (Año, Mes - 1, Día)
// Nota: El mes empieza en 0 (Enero es 0, Febrero es 1, etc.)
const fechaInicio = new Date(2023, 4, 21); 

function irAPantalla(numero) {
    // Ocultar todas las secciones
    document.querySelectorAll('.seccion').forEach(sec => sec.classList.add('oculto'));
    
    // Mostrar la sección deseada
    document.getElementById('pantalla' + numero).classList.remove('oculto');

    if (numero === 2) {
        calcularTiempo();
        crearCorazones();
    }
}

function calcularTiempo() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;
    
    // Convertir milisegundos a días
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    document.getElementById('contador').innerText = dias + " días";
}

function crearCorazones() {
    const contenedor = document.getElementById('corazones');
    setInterval(() => {
        const corazon = document.createElement('div');
        corazon.classList.add('corazon');
        corazon.innerHTML = '❤️';
        corazon.style.left = Math.random() * 100 + 'vw';
        corazon.style.animationDuration = (Math.random() * 3 + 2) + 's';
        contenedor.appendChild(corazon);

        // Limpiar corazones viejos
        setTimeout(() => corazon.remove(), 5000);
    }, 300);
}
