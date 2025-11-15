// Kewen Carbón - script base
// Aquí puedes agregar más adelante tracking, animaciones, etc.

document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    const waButton = document.querySelector('.btn-whatsapp-fixed');
  
    if (!hero || !waButton) return;
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si el hero es visible → ocultamos botón flotante
          if (entry.isIntersecting) {
            waButton.classList.remove('is-visible');
          } else {
            // Cuando el hero ya no está a la vista → mostramos botón flotante
            waButton.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1, // con que se vea un 10% del hero ya se considera visible
      }
    );
  
    observer.observe(hero);
  });
  

console.log("Kewen Carbón listo.");
