document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });
});

function input_confirm_password_ca(){

var input_confirm_password_ca=document.getElementById("input_confirm_password_ca");

if(input_confirm_password_ca.type === "password"){
            input_confirm_password_ca.type = "text";
            document.getElementById('visibility_off_confirm_password_ca').style.display = "inline-block";
            document.getElementById('visibility_on_confirm_password_ca').style.display = "none";
        }
        else{
            input_confirm_password_ca.type = "password";
            document.getElementById('visibility_off_confirm_password_ca').style.display = "none";
            document.getElementById('visibility_on_confirm_password_ca').style.display = "inline-block";
        }
}

function input_password_ca(){

var input_password_ca=document.getElementById("input_password_ca");

if(input_password_ca.type === "password"){
            input_password_ca.type = "text";
            document.getElementById('visibility_off_password_ca').style.display = "inline-block";
            document.getElementById('visibility_on_password_ca').style.display = "none";
        }
        else{
            input_password_ca.type = "password";
            document.getElementById('visibility_off_password_ca').style.display = "none";
            document.getElementById('visibility_on_password_ca').style.display = "inline-block";
        }
}

function input_password(){

        var input_password=document.getElementById("input_password");

        if(input_password.type === "password"){
            input_password.type = "text";
            document.getElementById('visibility_off').style.display = "inline-block";
            document.getElementById('visibility_on').style.display = "none";
        }
        else{
            input_password.type = "password";
            document.getElementById('visibility_off').style.display = "none";
            document.getElementById('visibility_on').style.display = "inline-block";
        }

    }

function LoginValidation() {
let input_username=document.getElementById("input_username");
let input_password=document.getElementById("input_password");

if(input_username.value=="" && input_password.value==""){
     document.getElementById("error-div-login").style.visibility="visible";
     document.getElementById("input_username").style.border="1px solid var(--dark-red)";
     document.getElementById("input_password").style.border="1px solid var(--dark-red)";
        document.getElementById("error-message-login").
        innerHTML="Fill all the fields";
        return false;
    }
    else{
        document.getElementById("error-div-login").style.visibility="hidden";
        document.getElementById("input_username").style.border="1px solid var(--stroke)";
        document.getElementById("input_password").style.border="1px solid var(--stroke)";
        document.getElementById("error-message-login").innerHTML="";
        
    }

 if(input_username.value==""){
     document.getElementById("error-div-login").style.visibility="visible";
     document.getElementById("input_username").style.border="1px solid var(--dark-red)";
        document.getElementById("error-message-login").
        innerHTML="Enter your username";
        return false;
    }
    else{
        document.getElementById("error-div-login").style.visibility="hidden";
        document.getElementById("input_username").style.border="1px solid var(--stroke)";
        document.getElementById("error-message-login").innerHTML="";
        
    }

if(input_password.value==""){
    document.getElementById("error-div-login").style.visibility="visible";
    document.getElementById("input_password").style.border="1px solid var(--dark-red)";
        document.getElementById("error-message-login").innerHTML="Enter your password";
        return false;
    }
    if(input_password.value.length<8){
        document.getElementById("error-div-login").style.visibility="visible";
        document.getElementById("input_password").style.border="1px solid var(--dark-red)";
        document.getElementById("error-message-login").innerHTML="Enter atleast 8 inputs in password";
        return false;
    }
    else
    {
         document.getElementById("error-div-login").style.visibility="hidden";
         document.getElementById("input_password").style.border="1px solid var(--stroke)";
        document.getElementById("error-message-login").innerHTML="";
    }

}

function validation()
{
    
    var input_username_ca=document.getElementById("input_username_ca");
    var input_phone_ca=document.getElementById("input_phone_ca");
    var input_password_ca=document.getElementById("input_password_ca");
    var input_location_ca=document.getElementById("input_location_ca");
     var input_confirm_password_ca=document.getElementById("input_confirm_password_ca");
   
      if((input_username_ca.value=="" && input_phone_ca.value=="" && input_password_ca.value=="" && input_location_ca.value=="" && input_confirm_password_ca.value==""))
      {
          document.getElementById("error-div-ca").style.visibility="visible";
          document.getElementById("input_username_ca").style.border="1px solid var(--dark-red)";
          document.getElementById("input_phone_ca").style.border="1px solid var(--dark-red)";
           document.getElementById("input_password_ca").style.border="1px solid var(--dark-red)";
           document.getElementById("input_location_ca").style.border="1px solid var(--dark-red)";
           document.getElementById("input_confirm_password_ca").style.border="1px solid var(--dark-red)";
        document.getElementById("error-message-ca").innerHTML="Fill all the fields";
        return false;
    }
    else{
         document.getElementById("error-div-ca").style.visibility="hidden";
         document.getElementById("input_username_ca").style.border="1px solid var(--stroke)";
             document.getElementById("input_location_ca").style.border="1px solid var(--stroke)";
           document.getElementById("input_phone_ca").style.border="1px solid var(--stroke)";
           document.getElementById("input_password_ca").style.border="1px solid var(--stroke)";
           document.getElementById("input_confirm_password_ca").style.border="1px solid var(--stroke)";
        document.getElementById("error-message-ca").innerHTML="";
        
    }

     if(input_username_ca.value==""){
          document.getElementById("error-div-ca").style.visibility="visible";
          document.getElementById("input_username_ca").style.border="1px solid var(--dark-red)";
        document.getElementById("error-message-ca").innerHTML="Enter your username";
        return false;
    }
    else{
         document.getElementById("error-div-ca").style.visibility="hidden";
         document.getElementById("input_username_ca").style.border="1px solid var(--stroke)";
        document.getElementById("error-message-ca").innerHTML="";
        
    }

     if(input_location_ca.value==""){
          document.getElementById("error-div-ca").style.visibility="visible";
          document.getElementById("input_location_ca").style.border="1px solid var(--dark-red)";
        document.getElementById("error-message-ca").innerHTML="Enter your location";
        return false;
    }
    else{
         document.getElementById("error-div-ca").style.visibility="hidden";
         document.getElementById("input_location_ca").style.border="1px solid var(--stroke)";
        document.getElementById("error-message-ca").innerHTML="";
        
    }

    if(input_phone_ca.value==""){
         document.getElementById("error-div-ca").style.visibility="visible";
         document.getElementById("input_phone_ca").style.border="1px solid var(--dark-red)";
        document.getElementById("error-message-ca").innerHTML="Enter your phone number";
        return false;
    }
    if(input_phone_ca.value.length!=10){
         document.getElementById("error-div-ca").style.visibility="visible";
         document.getElementById("input_phone_ca").style.border="1px solid var(--dark-red)";
        document.getElementById("error-message-ca").innerHTML="Enter a valid phone number";
        return false;
    }
    else
    {
         document.getElementById("error-div-ca").style.visibility="hidden";
         document.getElementById("input_phone_ca").style.border="1px solid var(--stroke)";
        document.getElementById("error-message-ca").innerHTML="";
    }

    

    if(input_password_ca.value==""){
         document.getElementById("error-div-ca").style.visibility="visible";
         document.getElementById("input_password_ca").style.border="1px solid var(--dark-red)";
        document.getElementById("error-message-ca").innerHTML="Enter your password";
        return false;
    }
    if(input_password_ca.value.length<8){
         document.getElementById("error-div-ca").style.visibility="visible";
         document.getElementById("input_password_ca").style.border="1px solid var(--dark-red)";
        document.getElementById("error-message-ca").innerHTML="Enter atleast 8 inputs in password";
        return false;
    }
    else
    {
         document.getElementById("error-div-ca").style.visibility="hidden";
         document.getElementById("input_password_ca").style.border="1px solid var(--stroke)";
        document.getElementById("error-message-ca").innerHTML="";
    }

    if(input_confirm_password_ca.value==""){
         document.getElementById("error-div-ca").style.visibility="visible";
         document.getElementById("input_confirm_password_ca").style.border="1px solid var(--dark-red)";
        document.getElementById("error-message-ca").innerHTML="Enter your confirm password";
        return false;
    }
    if(input_confirm_password_ca.value!=input_password_ca.value){
         document.getElementById("error-div-ca").style.visibility="visible";
         document.getElementById("input_confirm_password_ca").style.border="1px solid var(--dark-red)";
        document.getElementById("error-message-ca").innerHTML="Password does not match";
        return false; 
    }
    else
    {
         document.getElementById("error-div-ca").style.visibility="hidden";
         document.getElementById("input_confirm_password_ca").style.border="1px solid var(--stroke)";
        document.getElementById("error-message-ca").innerHTML="";
        return true;
    }
        


}