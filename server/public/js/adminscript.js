$(document).ready(function () {
  //var name = $('#search option:selected').val();
  const results_body = document.querySelector("#display");
  $.ajax({
    url: "/complete",
    method: "GET",
    success: function (data) {
      console.log(data);
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

                        </tr>
                        `;
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
