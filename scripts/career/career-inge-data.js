function resultatdata() {

if ($("#elephant1:checked").length > 0 && $("#bee1:checked").length > 0 && $("#spark1:checked").length > 0 && $("#pig1:checked").length > 0 && $("#oeil1:checked").length > 0) {
  $('#success-message').show();
  $('html,body').animate({ scrollTop: $("#success-message").offset().top }, 1000);
  $('#fail-message').hide();
}

else {
  $('#fail-message').show();
  $('#success-message').hide();
  $('html,body').animate({ scrollTop: $("#fail-message").offset().top }, 1000);
}
}
