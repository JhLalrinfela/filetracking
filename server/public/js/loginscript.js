$(function () {
  $("#login").on("click", function () {
    var uname = $("#username option:selected").val();
    var upass = $("#password").val();
    $.ajax({
      url: "/login",
      method: "POST",
      data: {
        uname: uname,
        upass: upass,
      },
    });
  });
});
