
$(function () {
    // Click event handler for the save buttons
  $(".saveBtn").click(function(){
    var hour = $(this).parent().attr("id")
    var text = $(this).siblings(".description").val()
    localStorage.setItem(hour, text);
  })

  // Grab current hour using Day.js
  var currentHour = dayjs().hour();

  // Iterate through each time block and apply past, present, or future classes
$(".time-block").each(function() {
  var blockHour = parseInt($(this).attr("id").replace("hour", ""), 10);

  if (blockHour < currentHour) {
    $(this).addClass("past");
  } else if (blockHour === currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});
// retrieves user input from local storage and sets textarea values 
$(".time-block").each(function() {
  var hour = $(this).attr("id");
  var text = localStorage.getItem(hour);
  if (text !== null) {
    $(this).find(".description").val(text);
  }
});
///Displays time using dayjs
  var now = dayjs()
  $("#currentDay").text(now.format("dddd, MMMM D, YYYY"));
});
