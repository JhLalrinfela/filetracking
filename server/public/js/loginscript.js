$(function () {
  $("#login").on("click",function(){
    $.ajax({
      url: "/login",
      success:function(data){
        alert(data);
        location.reload();
      }
    });

  })

  });
