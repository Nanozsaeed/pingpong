//back-end
var ppNumber = [];
function input(number) {
  for (var index = 1; index <= number; index += 1) {
    if (index % 3 === 0) {
      ppNumber.push("ping")
    } else if (index % 5 === 0) {

      ppNumber.push("pong")
    } else if (index % 15 === 0) {

      ppNumber.push("pinpong")

    } else {
      ppNumber.push(index);
    }
  }
}
//font-end
$(document).ready(function() {
  $("form#p-p").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#put").val());
    console.log(number);
    input(number);
    console.log(ppNumber);

    ppNumber.forEach(function(number) {
      $("ul#append").append("<li>" + number + "</li>");
    });
  });
});
