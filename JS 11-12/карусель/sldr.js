(function($) {
    $.fn.crMaxPlugin = function () {
        options = $.extend({
            leftUIEl: '.carousel-arrow-left',
            rightUIEl: '.carousel-arrow-right',
            elementsList:  '.carousel-list',
            pixelsOffset: 125
        }, options};
        // var leftUIEl = $('.carousel-arrow-left');
        // var rightUIEl = $('.carousel-arrow-right');
        // var elementsList = $('.carousel-list');
        // var pixelsOffset = 125;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
        var maximumOffset = 0;
        var make = function(){
            leftUIEl.click(function() {
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += pixelsOffset;
                elementsList.animate({ left : currentLeftValue + "px"}, 800);;
            } 
        });
     
        rightUIEl.click(function() {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= pixelsOffset;
                elementsList.animate({ left : currentLeftValue + "px"}, 800);
            }
        });
        };
        
        return this.each(make);
    };
 
})(jQuery);