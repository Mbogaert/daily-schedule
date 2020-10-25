// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner

// THEN the current day is displayed at the top of the calendar
function displayDate() {
    // display current day at the top of the calendar
    var setDate = moment().format("dddd, MMMM Do, YYYY");
    var $currentDay = $("#currentDay");
  
    $currentDay.text(setDate); 
}

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours - HTML grid


// WHEN I view the timeblocks for that day 
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future - red, yellow, green bootstrap


// WHEN I click into a timeblock
// THEN I can enter an event


// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage


// WHEN I refresh the page - localStorage
// THEN the saved events persist

displayDate();