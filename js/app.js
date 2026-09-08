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

  // Actualizar el contador (Paso 11)
  const contador = document.querySelector('#contador-resultados');
  if (contador) {
    contador.textContent = lista.length + ' servicio(s)';
  }
}

// --- 6. Dibujar todo al abrir la página ---
mostrarServicios(servicios);


// --- 7. Filtrar mientras el usuario escribe (Paso 11) ---
const buscador = document.querySelector('#buscador');

if (buscador) {
  buscador.addEventListener('input', function () {
    const texto = buscador.value.toLowerCase();

    const filtrados = servicios.filter(function (servicio) {
      return servicio.nombre.toLowerCase().includes(texto);
    });

    mostrarServicios(filtrados);
  });
}
// --- 8. El formulario de contacto ---
const formulario = document.querySelector('#form-contacto');

// Igual que antes, preguntamos si el formulario existe en esta página
if (formulario) {

  const mensaje = document.querySelector('#mensaje');
  const contadorTexto = document.querySelector('#contador');

  // 8.1 contar caracteres mientras se escribe
  mensaje.addEventListener('input', function () {
    contadorTexto.textContent = mensaje.value.length;
  });

  // 8.2 atender el envío
  formulario.addEventListener('submit', function (evento) {
    // Esto evita que el navegador recargue la página y mande los datos al servidor
    evento.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const aviso = document.querySelector('#aviso');

    // Armamos el mensaje personalizado
    aviso.textContent = 'Gracias ' + nombre + ', recibimos tu consulta.';
    // Le sacamos la clase 'd-none' de Bootstrap para que el cartel se haga visible
    aviso.classList.remove('d-none');

    // Limpiamos el formulario y volvemos el contador a 0
    formulario.reset();
    contadorTexto.textContent = '0';
  });

}