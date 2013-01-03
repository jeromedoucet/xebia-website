$(document).ready(function() {
  
  $(".nav a").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top-25}, 500);
  });
 
});