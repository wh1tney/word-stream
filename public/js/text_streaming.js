// Pseudocode
// binding an event of streaming to the button "begin"
// run the algorithm that goes thru each letter and changes colors
// fixed duration will be the same for every "letter" or "word" (not mvp)
// Input: A string as text which we would need to split in terms of letters or words.

// Step 1: to take the string that is given to us by the parsing process and turn that into an array that contains strings
// Step 2: iterate through each element and wrap them around span tags with a certain color in order to add to the DOM
// Step 3: Store step 2 as a variable and add to the DOM (html page)
// Step 4: Actually create a function that colors in each letter or word

$(document).ready(function(){
  formatting_story("This is!# the story, of a unIcorn");
  turn_it_red();
});

function formatting_story(story){
  var text = "";
  // splits into an array of letters such as ["a", "b", "c"]
  var array_of_letters = story.split("") ;

  for (var i = 0; i < array_of_letters.length; i++) {
    text += "<span id='p" + i + "' style='color:#C0C0C0'>" + array_of_letters[i] + "</span>";
  }
  // array_of_letters.each(function(a, b) {
  //   // a is the index, b is the element
  //   text += "<span id='p" + a + "' style='color:#C0C0C0'>" + b[0] + "</span>";
  // })
  // assuming that our container id is #story_container append text into the container
  $('#story_container').html(text);
};

function waitAndTurnTheNextOneRed (i, $characters) {
  if (i >= $characters.length) {
    justClicked = false;
    return;
  };
  $characters.eq(i).animate({color: 'red'}, 1000);
  setTimeout(function() {waitAndTurnTheNextOneRed(i+1, $characters)}, 3000);
}

var justClicked

function turn_it_red(){
  // assuming that there is a button with an id "startBtn"...
  $('#startBtn').on('click',function(){
    if (justClicked) return;
    justClicked = true;
    var $characters = $("#story_container span");
    waitAndTurnTheNextOneRed(0, $characters);
  });
}

// function turn_it_red(){
//   // assuming that there is a button with an id "startBtn"...
//   $('#startBtn').on('click',function(event){
//     event.preventDefault();
//     var letterSize = $("#story_container span").length ;
//     var i = 0;
//     (function turn_it_red() {
//       // setTimeout(function(){
//       setTimeout(function () {
//         if (i++ < letterSize) {
//         $($("#story_container span")[i]).css('color','red');
//         turn_it_red();
//         }
//       }, 1000);
//       // $($("#story_container span")[i]).css('color','red');
//     })();
//   });
// }


