$(document).ready(function() {
  $('.location-name').hide();

  $( ".close" ).click(function() {
    $("#instructions").hide();
  });

  $( ".help-button" ).click(function() {
    $("#instructions").toggle();
  });

  // $('.location').mouseover(function(){
  //   console.log('hover')
  //   $(this).find('.location-name').show();
  // })






//end doc.ready
});
