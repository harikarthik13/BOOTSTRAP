$(document).ready(function(){
    $('#myform').validate({
        rules:{
            pass:{
                required:true,
                pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#])[A-Za-z\d@$#]{7,15}$/,
            },
            mail:{
                required:true,
                email:true,
                pattern:/^([a-zA-Z0-9_])+@cgvak.com$/,
            },
            mbl:{
                required:true,
                pattern:/^[0-9]{3}-[0-9]{4}-[0-9]{4}$/,
            },
        
        },
        messages:{
            pass:{
                required:"Enter User Name",
                pattern:"Enter the Valid User Name",
            },
            mail:{
                required:"Enter your E-mail ID",
                email:"Enter Valid E-mail ID",
            },
            mbl:{
                required:"Enter your Phone number",
                pattern:"Enter the valid number",
            },
         
        },
    });
});