export function handleLanguageToggle() {
	const toggle = document.getElementById('language-toggle');

	// 1. Cargar estado guardado (si existe)
	if (localStorage.getItem('language') === 'en') {
		toggle.checked = true; // Marcar el toggle si el idioma era inglés
	}

	// 2. Cambiar de idioma al interactuar con el toggle
	if (toggle) {
		toggle.addEventListener('change', () => {
			setTimeout(() => {
				if (toggle.checked) {
					localStorage.setItem('language', 'en'); // Guardar preferencia
					window.location.href = 'assets/html/index-en.html';
				} else {
					localStorage.setItem('language', 'es'); // Guardar preferencia
					window.location.href = '/portafolio/index.html';
				}
			}, 300);
		});
	}
}
export default handleLanguageToggle;
