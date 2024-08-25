$(document).ready(function(){
    //Login
    $("#login").click(function(){
      var user = $('#users option:selected').val();
          $.ajax({
            url:'/user',
            method:'get',
            data:{
              user : user,
              //password:password
            }
          })
        //}
        
        // else if(user=='admin' && password=='admin@123'){
        //   window.location.replace("http://localhost:4000/admin");
        // }else if(user=='scheduler' && password=='scheduler@123'){
        //   window.location.replace("http://localhost:4000/scheduler");
        // }else {
        //     alert('User Id Or Password not Correct');
        //     location.reload();
        // }
    })

})
