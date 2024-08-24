$(document).ready(function(){

    //Login
    $("#login").click(function(){
        var user = $('#userid').val();
        var password = $('#password').val();
        if(user =='' || password==''){
          alert("Please Fillup all Inputs")
            location.reload();
        }else{
          alert('Login');
          $.ajax({
            url:'/login',
            method:'POST',
            data:{
              user : user,
              password:password
            },
            success:function(data){
              console.log(data);
            }
          })
        }
        
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
