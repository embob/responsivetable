
(function($) {
  $.fn.squishyTable = function() {
    var $window = $(window);
    var windowsize = $window.width();
    var tables = this;
      for (var i = tables.length - 1; i >= 0; i--) {
        var tablesize = $(tables[i]).width();
        if (windowsize <= tablesize) {
          $(tables[i]).addClass("mobile-table");
        }
      };
  };
})(jQuery);
