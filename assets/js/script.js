

$(document).ready(function () {
    var setDate = moment().format("dddd, MMMM Do, YYYY");
    var $currentDay = $("#currentDay");
    var workTimes = "9 - 10 - 11 - 12 - 13 - 14 - 15 - 16 - 17";
    var splitTimes = workTimes.split("-");
    var currentTime = parseInt(moment().format("H"));

    // variables for each time
    var $9 = $("#9");
    var $10 = $("#10");
    var $11 = $("#11");
    var $12 = $("#12");
    var $13 = $("#13");
    var $14 = $("#14");
    var $15 = $("#15");
    var $16 = $("#16");
    var $17 = $("#17");

    // the current day is displayed at the top of the calendar
    $currentDay.text(setDate);

    // each timeblock is color coded to indicate whether it is in the past, present, or future
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

    // run the function to color the times
    colorTimes();

    // I click the save button for that timeblock
    // THEN the text for that event is saved in local storage
    $("button").on("click", function () {
        localStorage.setItem("9am", JSON.stringify($9.val()));
        localStorage.setItem("10AM", JSON.stringify($10.val()));
        localStorage.setItem("11AM", JSON.stringify($11.val()));
        localStorage.setItem("12PM", JSON.stringify($12.val()));
        localStorage.setItem("1PM", JSON.stringify($13.val()));
        localStorage.setItem("2PM", JSON.stringify($14.val()));
        localStorage.setItem("3PM", JSON.stringify($15.val()));
        localStorage.setItem("4PM", JSON.stringify($16.val()));
        localStorage.setItem("5PM", JSON.stringify($17.val()));
    });

    // WHEN I refresh the page
    // THEN the saved events persist
    var persist9 = JSON.parse(localStorage.getItem("9am"));
    $("#9").val(persist9);
    var persist10 = JSON.parse(localStorage.getItem("10AM"));
    $("#10").val(persist10);
    var persist11 = JSON.parse(localStorage.getItem("11AM"));
    $("#11").val(persist11);
    var persist12 = JSON.parse(localStorage.getItem("12PM"));
    $("#12").val(persist12);
    var persist13 = JSON.parse(localStorage.getItem("1PM"));
    $("#13").val(persist13);
    var persist14 = JSON.parse(localStorage.getItem("2PM"));
    $("#14").val(persist14);
    var persist15 = JSON.parse(localStorage.getItem("3PM"));
    $("#15").val(persist15);
    var persist16 = JSON.parse(localStorage.getItem("4PM"));
    $("#16").val(persist16);
    var persist17 = JSON.parse(localStorage.getItem("5PM"));
    $("#17").val(persist17);

});