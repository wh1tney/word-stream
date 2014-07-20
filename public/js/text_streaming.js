$(document).ready(function(){
  formatting_story();
  turn_it_red();
});


function formatting_story(){
  var story = $('#story_container').text()
  var text = "";
  // splits into an array of letters such as ["a", "b", "c"]
  var array_of_letters = story.split(" ") ;

  for (var i = 0; i < array_of_letters.length; i++) {
    text += "<span id='p" + i + "' style='font-size: 1.0em; color:#F0F0F0'>" + array_of_letters[i] + " " + "</span>";
  }
  $('#story_container').html(text);
};



function waitAndTurnTheNextOneRed (i, $characters) {
  if (i >= $characters.length) {
    justClicked = false;
    return;
  };
  $characters.eq(i).animate({color: 'black'}, 1);
  $characters.eq(i).animate({color: '#F0F0F0'}, 100);

  setTimeout(function() {waitAndTurnTheNextOneRed(i+1, $characters)}, 150);
}

var justClicked

function turn_it_red(){
  $('#startBtn').on('click',function(){
    if (justClicked) return;
    justClicked = true;
    var $characters = $("#story_container span");
    waitAndTurnTheNextOneRed(0, $characters);
  });
}
