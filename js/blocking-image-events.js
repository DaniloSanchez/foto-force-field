$( "#target" ).keydown(function( event ) {
  $.pressdown( event );
});

$( "#target" ).keyup(function( event ) {
  $.pressup( event );
});

$( "#target" ).mousedown(function( event ) {
  $.pressdown( event );
});

$( "#target" ).mouseup(function( event ) {
  $.pressup( event );
});

jQuery.pressdown = function(message, insertionType) {
  $("#mainPhoto").attr('src', INACTIVE_IMAGE);
};

jQuery.pressup = function(message, insertionType) {
  $("#mainPhoto").attr('src', ACTIVE_IMAGE);
};

