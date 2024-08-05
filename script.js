document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('confirmation-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto
        
        const familyName = document.getElementById('family-name').value;
        const guests = document.getElementById('guests').value;

        // URL de WhatsApp con el mensaje predefinido
        const whatsappURL = `https://api.whatsapp.com/send?phone=8118926229&text=Hola,%20somos%20${familyName}%20y%20asistiremos%20al%20evento%20con%20${guests}%20invitado(s).`;

        // Abrir enlace de WhatsApp en una nueva pestaña
        window.open(whatsappURL, '_blank');
    });



    // Configuración del contador regresivo para el evento
    const eventDate = new Date('2024-07-20T18:00:00');

    function updateCountdown() {
        const now = new Date();
        const difference = eventDate - now;

        if (difference <= 0) {
            document.getElementById('countdown-timer').innerHTML = 'El evento ha terminado.';
        } else {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('countdown-timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});


const maxInvitadosPorAsistente = {
    'Zoe': 1,
};

function mostrarOpciones() {
    var nombreSeleccionado = document.getElementById('nombre').value;
    var opciones = document.getElementById('opciones');
    if (nombreSeleccionado) {
        opciones.classList.remove('hidden');
    } else {
        opciones.classList.add('hidden');
    }
}

function mostrarInvitados(asistira) {
    var invitados = document.getElementById('invitados');
    var nombreSeleccionado = document.getElementById('nombre').value;
    var maxInvitados = maxInvitadosPorAsistente[nombreSeleccionado] || 0;
    var inputInvitados = document.getElementById('num_invitados');

    if (asistira) {
        invitados.classList.remove('hidden');
        inputInvitados.max = maxInvitados;
        inputInvitados.placeholder = `Máximo ${maxInvitados} invitados`;
    } else {
        invitados.classList.add('hidden');
        inputInvitados.value = '';
    }
}

function enviarWhatsApp() {
    var nombre = document.getElementById('nombre').value;
    var asistira = document.getElementById('invitados').classList.contains('hidden') ? "No" : "Sí";
    var numInvitados = document.getElementById('num_invitados').value || 0;

    var mensaje = `Hola, soy ${nombre}. ${asistira === "Sí" ? `Asistiremos ${numInvitados} persona(s).` : `No podré asistir.`}`;
    var numero = "+528123822075"; // Reemplaza con el número de WhatsApp destinatario
    var url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
}
