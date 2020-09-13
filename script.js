$(document).ready(function () {
    // currentDayEl connected with moment.js to show in the top of the page 
  var currentDayEl = $("<h3>");
  currentDayEl.text(moment().format("dddd, MMMM Do YYYY"));
  $("#currentDay").append(currentDayEl);
    // current hour variable for the conditionals 
  var currentHour = parseInt(moment().format("h"));
  console.log(currentHour);
    // current hour variable for AM/PM matching
  var currentHourTag = moment().format("hA");

  // create time blocks for standard business hours 9am - 5pm (9blocks)

  // variable array with the different time slots
  var hourId = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
  ];

  for (var i = 0; i < hourId.length; i++) {
    //create the main row div
    var rowEl = $("<row>");
    rowEl.addClass("main-row d-sm-flex");
    rowEl.addClass(hourId[i]);
    $(".container").append(rowEl);
    //create a time element 
    var timeEl = $("<div>");
    timeEl.addClass("time-block hour col-md-2");
    timeEl.text(hourId[i]);
    rowEl.append(timeEl);
    //create a div to hold the text/todo list area
    var textEl = $("<textarea>");
    textEl.addClass("text-area col-md-8");
    textEl.attr("id", hourId[i]);
    textEl.text(localStorage.getItem(hourId[i]));
    rowEl.append(textEl);
    //create the save button div element 
    var saveEl = $("<div>");
    saveEl.addClass(
      "saveBtn time-block i:hover fas fa-lock col-md-2 text-area"
    );
    saveEl.attr("id", hourId[i]);
    saveEl.click(save);
    rowEl.append(saveEl);

    console.log(parseInt(hourId[i].slice(0, -2)));
    // conditionals to see whether the time is past, current or present
    if (compareTime(hourId[i], currentHourTag) === 0) {
      textEl.addClass("present");
    } else if (compareTime(hourId[i], currentHourTag) < 0) {
      textEl.addClass("past");
    } else if (compareTime(hourId[i], currentHourTag) > 0) {
      textEl.addClass("future");
    }
  }
});
// adjusting for AM and PM
function compareTime(timeOne, timeTwo) {
  if (timeOne.slice(-2) === "PM") {
    if (parseInt(timeOne.slice(0, -2)) === 12) {
      timeOne = parseInt(timeOne.slice(0, -2));
    } else {
      timeOne = parseInt(timeOne.slice(0, -2) + 12);
    }
  } else {
    if (parseInt(timeOne.slice(0, -2)) === 12) {
      timeOne = parseInt(timeOne.slice(0, -2) + 12);
    } else {
      timeOne = parseInt(timeOne.slice(0, -2));
    }
  }
  if (timeTwo.slice(-2) === "PM") {
    if (parseInt(timeTwo.slice(0, -2)) === 12) {
      timeOne = parseInt(timeTwo.slice(0, -2));
    } else {
      timeTwo = parseInt(timeTwo.slice(0, -2) + 12);
    }
  } else {
    if (parseInt(timeTwo.slice(0, -2)) === 12) {
      timeTwo = parseInt(timeTwo.slice(0, -2) + 12);
    } else {
      timeTwo = parseInt(timeTwo.slice(0, -2));
    }
  }
  return timeOne - timeTwo;
}

// on click,save - start function to save user input on local storage

function save() {
  var saveHourId = $(this).attr("id");
  console.log(saveHourId);
  var saveText = $("#" + saveHourId).val();
  console.log(saveText);
  localStorage.setItem(saveHourId, saveText);
}
