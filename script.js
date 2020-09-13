$(document).ready(function(){
    
// create time blocks for standard business hours 9am - 5pm (9blocks)
// each block should be a row and have a col 1 (hour) col 10 (text) col 1 (lock)

// variable array with the different time slots 
var hourId = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];



for(var i = 0; i < hourId.length; i++){
//create the main row div 
    var rowEl = $("<row>");
    rowEl.addClass("main-row");
    rowEl.addClass(hourId[i]);
    $(".container").append(rowEl);
    //create a time element div col-sm-1
    var timeEl = $("<div>");
    timeEl.addClass("time-block hour hour-plc col-sm-1");
    timeEl.text(hourId[i]);
    rowEl.append(timeEl);
    //create a div to hold the text/todo list area col-sm-10
    var textEl = $("<textarea>");
    textEl.addClass("text-area col-sm-10");
    textEl.attr("id", hourId[i]);
    textEl.attr("placeholder", "put you shit in here");
    rowEl.append(textEl);
    //create the save button div element col-sm-1
    var saveEl = $("<div>");
    saveEl.addClass("saveBtn time-block col-sm-1");
    saveEl.attr("id", hourId[i]);
    saveEl.attr("style", "float")
    saveEl.text("BUTTON");
    saveEl.click(save);
    rowEl.append(saveEl);

}

});



// on click,save - start function to save user input on local storage 


function save (){
  var saveHourId =  $(this).attr("id");
console.log(saveHourId);
var saveText = $("#" + saveHourId).val();
console.log(saveText);
localStorage.setItem( saveHourId, saveText); 
}