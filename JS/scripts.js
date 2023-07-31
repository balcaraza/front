
// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

const targets = document.querySelectorAll('.card[data-target]');
const content = document.querySelectorAll('.content [data-content]');

targets.forEach(target => {
  target.addEventListener('click', () => {
    targets.forEach(t => t.classList.remove('active'));
    target.classList.add('active');

    const targetContent = document.querySelector(target.dataset.target);
    content.forEach(c => c.classList.remove('active'));
    targetContent.classList.add('active');
  });
});

//Funciones para el SELECCIONAR ARCHIVO, CUADRO DE TEXTO, VER ARCHIVO



// Función para actualizar el nombre del archivo seleccionado
function updateFileName(fileNumber) {
  const fileInput = document.getElementById(`fileInput${fileNumber}`);
  const fileNameSpan = document.getElementById(`fileName${fileNumber}`);
  const fileNameBox = document.getElementById(`fileNameBox${fileNumber}`);

  if (fileInput.files.length > 0) {
    fileNameSpan.textContent = fileInput.files[0].name;
    fileNameBox.style.display = "block"; // Mostrar el cuadro del nombre del archivo cuando se ha seleccionado un archivo
  } else {
    fileNameSpan.textContent = "Ningún archivo seleccionado";
    fileNameBox.style.display = "none"; // Ocultar el cuadro del nombre del archivo cuando no se ha seleccionado un archivo
  }
}

// Función para abrir el archivo en una nueva pestaña
function openFileInNewTab(fileNumber) {
  const fileInput = document.getElementById(`fileInput${fileNumber}`);

  if (fileInput.files.length > 0) {
    const fileURL = URL.createObjectURL(fileInput.files[0]);
    window.open(fileURL, "_blank");
  }
}




