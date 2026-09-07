// --- 1. Año automático en el pie de página ---
const anio = document.querySelector('#anio');
if (anio) {
  anio.textContent = new Date().getFullYear();
}

// --- 2. Marcar en el menú la página en la que estoy ---
const archivo = window.location.pathname.split('/').pop() || 'index.html';
const enlaces = document.querySelectorAll('.navbar-nav .nav-link');

enlaces.forEach(function (enlace) {
  if (enlace.getAttribute('href') === archivo) {
    enlace.classList.add('active');
    enlace.setAttribute('aria-current', 'page');
  }
});