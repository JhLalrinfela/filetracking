$(document).ready(function () {
  const results_body = document.querySelector("#display");
  var uname = $("#assign_person").val();
  $.ajax({
    url: "/usercomplete",
    method: "GET",
    data: { uname: uname },
    success: function (data) {
      var length = data.length;
      let html = "";
      if (length > 0) {
        data.forEach((result) => {
          html +=
            `
                          <tr>
                              <td>` +
            result.slno +
            `</td>
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
            result.putup_date +
            `</td>
                              <td>` +
            result.officers +
            `</td>
              <td>` +
            result.filename +
            `</td>
              <td>` +
            result.remarks +
            `</td>
  
                          </tr>
                          `;
        });
      } else {
        html += `
                  <tr>
                      <td colspan="5" class="text-center">No Complete Files</td>
                  </tr>
                  `;
      }
      results_body.innerHTML = html;
    },
  });
});
