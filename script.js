document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('confirmation-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto
        
        const familyName = document.getElementById('family-name').value;
        const guests = document.getElementById('guests').value;

        // URL de WhatsApp con el mensaje predefinido
        const whatsappURL = `https://api.whatsapp.com/send?phone=+528112289954&text=Hola,%20somos%20${familyName}%20y%20asistiremos%20al%20evento%20con%20${guests}%20invitado(s).`;

        // Abrir enlace de WhatsApp en una nueva pestaña
        window.open(whatsappURL, '_blank');
    });



    // Configuración del contador regresivo para el evento
    const eventDate = new Date('2024-09-01T18:00:00');

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
'Adan Salazar': 5,
'Alfonso Martinez': 2,
'Alondra Rodriguez': 3,
'Ana Esquivel': 1,
'Angel Esquivel': 2,
'Carmen Medellín': 2,
'Carolina Saldaña': 2,
'Cecilia Rodríguez': 2,
'Charly Juarez': 5,
'Edgar Esquivel': 3,
'Fam. Acevedo Rocha': 4,
'Fam. Alvarado Estrada': 4,
'Fam. Benavides Leija': 4,
'Fam. Benavides Martinez': 3,
'Fam. Campa Cisneros': 4,
'Fam. Cepeda Cortes': 3,
'Fam. Cisneros Gutierrez': 2,
'Fam. Corral Esquivel': 3,
'Fam. Escobedo Leija': 3,
'Fam. Esquivel Chaires': 5,
'Fam. Esquivel Cisneros': 4,
'Fam. Esquivel Oviedo': 3,
'Fam. Esquivel Pecina': 4,
'Fam. Fuentes Cepeda': 5,
'Fam. Guardado Pecina': 4,
'Fam. Ibarra Estrada': 5,
'Fam. López Díaz': 2,
'Fam. Luna Gonzalez': 4,
'Fam. Mancillas Pecina': 4,
'Fam. Medrano de León': 3,
'Fam. Medrano Pesina': 5,
'Fam. Meza Flores': 4,
'Fam. Muñiz Campa': 2,
'Fam. Pecina Sifuentes': 4,
'Fam. Rocha Torres': 6,
'Fam. Rodríguez Hernandez': 4,
'Fam. Santos Cisneros': 3,
'Fam. Sauceda Gutierrez': 4,
'Fam. Saucedo Martinez': 5,
'Fam. Tienda Cisneros': 6,
'Fam. Vazquez Sandoval': 3,
'Fam. Vigil Esquivel': 4,
'Gabriela Machuca Parra': 4,
'Genesis Cepeda': 5,
'Gerardo Leija': 2,
'Gerardo Reyes': 2,
'Horalia Carmona': 2,
'Israel Leija': 2,
'Jhonatan Gallegos Marfileño': 2,
'José Martinez': 2,
'Juan Guardado': 1,
'Juany Ruiz': 2,
'Martha Pecina': 2,
'Milton Cepeda': 3,
'Mónica Reyes': 2,
'Orlando Benavides': 3,
'Ricardo Tavares': 5,
'Thomas Martinez': 4
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
    var numero = "+528112289954";
    var url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
}
