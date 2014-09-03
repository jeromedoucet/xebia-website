$.featherlight.defaults.beforeOpen = function (event) {
    var targetEl = $(this.$elm.data('featherlight'));
    if ($(window).width() <= 1023) {

        targetEl.slideToggle(function () {
            $('.profils-bubble .lightbox').not(targetEl).slideUp();
        });

        return false;
    } else {
        targetEl.css('display','');
        return true;
    }
};
