$(document).ready(function(){
    $('#file_assign').click(function(){
      var subject = $('#subject').val();
      var person = $('#person option:selected').val();
      var type = $("#type").val();
      var category = $("#category").val();
      $.ajax({
        url:'/insertintopending',
        method :"POST",
        data : {
          subject : subject,
          person : person,
          type : type,
          category:category
        },
        beforeSend:function(){
          console.log("Loading.....");

        },
        success:function(data){
          alert(data);
          location.reload();
        }
      })
    });
  });