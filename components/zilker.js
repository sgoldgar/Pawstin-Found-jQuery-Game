$(document).ready(function() {
  $(".speech-bubble").hide();
  $(".hidden-item").hide();
  $("#second-instructions, #third-instructions, #zilker-hints").hide();

  $('.help-button').click(function(){
    $('#zilker-hints').toggle();
  })

  $( ".backpack" ).one('click', function() {
    $("#second-instructions").show();
  });

  $( ".backpack-sheep" ).one('click', function() {
    $("#third-instructions").show();
  });

  $( ".close" ).click(function() {
    $(this).parent().hide();
  });


  $(".ginny" ).click(function() {
    if($('.backpack-sheep').hasClass('highlighted-item')){
      $(".speech-bubble p").text('Thank you for finding my sheep!');
      $(".speech-bubble").show();
      $( ".backpack-sheep" ).animate({
        top: "250px",
        left: "-500px",
      }, 800, function() {
      });
      $(".backpack-sheep").hide();
    } else {
      $(".speech-bubble").show();
    }


  });

  $(".sheep-toy").click(function(){
    $( ".sheep-toy" ).animate({
      left: "150px",
      top: "150px",
      display: 'none'
    }, 800, function() {
      $('.backpack-sheep').removeClass('hidden-item').show().delay(2000);
    });
  })


  $(".backpack-sheep").click(function() {
    $(this).toggleClass('highlighted-item');
  });


  $(".backpack").click(function() {
    $(".backpack-items").toggle();
  });

  $( ".help-button" ).click(function() {
    $("#initial-instructions").toggle();
  });








//end doc.ready
});
