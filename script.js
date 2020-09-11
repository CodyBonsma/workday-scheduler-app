$(document).ready(function(){
    
// create time blocks for standard business hours 9am - 5pm (9blocks)
// each block should be a row and have a col 1 (hour) col 10 (text) col 1 (lock)

// variable array with the different time slots 
var hourId = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

var rowEl = $("<div>");
rowEl.addClass("row time-block col-sm-1");
rowEl.text(hourId[0]);
$(".container").append(rowEl);



});


