/* 
    nav.js
    ----------------------------------------
    Este script carga dinámicamente el menú 
    de navegación desde nav.html y lo inserta 
    en el elemento con id "nav-placeholder".
*/

document.addEventListener("DOMContentLoaded", function () {
    
    // Solicitar archivo del menú
    fetch("nav.html")
        .then(response => response.text()) // Convertir respuesta a texto
        .then(html => {

            // Insertar el menú dentro del contenedor
            document.getElementById("nav-placeholder").innerHTML = html;

        })
        .catch(error => console.error("Error cargando el menú:", error));
});