$(document).ready(function () {
    // THEN the current day is displayed at the top of the calendar
    var setDate = moment().format("dddd, MMMM Do, YYYY");
    var $currentDay = $("#currentDay");

    $currentDay.text(setDate);

    var workTimes = "9 - 10 - 11 - 12 - 13 - 14 - 15 - 16 - 17";
    var splitTimes = workTimes.split("-");
    var currentTime = parseInt(moment().format("H"));

    // THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    function colorTimes() {
        for (var i = 0; i < splitTimes.length; i++) {

            // convert to number
            var times = parseInt(splitTimes[i]);
            // if the scheduled time is less than the current time than past, if it is more than future, otherwise it is in the present
            if (times < currentTime) {
                $("#" + times).addClass("past");
            } else if
                (times > currentTime) {
                $("#" + times).addClass("future");
            } else {
                $("#" + times).addClass("present");
            }
        }
    };

    colorTimes();
});