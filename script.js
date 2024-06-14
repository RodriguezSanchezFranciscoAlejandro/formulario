const form = document.querySelector('form');
const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const telefonoInput = document.querySelector('#telefono');
const mensajeInput = document.querySelector('#mensaje');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = nombreInput.value.trim();
    const email = emailInput.value.trim();
    const telefono = telefonoInput.value.trim();
    const mensaje = mensajeInput.value.trim();

    if (nombre === '') {
        document.querySelector('#error-nombre').innerHTML = 'El nombre es requerido';
    }

    if (email === '') {
        document.querySelector('#error-email').innerHTML = 'El correo electrónico es requerido';
    }

    if (telefono === '' || !telefono.match(/[0-9]{9}/)) {
        document.querySelector('#error-telefono').innerHTML = 'El teléfono debe tener 9 dígitos';
    }

    if (mensaje === '') {
        document.querySelector('#error-mensaje').innerHTML = 'El mensaje es requerido';
    }

    if (nombre !== '' && email !== '' && telefono !== '' && mensaje !== '') {
        form.submit();
    }
});