$(function () {
  $.ajax({
    url: "/complete",
    success: function (data) {
      alert(data);
    },
  });
});
