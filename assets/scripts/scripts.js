/*Sticky header
*****************************************************/
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
});



/*Update copy automatically
**************************************************/
document.querySelector(".year-copy").innerText = new Date().getFullYear();

// JS para que al clickear en nav items se cierre hamburguesa

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})


/*Progress Bar scroll
**********************************************/
var progressBar = document.querySelector("#progress-bar span");
var totalHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener("scroll", function() {
  var currentHeight = window.pageYOffset;
  var progress = currentHeight / totalHeight * 100;
  progressBar.style.width = progress + "%";
});

/*AOS Init
*******************************************************/
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// function re_animate() {
//   var element = document.querySelector('#img1');
//   element.classList.toggle('animated');
//  }
//  window.setInterval(re_animate, 9000);


// Para hacer que una animación infinita en CSS cumpla con el delay de arranque en cada ciclo, puedes utilizar la propiedad animation-iteration-count con el valor infinite y la propiedad animation-delay. Sin embargo, debido a la forma en que funcionan las animaciones CSS, el delay no se aplica en cada ciclo de la animación cuando se usa animation-iteration-count: infinite.

// Una solución para este problema es utilizar JavaScript para agregar y eliminar una clase que contenga la animación. De esta manera, puedes controlar cuándo se aplica la animación y cuándo se elimina, permitiendo que el delay se aplique en cada ciclo.

// Aquí tienes un ejemplo de cómo hacerlo con jQuery:

// function re_animate() {
//   $('.bounce').toggleClass('animated');
// }
// window.setInterval(re_animate, 2000);
 
