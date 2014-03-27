$(function($) {
  $.fn.responsivetable = function() {
    var $window = $(window);
    var windowsize = $window.width();
    var tables = $("table");
    function checkWidth() {
      for (var i = tables.length - 1; i >= 0; i--) {
        var tablesize = $(tables[i]).width();
        if (windowsize <= tablesize) {
          $(tables[i]).addClass("mobile-table");
        }
      };
    };
  };
});
