// Pseudocode
// binding an event of streaming to the button "begin"
// run the algorithm that goes thru each letter and changes colors
// fixed duration will be the same for every "letter" or "word" (not mvp)
// Input: A string as text which we would need to split in terms of letters or words.

// Step 1: to take the string that is given to us by the parsing process and turn that into an array that contains strings
// Step 2: iterate through each element and wrap them around span tags with a certain color in order to add to the DOM
// Step 3: Store step 2 as a variable and add to the DOM (html page)
// Step 4: Actually create a function that colors in each letter or word

function formating_story(story){
  var text = "";
  // splits into an array of letters such as ["a", "b", "c"]
  var array_of_letters = text.split("") ;
  $.each(array_of_letters, function(a, b) {
    // a is the index, b is the element
    text += "<span id='p" + a + " style='color:#C0C0C0'>" + b[0] + "</span>";
  })
};

 $(document).ready(function(){

  $('#startBtn').on('click',function(){

  });
});
