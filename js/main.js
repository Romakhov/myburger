$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items:1,
      nav:true
    });
  });

  var hamburger = document.querySelector("#hamburger__link");
  hamburger.addEventListener("click", function(event){
    event.preventDefault();
    var nav = document.querySelector("#nav-list");
    nav.classList.add("nav-list_active");
  });

