$(document).ready(function(){

  //this array sets the color, order, and number of buttons
  var colorArray = ['red', 'green', 'yellow', 'blue', 'purple'];

  //this appends the buttons on DOM load based on the colorArray
  for (var i = 0; i < colorArray.length; i++) {
    var button = $('<button>');
    button.data('index', i);
    button.css('background-color', colorArray[i]);
    $('#blockRow').append(button);
  }

  //using the randomNumber function to pick a random index
  var randomButtonIndex = randomNumber(0, colorArray.length-1);

  //listens for click on a button
  $('button').on('click', function(){
    // creating variable names for below
    var clickedButtonIndex = $(this).data().index;
    var nameOfColor = colorArray[clickedButtonIndex];
    var thisButton = $(this);

    // console.log tester of specific button recognition
    console.log(thisButton.data().index + " is the index of the clicked button");

    //describes the clicked box's color
    $('#colorChosen').text(nameOfColor);

    //if the user clicks the correct button, displays success, changes color, and resets random button
    if(randomButtonIndex == clickedButtonIndex){
      $('#answerText').text('You got it right! A new random box has been chosen.');
      randomButtonIndex = randomNumber(0, colorArray.length-1);
      thisButton.fadeTo(50, 0.3);
      setTimeout(function(){
        thisButton.fadeTo(500,1);
      }, 400);
    } else {
      $('#answerText').text('Wrong. Click another box.');
    }

  });

  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  }
});
