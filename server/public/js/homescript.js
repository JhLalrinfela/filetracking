$(function () {
  $.ajax({
    url: "/cardone",
    method: "GET",
    success: function (data) {
      var length = data.length;
      $("#cardone").html(length);
    },
  });

  $.ajax({
    url: "/cardtwo",
    method: "GET",
    success: function (data) {
      var length = data.length;
      $("#cardtwo").html(length);
    },
  });

  $.ajax({
    url: "/cardthree",
    method: "GET",
    success: function (data) {
      var length = data.length;
      $("#cardthree").html(length);
    },
  });

  $("#registerbutton").on("click", function () {
    var uname = $("#uname").val();
    var upass = $("#upass").val();
    $.ajax({
      url: "/signup",
      method: "POST",
      data: {
        uname: uname,
        upass: upass,
      },
      success: function (data) {
        alert(data + " is successfully added");
        location.reload();
      },
    });
  });
});
