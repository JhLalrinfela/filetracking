$(function () {
    $("#signup").on("click", function () {
        var uname = $("#uname").val();
        var upass = $("#upass").val();
      $.ajax({
        url:"/signup",
        method:"POST",
        data:{
            uname :uname,
            upass :upass
        },
        success:function(data){
            alert(data+" is successfully added");
            location.reload();
        }
      })
    });


    $("#login").on("click",function(){
      var uname = $('#username option:selected').val();
      var upass = $('#password').val();
      $.ajax({
        url:"/login",
        method:"POST",
        data:{
          uname:uname,
          upass:upass
        }
      })
    })

  });