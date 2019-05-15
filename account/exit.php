<?php
    unset($_COOKIE['u_name']);
    unset($_COOKIE['ui_id']);
    unset($_COOKIE['u_email']);
    setcookie('u_name', '', -1, '/');
    setcookie('ui_id', '', -1, '/');
    setcookie('u_email', '', -1, '/');
    $home_url = 'http://'. $_SERVER['HTTP_HOST'];
    header('location: ' . $home_url);
 ?>
