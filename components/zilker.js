$(document).ready(function() {
  // hide instructions
  $(".speech-bubble").hide();
  $(".hidden-item").hide();
  $("#second-instructions, #third-instructions, #zilker-hints").hide();

  // when you click the help button, show hints at the bottom
  $('.help-button').click(function(){
    $('#zilker-hints').toggle();
  })

  // the first time you click the backpack, show instructions relating to backpack
  $( ".backpack" ).one('click', function() {
    $("#second-instructions").show();
  });

  // the first time you click the sheep in the backpack, show instructions relating to giving dog items
  $( ".backpack-sheep" ).one('click', function() {
    $("#third-instructions").show();
  });

  // when you click close button, hide the parent instructions
  $( ".close" ).click(function() {
    $(this).parent().hide();
  });

  // when you click ginny, if the backpack sheep is highlighted, show completed quest speech bubble and bring item to her, otherwise, just show her normal spech bubble
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

  // when you click the sheep toy hidden on the scene, put it in the backpack, hide the sheep on-screen
  $(".sheep-toy").click(function(){
    $( ".sheep-toy" ).animate({
      left: "150px",
      top: "150px",
      display: 'none'
    }, 800, function() {
      // remove the class hiding the item from the backpack sheep
      $('.backpack-sheep').removeClass('hidden-item').show().delay(2000);
    });
  })

  // when you click the sheep in the backpack, highlight and unhighlight item
  $(".backpack-sheep").click(function() {
    $(this).toggleClass('highlighted-item');
  });

  // when you click the backpack, show and hide items inside
  $(".backpack").click(function() {
    $(".backpack-items").toggle();
  });







//end doc.ready
});
