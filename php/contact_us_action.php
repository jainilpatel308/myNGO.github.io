<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <!-- <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" /> -->
    <link rel="stylesheet" href="style.css?v=<?php echo time(); ?>">
    <title>Contact Us Response</title>
</head>
<body>
    <div class = "container contact_us_text">
        <h1>
            <?php
                require_once('pdo_connect.php');
                if(isset($_POST['send']))
                    $test;
                    $name  = $_POST['name'];
                    $email      = $_POST['email'];
                    $message   = $_POST['message'];
                    $sql = "INSERT INTO contact_us(name,email,message) values(?,?,?)";
                    $stmtinsert = $db->prepare($sql);
                    $result = $stmtinsert->execute([$name,$email,$message]);
                    if($result){
                        echo "Message Successfully Received.";
                        require_once('email.php');
                        $mail->Subject = 'Dear'. ' '.$name;
                        $mail->Body = 'We have revceived your message and we will give our response to you soon!';
                        $mail->addAddress($email);
                        $mail->send();
                        }
                    else{
                    echo "problem occured in saving.";
                    }
            ?>
        </h1>
    </div>  
    <script>
        setTimeout(function () {
            window.location.replace("index.php"); //will redirect to main page (index.html)
        }, 3000); //will call the function after 3 secs.
    </script>    
</body>
</html>