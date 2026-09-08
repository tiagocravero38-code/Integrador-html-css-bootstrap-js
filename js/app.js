// ============================================
// app.js — se carga en las tres páginas
// ============================================

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

// --- 3. Los datos ---
const servicios = [
  { nombre: 'Optimización de PC', descripcion: 'Ajustes de sistema operativo y BIOS para máximos FPS.', precio: 15000 },
  { nombre: 'Armado de Simulador', descripcion: 'Ensamblado y configuración de volante, pedalera y butaca.', precio: 25000 },
  { nombre: 'Mantenimiento físico', descripcion: 'Limpieza profunda de componentes y cambio de pasta térmica.', precio: 8500 },
  { nombre: 'Asesoramiento', descripcion: 'Consultoría para actualización de componentes de hardware.', precio: 5000 }
];

// --- 4. Formatear un precio a la argentina: 15000 -> $15.000 ---
function formatearPrecio(valor) {
  return '$' + valor.toLocaleString('es-AR');
}

// --- 5. Dibujar una lista de servicios dentro de la tabla ---
function mostrarServicios(lista) {
  const cuerpo = document.querySelector('#tabla-servicios');
  if (!cuerpo) return;

  let filas = '';

  lista.forEach(function (servicio) {
    filas += `
      <tr>
        <td>${servicio.nombre}</td>
        <td>${servicio.descripcion}</td>
        <td class="text-end">${formatearPrecio(servicio.precio)}</td>
      </tr>`;
  });

  cuerpo.innerHTML = filas;
}

// --- 6. Dibujar todo al abrir la página ---
mostrarServicios(servicios);