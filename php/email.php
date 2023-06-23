<?php
    require_once('PHPMailer/PHPMailerAutoload.php');
    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->SMTPAuth=true;
    $mail->SMTPSecure = 'ssl';
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = '465';
    $mail->isHTML();
    $mail->Username = 'partners8085@gmail.com';
    $mail->Password = 'pro@8085';
    $mail->setFrom('partners8085@gmail.com');
?>