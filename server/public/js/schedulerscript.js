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

  const results_body = document.querySelector("#display");
  $.ajax({
    url: "/pendingdisplay",
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
            result.type +
            `</td>
                <td>` +
            result.category +
            `</td>
                <td>` +
            result.add_date +
            `</td>
            </tr>`;
        });
      } else {
        html += `
            <tr>
                <td colspan="5" class="text-center">No Data Found</td>
            </tr>
            `;
      }
      results_body.innerHTML = html;
    },
  });
});
