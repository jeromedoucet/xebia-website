function resultatscientist() {

  event.preventDefault();

if ($("#scientist").val() == "0.75" || $("#scientist").val() == "0,75") {
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
