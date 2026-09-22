document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Alternar abertura do menu mobile ao clicar no hambúrguer
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }

    // Suporte para cliques em menus com dropdown no mobile
    dropdowns.forEach(dropdown => {
        const toggleBtn = dropdown.querySelector('.dropdown-toggle');
        
        if (toggleBtn) {
            toggleBtn.addEventListener('click', (e) => {
                // Previne comportamento padrão apenas se for link vazio
                if (toggleBtn.getAttribute('href') === '#') {
                    e.preventDefault();
                }
                
                // Fecha outros dropdowns abertos
                dropdowns.forEach(item => {
                    if (item !== dropdown) {
                        item.classList.remove('active-dropdown');
                    }
                });

                // Alterna o estado atual do dropdown clicado
                dropdown.classList.toggle('active-dropdown');
            });
        }
    });
});

