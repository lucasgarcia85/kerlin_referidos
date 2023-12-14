/*Sticky header
*****************************************************/
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
});



/*Update copy automatically
**************************************************/
document.querySelector(".year-copy").innerText = new Date().getFullYear();




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



function animateSequence() {
  let elements = [
    document.querySelector('.texto_1'),
    document.querySelector('.imagen_1'),
    
  ];
  
  let time = 0;
  
  // Hacer visible texto_1
  setTimeout(() => {
    elements[0].style.display = 'block';
    elements[0].style.opacity = 1;
    elements[0].style.transition = 'transform 2s';
  }, time);
  time += 2000;
 
  // Hacer visible imagen_1
  setTimeout(() => {
    elements[1].style.opacity = 1;
    elements[1].style.transform = 'translateY(-50px)';
    elements[1].style.transition = 'transform 2s';
  }, time);
  time += 2000;
 
  // Hacer invisible texto_1 e imagen_1
  setTimeout(() => {
    elements[0].style.opacity = 0;
    elements[1].style.opacity = 0;
    elements[1].style.transform = 'translateY(50px)';
    elements[1].style.transition = 'transform 2s';
  }, time);
  time += 200;
 
  // Hacer visible texto_2
  setTimeout(() => {
    elements[0].style.display = 'none';
    elements[2].style.opacity = 1;
    elements[2].style.transition = 'transform 2s';
  }, time);
  time += 2000;
 
  // Hacer visible imagen_2
  setTimeout(() => {
    elements[3].style.opacity = 1;
    elements[3].style.transform = 'translateX(-30px)';
    elements[3].style.transition = 'transform 2s';
  }, time);
  time += 2000;
 
  // Hacer invisible texto_2 e imagen_2
  setTimeout(() => {
    elements[2].style.opacity = 0;
    elements[3].style.opacity = 0;
    elements[3].style.transform = 'translateX(30px)';
    elements[3].style.transition = 'transform 2s';
  }, time);
  time += 200;
 
  setTimeout(animateSequence, time); // iniciar la secuencia de nuevo cuando todas las animaciones terminen
 }
 
 animateSequence(); // iniciar la secuencia de animación












// function animateSequence() {
//   let elements = [
//     document.querySelector('.texto_1'),
//     document.querySelector('.imagen_1'),
//     document.querySelector('.texto_2'),
//     document.querySelector('.imagen_2')
//   ];
  
//   let time = 0;
  
//   // Hacer visible texto_1
//   setTimeout(() => {
//     elements[0].style.display = 'block';
//     elements[0].style.opacity = 1;
//     elements[0].style.transition = 'transform 2s';
//   }, time);
//   time += 2000;
 
//   // Hacer visible imagen_1
//   setTimeout(() => {
//     elements[1].style.opacity = 1;
//     elements[1].style.transform = 'translateY(-50px)';
//     elements[1].style.transition = 'transform 2s';
//   }, time);
//   time += 2000;
 
//   // Hacer invisible texto_1 e imagen_1
//   setTimeout(() => {
//     elements[0].style.opacity = 0;
//     elements[1].style.opacity = 0;
//     elements[1].style.transform = 'translateY(50px)';
//     elements[1].style.transition = 'transform 2s';
//   }, time);
//   time += 200;
 
//   // Hacer visible texto_2
//   setTimeout(() => {
//     elements[0].style.display = 'none';
//     elements[2].style.opacity = 1;
//     elements[2].style.transition = 'transform 2s';
//   }, time);
//   time += 2000;
 
//   // Hacer visible imagen_2
//   setTimeout(() => {
//     elements[3].style.opacity = 1;
//     elements[3].style.transform = 'translateX(-30px)';
//     elements[3].style.transition = 'transform 2s';
//   }, time);
//   time += 2000;
 
//   // Hacer invisible texto_2 e imagen_2
//   setTimeout(() => {
//     elements[2].style.opacity = 0;
//     elements[3].style.opacity = 0;
//     elements[3].style.transform = 'translateX(30px)';
//     elements[3].style.transition = 'transform 2s';
//   }, time);
//   time += 200;
 
//   setTimeout(animateSequence, time); // iniciar la secuencia de nuevo cuando todas las animaciones terminen
//  }
 
//  animateSequence(); // iniciar la secuencia de animación


 
 
