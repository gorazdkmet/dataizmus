<?php 

    $ToEmail = 'goro.gozy@gmail.com'; 
    $EmailSubject = 'Site contact form'; 
    $mailheader = "From: ".$_POST["email"]."\r\n"; 
    $mailheader .= "Reply-To: ".$_POST["email"]."\r\n"; 
    $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
    $MESSAGE_BODY = "Name: ".$_POST["name"]."";
    $MESSAGE_BODY .= "Email: ".$_POST["email"].""; 
    $MESSAGE_BODY .= "Message: ".nl2br($_POST["message"])."";

    if (mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader)) 
    {
        echo "Message accepted";
    }
    else
    {
        echo "Error: Message not accepted";
    };
?>