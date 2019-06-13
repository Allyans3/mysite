<?php
    $server = 'ricky.heliohost.org';
    $user = 'allyans3_auth';
    $pass = '54985754';
    $db = 'allyans3_auth';
    // $server = 'remotemysql.com';
    // $user = '0EhqmC71No';
    // $pass = 'o8F07QaCns';
    // $db = '0EhqmC71No';
    // $server = 'localhost';
    // $user = 'root';
    // $pass = '';
    // $db = 'auth';


    $connect = mysqli_connect($server, $user, $pass);

    if (!$connect) {
        echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
        echo "Код ошибки errno: " . mysqli_connect_errno() . PHP_EOL;
        echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
        exit;
    }

    $selectdb = mysqli_select_db($connect,$db) or die("error2");
?>
