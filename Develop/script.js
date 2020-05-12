var currentDay = $('#currentDay');
var toDay = new Date();
console.log(toDay);
currentDay.text(toDay.toDateString());


var newDiv = $('<div>');
newDiv.text('Add Notes');
$('.container').append(newDiv);
console.log(newDiv);