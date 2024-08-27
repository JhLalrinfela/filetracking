$(function () {
  $("#registerbutton").on("click", function () {
    var uname = $("#uname").val();
    var upass = $("#upass").val();
    alert(uname);
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
