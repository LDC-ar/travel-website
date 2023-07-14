// Smooth scrolling con jQuery
$('#navbar a').on('click', function (e) {
	if (this.hash !== '') {
		e.preventDefault();

		const hash = this.hash;

		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top,
			},
			800
		);
	}
});

// Iniciar el servicio de emailjs
emailjs.init('fxIIohwKqy6NCKbHj');

//
const formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', event => {
	// Evitamos la recarga del formulario
	event.preventDefault();

	// Obtener los datos del formulario
	let nombre = document.getElementById('nombre').value;
	let email = document.getElementById('email').value;
	let mensaje = document.getElementById('mensaje').value;

	// Ejemplo validacion
	if (!nombre || !email || !mensaje) {
		const error = document.createElement('div');
		error.innerText = 'Por favor completa los datos';
		formulario.appendChild(error);
		return;
	}

	const correo = {
		from_name: nombre,
		from_email: email,
		message: mensaje,
	};

	// Enviar los datos del formulario por medio de Emailjs
	emailjs.send('service_o061y56', 'template_bunj0i4', correo).then(
		function (respuesta) {
			console.log('Datos enviados', respuesta.status);
			alert('Tu mensaje se ha enviado');
		},
		function (error) {
			console.log('Error al enviar los datos', error);
			alert('Error al enviar los datos');
		}
	);
});
