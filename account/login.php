<?php
    include("config.php");

    require "SypexGeo/SxGeo.php";

    date_default_timezone_set('Europe/Kiev');

    $user_agent = $_SERVER["HTTP_USER_AGENT"];
    if (strpos($user_agent, "Firefox") !== false) $browser = "Firefox";
    elseif (strpos($user_agent, "Opera") !== false) $browser = "Opera";
    elseif (strpos($user_agent, "Chrome") !== false) $browser = "Chrome";
    elseif (strpos($user_agent, "MSIE") !== false) $browser = "Internet Explorer";
    elseif (strpos($user_agent, "Safari") !== false) $browser = "Safari";
    else $browser = "NaN";

    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = @$_SERVER['REMOTE_ADDR'];
    if(filter_var($client, FILTER_VALIDATE_IP)) $ip = $client;
    elseif(filter_var($forward, FILTER_VALIDATE_IP)) $ip = $forward;
    else $ip = $remote;

    // $ip = '46.149.87.10';

    $date = date("Y-m-d H:i:s");

    $geo = new SxGeo('SypexGeo/SxGeo.dat');

    // $arr = $geo->getCityFull($ip);
    // $location = $arr['city']['name_en']. ", " .$arr['country']['name_en'];
    $location = $geo->getCountry($ip);


    unset($geo);

    if(!isset($_COOKIE['ui_id'])) {
        if(isset($_POST["log_btn"])){
            $log_email = mysqli_real_escape_string($connect, trim($_POST["log_email"]));
            $log_pass = mysqli_real_escape_string($connect, trim($_POST["log_pass"]));
            if(!empty($log_email) && !empty($log_pass)) {
                $selectfdb = mysqli_query($connect, "SELECT * FROM `users` WHERE u_email = '$log_email' AND u_pass = SHA('$log_pass');");
                if(mysqli_num_rows($selectfdb) == 1) {
                    $row = mysqli_fetch_array($selectfdb);
                    setcookie('u_name', $row['u_name'], time() + (60*60*24*30));
                    setcookie('ui_id', $row['ui_id'], time() + (60*60*24*30));
                    setcookie('u_email', $row['u_email'], time() + (60*60*24*30));

                    $cookieval = $row['ui_id'];
                    echo $cookieval;

                    $selectfdb = mysqli_query($connect, "INSERT INTO `Login_history` (`id`, `u_id`, `l_date`, `ip`, `browser`, `location`) VALUES (NULL, '$cookieval', '$date', '$ip', '$browser', '$location');");

                    $home_url = 'http://'. $_SERVER['HTTP_HOST'] . $_SERVER['PHP_SELF'];
                    header('location: ' . $home_url);
                    echo "Correct data";
                } else {
                    echo "Incorrect data";
                }
            } else {
                echo "Incorrect data";
            }
        }

    }
?>

<div class="login-box">
    <div class="hide-login-btn"><i class="fas fa-times"></i></div>

    <form class="login-form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
        <?php
        if(empty($_COOKIE['u_email'])) {
            ?>
        <h1>Login</h1>
        <div class="textbox">
            <i class="fas fa-envelope"></i>
            <input type="email" name="log_email" placeholder="E-mail" required autocomplete="email">
        </div>
        <div class="textbox">
            <i class="fas fa-lock"></i>
            <input type="password" name="log_pass" placeholder="Password" required autocomplete="current-password">
        </div>
        <input class="login-btn" type="submit" name="log_btn" value="Login">
        <?php
    } else {
        ?>
        <h2>Welcome <?php echo $_COOKIE['u_name']?></h2>
        <a class="my-acc" href="account/myaccount.php">My account</a>
        <a class="my-acc" href="#">Settings</a>
        <a href="account/exit.php">Logout</a>
        <?php
    }
    ?>
    </form>

</div>
