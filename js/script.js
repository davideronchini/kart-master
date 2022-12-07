// AOS animation library
AOS.init({
  offset: 300,
  duration: 1100,
});

// Add smooth scrolling to all links
$("a#ciao").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});

// Mobile optimization
const width = window.innerWidth > 0 ? window.innerWidth : screen.width;

// Menu
if (width > 1025) {
  $( "#header-control-right" ).on('click', function() {
    $(".menu").css("right", "-80%");
  });

  $( "#menu-close" ).on('click', function() {
    $(".menu").css("right", "-100%");
  });
}
else {
  $("#header-logo").attr("src","./resources/logo.webp");
  $("#change-icon").attr("src","./resources/change-name2.svg");
  $( "#header-control-right" ).on('click', function() {
    $(".menu").css("right", "-27%");
  });

  $( "#menu-close" ).on('click', function() {
    $(".menu").css("right", "-100%");
  });
}
