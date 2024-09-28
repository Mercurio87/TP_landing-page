// Funcion de arranque. Asigna comportamientos de forma dinamica al HTML
document.addEventListener('DOMContentLoaded', function() {
  (function() {

    // Verificación de la ejecución de la IIFE al cargar el DOM
    console.log("Se cargo el DOM y se ejecuta la IIFE");

    // Identificar botones
    var boton_nav1 = document.getElementById('load-about-us');
    var boton_nav2 = document.getElementById('load-why-us');
    var boton_nav3 = document.getElementById('load-contact-us');

    // Event listener para botones
    boton_nav1.addEventListener('click', function(event) {
      event.preventDefault();
      fetch('snippets/snippet_about_us.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => {
          console.error('Error al cargar el contenido dinamico del formulario:', error);
        });
    });

    boton_nav2.addEventListener('click', function(event) {
      event.preventDefault();
      fetch('snippets/snippet_why_us.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => {
          console.error('Error al cargar el contenido dinamico del formulario:', error);
        });
    });

    boton_nav3.addEventListener('click', function(event) {
      event.preventDefault();
      fetch('snippets/snippet_contact_us.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => {
          console.error('Error al cargar el contenido dinamico del formulario:', error);
        });
    });

    // Simulamos un click en la primera opcion del nav para que se cargue el contenido principal
    var event = new Event('click');
    boton_nav1.dispatchEvent(event);
    
  })(); // IIFE
});     // Evento asignado