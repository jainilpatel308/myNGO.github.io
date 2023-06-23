<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- <link rel="stylesheet" href="style.css"> -->
    <!-- <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" /> -->
    <link rel="stylesheet" href="style.css?v=<?php echo time(); ?>">
    <title>Volunteer Response</title>
</head>
<body>
    <div class = "container contact_us_text">
        <h1>
            <?php
                require_once('pdo_connect.php');
                if(isset($_POST['send']))
                    $temp;
                    $name = $_POST['name'];
                    $email= $_POST['email'];
                    $phone   = $_POST['phone'];
                    $address = $_POST['address'];
                    $city = $_POST['city'];
                    $table_choice = $_POST['choice'];
                    $sql;
                    $result = false;
                    // echo $name . ' '. $email . ' ' . $phone. ' '. $address. ' '.$country. ' '.$table_choice;
                    if($table_choice == 1){
                        $no_of_days = $_POST['days1'];
                        $grade = $_POST['grade'];
                        $edu = $_POST['edu'];
                        $sql = "INSERT INTO education_volunteer(name,email,phone,address,city,grade,qualification,no_of_days) values(?,?,?,?,?,?,?,?)";
                        $stmtinsert = $db->prepare($sql);
                        $result = $stmtinsert->execute([$name,$email,$phone,$address,$city,$grade,$edu,$no_of_days]);
                    }
                    else if($table_choice == 2){
                        $no_of_days = $_POST['days2'];
                        $sql = "INSERT INTO covid_volunteer(name,email,phone,address,city,no_of_days) values(?,?,?,?,?,?)";
                        $stmtinsert = $db->prepare($sql);
                        $result = $stmtinsert->execute([$name,$email,$phone,$address,$city,$no_of_days]);
                    }
                    else if($table_choice == 3){
                        $no_of_days = $_POST['days3'];
                        $sql = "INSERT INTO tree_plantation_volunteer(name,email,phone,address,city,no_of_days) values(?,?,?,?,?,?)";
                        $stmtinsert = $db->prepare($sql);
                        $result = $stmtinsert->execute([$name,$email,$phone,$address,$city,$no_of_days]);
                    }
                    // echo $sql;
                    
                    //echo "value of radio button:".$donation;                    
                    if($result){
                        echo "Your Form was submitted Successfully.<br>";
                        echo "Thank You For Signing up as a Volunteer.<br>";
                        echo "The schedule to volunteering would be sent to you by email.";
                        require_once('email.php');
                        $mail->Subject = 'Successfull enrollment as a Volunteer';
                        $mail->Body = 'Dear '.$name .", Thank you very much for enrolling as a volunteer.
                         We will email you the schedule of next month's volunteering events.
                         You can come at the specific time at the scpecified place." ;
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
            window.location.replace("/project/index.php");
        }, 3000); //will call the function after 3 secs.
    </script>     
</body>
</html>