<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input to avoid security risks
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    // Email details
    $to = "info@socmedglobalug.org";
    $subject = "Message from website Contact Form from " . $name;
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Email message body
    $body = "<h2>New Form Submission</h2>
             <p><strong>Name:</strong> $name</p>
             <p><strong>Email:</strong> $email</p>
             <p><strong>Message:</strong><br>$message</p>";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200); // Success
    } else {
        http_response_code(500); // Internal server error
    }
}
