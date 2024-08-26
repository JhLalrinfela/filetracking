$(function () {
  $("p").on("click", function () {
    $(this).hide();
  });

  $("#login").on("click", function () {
    alert("This is the login page");
  });
});
