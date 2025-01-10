// Navegación por pestañas
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Cambiar pestaña activa
        tabLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');

        // Mostrar contenido relacionado
        const target = link.getAttribute('data-tab');
        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(target).classList.add('active');
    });
});
