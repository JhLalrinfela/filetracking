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

  const results_body = document.querySelector("#pendingfileneite");
  $.ajax({
    url: "/pendingfileneite",
    method: "GET",
    success: function (data) {
      console.log(data);
      var length = data.length;
      let html = "";
      if (length > 0) {
        data.forEach((result) => {
          html +=
            `<tr>
                <td>` +
            result.subject +
            `</td>
            <td>` +
            result.assign_person +
            `</td>
            <td>` +
            result.pending_hour +
            `</td>
            </tr>`;
        });
      } else {
        html += `
                  <tr>
                      <td colspan="5" class="text-center">No Pending Files as of Now</td>
                  </tr>
                  `;
      }
      results_body.innerHTML = html;
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
