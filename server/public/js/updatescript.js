$(function () {
    $("#updatebutton").on("click",function(){
    var uname = $("#username").val();
    var reason = $("#reason").val();
      $.ajax({
        url: "/update_pending",
        mmetho:"POST",
        data:{
            uname:uname,
            reason:reason
        },
        success:function(data){
         
        }
      });
  
    })


    $("assign_new").on("click",()=>{
      
    })
  
    });
  