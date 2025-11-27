// Kewen Carbón - script base
// Control de botón fijo de WhatsApp + año automático

document.addEventListener("DOMContentLoaded", () => {

  /* === BOTÓN WHATSAPP FLOTANTE === */
  const hero = document.querySelector(".hero");
  const waButton = document.querySelector(".btn-whatsapp-fixed");

  if (hero && waButton) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Hero visible → ocultar botón
          if (entry.isIntersecting) {
            waButton.classList.remove("is-visible");
          } else {
            // Hero NO visible → mostrar botón
            waButton.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
  }

  /* === AÑO AUTOMÁTICO === */
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  console.log("Kewen Carbón listo.");
});
