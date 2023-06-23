<?php
    $db_user = "root";
    $db_pass = "";
    $dsn = "mysql:host=localhost;dbname=2CP08_project";
    try{
        $db = new PDO($dsn,$db_user,$db_pass);
    }
    catch(PDOException $e){
        $error_message = $e->getMessage();
        echo $error_message;
        exit();
    }
?>