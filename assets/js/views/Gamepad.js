define(
    function () {
        return Backbone.View.extend({
            el:'#slidingSpacesNavigationMap',
            events:{
                'mouseover .slidingSpacesNavigationDot':'showTooltip',
                'mouseover .slidingSpacesNavigationDotActual':'showTooltip',
                'mouseout .slidingSpacesNavigationDot':'hideTooltip',
                'mouseout .slidingSpacesNavigationDotActual':'hideTooltip'
            },
            tooltip:{
                width:121,
                height:20,
                left:15,
                top:25
            },
            tooltipBackgroundPosition:{
                slidingSpacesNavigationDot_believes:-47,
                slidingSpacesNavigationDot_passions:-82,
                slidingSpacesNavigationDot_passport:-11,
                slidingSpacesNavigationDot_sharing:-119,
                slidingSpacesNavigationDot_joinUs:-155
            },
            initialize:function () {
                $(this.el).append('<div id="gamepad-tooltip" style="position: absolute; display: none;"></div>');
                $('#gamepad-tooltip').css('width', '121px');
                $('#gamepad-tooltip').css('height', '36px');
            },
            showTooltip:function (event) {
                $('#gamepad-tooltip').css('background-image', 'url(/assets/img/interface/bulles_sprites.png)');
                $('#gamepad-tooltip').css('background-position-y', this.tooltipBackgroundPosition[event.target.id]);
                $('#gamepad-tooltip').css('top', event.target.offsetTop + this.tooltip.top);
                $('#gamepad-tooltip').css('left', event.target.offsetLeft - this.tooltip.width / 2 + this.tooltip.left);
                $('#gamepad-tooltip').show();
            },
            hideTooltip:function () {
                $('#gamepad-tooltip').hide();
            }
        });
    });