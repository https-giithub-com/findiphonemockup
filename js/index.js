$(document).ready(function() {
  
  
  
   //initialize common variables
  input = $("input[type=text]");
  password = $("input[type=password]");
  
  
  $("input[type='password']").val('');
  button = $("button");
  
  toggleButton(); 
  
 
  input
    .keypress(toggleButton)
    .keyup(toggleButton);
   password
     .keypress(toggleButton)
     .keyup(toggleButton);
   
  
  function toggleButton() {
    len = input.val().length;
    pwd = password.val().length;
    
    if (len != 0 && pwd !=0) {
      
     button
       .text("Login")
       .removeAttr("disabled")
       .addClass('activeButton'); 
      
    } 
    else {
       button.attr("disabled", "disabled");
       button.text("Credintials Needed");
       button.removeClass('activeButton'); 
    }
    
    $('.alert-msg').hide(); 
   
  var alert = "<b>Login Failed. Please Try Again.";
  var caution = "<b>Session Expired.</b> Please Login."
  
  var success = "You're Logged In! Congrats!"; 
  
  function displayAlertMsg(msg) {
    
    $('.alert-msg')
      .addClass(msg)
      .html(msg)
      .delay(1000)
      .slideDown(500)
  }
  
  if (caution){
    displayAlertMsg('caution')
  }  else if(alert){
    displayAlertMsg('alert')
  } else if (success){
    displayAlertMsg('success')
  };
  
  };
  
});
