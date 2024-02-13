
//HAMBURGUER MENU ANIMATION

let navToggle = document.querySelector('.nav-toggle')
let bars = document.querySelectorAll('.bar')

function toggleHamburger(e) {
  bars.forEach(bar => bar.classList.toggle('x'))
}

navToggle.addEventListener('click', toggleHamburger)

//BACK TO TOP BUTTON

// Get the button:
let mybutton = document.getElementById("top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//FADE IN IMAGENES
function fadeInOnScroll() {
  const elements = document.querySelectorAll('.fade-in');

  elements.forEach(element => {
    const elementRect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Verifica si cualquier parte de la imagen es visible
    if (elementRect.top < windowHeight && elementRect.bottom >= 0) {
      // Establece la opacidad al 100 y la posición Y a 0
      element.style.opacity = 1;
      element.style.transform = `translateY(0)`;
    }
  });
}

// Adjunta la función al evento de scroll
window.addEventListener('scroll', fadeInOnScroll);

// Ejecuta la función al cargar la página
fadeInOnScroll();