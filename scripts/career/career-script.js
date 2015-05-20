function showText() {
     $('#success-message').show();
     $('#fail-message').hide();
     $('html,body').animate({ scrollTop: $("#success-message").offset().top }, 1000);

  }




function showError() {
  $('#fail-message').show();
  $('#success-message').hide();
  $('html,body').animate({ scrollTop: $("#fail-message").offset().top }, 1000);

}
