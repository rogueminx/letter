$(document).ready(function() {
  $("#form").submit(function(event) {
    var name = $("#name").val();


    $(".person").text(name);

    $("#letter").show();

    event.preventDefault();
  });
});
