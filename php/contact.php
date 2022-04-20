<?php

// Grab User submitted information
    $username = $_POST['username'];  
    $email = $_POST['email']; 
    $msg = $_POST['message']; 
    
    $headers = "From: ".$email . "\r\n" ."CC: kiranrb33@gmail.com" . "\r\n" ."CC: kavaloorkiran@gmail.com" . "\r\n" ."CC: Asianwomanspa69@gmail.com";

    //echo $msg;
    //echo $email;
    //echo $username
    
    
    $message = "Client Name:".$username."\n"."\n". " Client Email: " .$email."\n"."\n". $msg;
    
    //echo $message;
    
    mail("bhaskar.bokikere@gmail.com", "sailesh@asianwomanspa.com", "Message From New Client",$message,$headers);
    
    //  if(mail("bhaskar.bokikere@gmail.com","Message From Client",$message,$headers)){
    //      echo "mail sent successfully";
    //  }else{
    //      echo "mail sending failed";
    //  }
    
?>