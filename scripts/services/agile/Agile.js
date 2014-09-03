$.featherlight.defaults.beforeOpen = function (event) {
    var targetEl = $(this.$elm.data('featherlight'));
    targetEl.slideToggle(function() {
        $('.profils-bubble .lightbox').not(targetEl).slideUp();
    });


    return false;
};
