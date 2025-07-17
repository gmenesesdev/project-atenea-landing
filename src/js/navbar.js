// public/js/navbar.js
document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll("#navbar-nav a");
    const toggleButton = document.querySelector("#hs-header-classic-collapse");

    // Cerrar menú móvil al hacer clic en un enlace
    menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            // Si el botón está en modo abierto, simulamos un click para cerrarlo
            if (toggleButton && toggleButton.getAttribute("aria-expanded") === "true") {
                toggleButton.click();
            }
        });
    });

    // --- Scrollspy activo ---
    const sections = Array.from(menuLinks).map((link) => {
        const id = link.getAttribute("href")?.replace("#", "");
        return document.getElementById(id);
    });

    function onScroll() {
        const scrollPos = window.scrollY + 100; // offset para que se active un poco antes
        sections.forEach((section, index) => {
            if (!section) return;
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const link = menuLinks[index];

            if (scrollPos >= top && scrollPos < bottom) {
                link.classList.add("text-atenea-letter-lighter", "font-semibold");
            } else {
                link.classList.remove("text-atenea-letter-lighter", "font-semibold");
            }
        });
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
});
