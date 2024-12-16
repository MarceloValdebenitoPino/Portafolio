// Validación básica del formulario de contacto

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('.contacto__formulario');

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Prevenir el envío por defecto

        const nombre = document.querySelector('input[placeholder="Nombre"]').value.trim();
        const email = document.querySelector('input[placeholder="Correo Electrónico"]').value.trim();
        const mensaje = document.querySelector('textarea[placeholder="Mensaje"]').value.trim();

        if (!nombre || !email || !mensaje) {
            alert('Por favor, completa todos los campos del formulario.');
            return;
        }

        if (!validarEmail(email)) {
            alert('Por favor, introduce un correo electrónico válido.');
            return;
        }

        alert('Formulario enviado correctamente. ¡Gracias por contactarme!');
        formulario.reset(); // Limpiar el formulario después del envío
    });

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
