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

  PendingTableHome();
  PendingTableScheduler();

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

  $("#selectuser").on("change", function () {
    var name = $("#selectuser").val();
    $.ajax({
      url: "/displayhowmuch",
      method: "GET",
      data: {
        name: name,
      },
      success: function (data) {
        var length = data.length;
        $("#displayhowmuch").html(length);
      },
    });
  });
});

function PendingTableHome() {
  $.ajax({
    url: "/pendingfileneite",
    method: "GET",
    success: function (data) {
      data.forEach(function (item) {
        var row = appendTableRow(item);
        $("#pendingfileneite").append(row);
      });
    },
  });
}

function PendingTableScheduler() {
  $.ajax({
    url: "/pendingfileneite",
    method: "GET",
    success: function (data) {
      data.forEach(function (item) {
        var row = appendTableScheduler(item);
        $("#display").append(row);
      });
    },
    error: function (error) {
      alert("Error Retrieving Data");
    },
  });
}

function appendTableRow(item) {
  var row = "<tr>";
  var td =
    td +
    '<td style="background-color:' +
    getColor(item.category) +
    '">' +
    item.assign_person +
    "</td>";
  td =
    td +
    '<td style="background-color:' +
    getColor(item.category) +
    '">' +
    item.subject +
    "</td>";
  td =
    td +
    '<td style="background-color:' +
    getColor(item.category) +
    '">' +
    item.reason +
    "</td>";
  td =
    td +
    '<td style="background-color:' +
    getColor(item.pending_hour) +
    '">' +
    item.pending_hour +
    "</td>";

  row = row + td + "</tr>";

  //alert(row);

  return row;
}

function appendTableScheduler(item) {
  var row = "<tr>";
  var td =
    td +
    '<td style="background-color:' +
    getColor(item.category) +
    '">' +
    item.subject +
    "</td>";
  td =
    td +
    '<td style="background-color:' +
    getColor(item.category) +
    '">' +
    item.assign_person +
    "</td>";
  td =
    td +
    '<td style="background-color:' +
    getColor(item.category) +
    '">' +
    item.type +
    "</td>";

  td =
    td +
    '<td style="background-color:' +
    getColor(item.category) +
    '">' +
    item.category +
    "</td>";

  td =
    td +
    '<td style="background-color:' +
    getColor(item.category) +
    '">' +
    item.add_date +
    "</td>";

  row = row + td + "</tr>";

  //alert(row);

  return row;
}

function getColor(category) {
  var background = "white";

  if (category == "Urgent") {
    background = "red";
  } else if (category > 168) {
    //more than a week
    background = "red";
  } else {
    background = "white";
  }

  return background;
}
