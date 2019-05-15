<?php
    // $server = 'ricky.heliohost.org';
    // $user = 'allyans3_auth';
    // $pass = '54985754';
    // $db = 'allyans3_auth';
    $server = 'remotemysql.com';
    $user = '0EhqmC71No';
    $pass = 'o8F07QaCns';
    $db = '0EhqmC71No';
    // $server = 'localhost';
    // $user = 'root';
    // $pass = '';
    // $db = 'auth';


    $connect = mysqli_connect($server, $user, $pass) or die("error");

    $selectdb = mysqli_select_db($connect,$db) or die("error");
?>
