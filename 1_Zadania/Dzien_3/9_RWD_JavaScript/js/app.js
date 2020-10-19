// const mobile = window.matchMedia("screen and (max-width: 320px)");
// const list = document.querySelector('#menu-trigger');
// mobile.addListener( function(mobile) {
//   if (mobile.matches) {
//     /* tutaj ekran jest mniejszy lub równy 320px*/
//
//   } else  {
//     /* tutaj ekran jest większy niż 320px*/
//
//   }
// });
document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.querySelector('#menu-trigger');
        const menu = document.querySelector('.menu');
        hamburger.addEventListener('click', function(){
          menu.classList.toggle('visible');
        });
        const mobile = window.matchMedia("screen and (max-width: 1024px)");
          mobile.addListener(function(){
              if (mobile.matches) {
                  menu.classList.remove('visible');
              }
          });
      });
