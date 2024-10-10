$(document).ready(function () {
  $("#file_assign").click(function () {
    var subject = $("#subject").val();
    var person = $("#person option:selected").val();
    var type = $("#type").val();
    var category = $("#category").val();
    $.ajax({
      url: "/insertintopending",
      method: "POST",
      data: {
        subject: subject,
        person: person,
        type: type,
        category: category,
      },
      beforeSend: function () {
        console.log("Loading.....");
      },
      success: function (data) {
        alert(data);
        location.reload();
      },
    });
  });

  const irrigation_files = document.querySelector("#irrigationfiledisplay");
  var person = $("#person").val();
  $.ajax({
    url: "/irrigation_files",
    method: "GET",
    data: { name: person },
    success: function (data) {
      var length = data.length;
      let html = "";
      if (length > 0) {
        data.forEach((result) => {
          html +=
            `<option value='${result.file_name}'>` +
            result.file_name +
            `</option>`;
        });
      }
      irrigation_files.innerHTML = html;
    },
  });
});
