<!DOCTYPE html>
<html>
    <head>
        <?php
            include("part_of_site/head.php");
         ?>
        <title>Numerical Methods | Register</title>
    </head>

    <body>

        <?php
            include("part_of_site/header.php");
            include("account/login.php");
            include("account/config.php");

            if(isset($_POST["reg-btn"])){
                $reg_name = mysqli_real_escape_string($connect, trim($_POST["reg_name"]));
                $reg_email = mysqli_real_escape_string($connect, trim($_POST["reg_email"]));
                $reg_pass = mysqli_real_escape_string($connect, trim($_POST["reg_pass"]));
                $reg_conf_pass = mysqli_real_escape_string($connect, trim($_POST["reg_conf_pass"]));
                if(!empty($reg_name) && !empty($reg_email) && !empty($reg_pass) && !empty($reg_conf_pass) && ($reg_pass == $reg_conf_pass)) {
                    $selectfdb = mysqli_query($connect, "SELECT * FROM `users` WHERE u_name = '$reg_name' OR u_email = '$reg_email' ;");
                    echo mysqli_num_rows($selectfdb);
                    if(mysqli_num_rows($selectfdb) == 0) {
                        $insert = mysqli_query($connect,"INSERT INTO `users` (`ui_id`, `u_name`, `u_email`, `u_pass`, `u_date`, `u_ip`) VALUES (NULL, '$reg_name', '$reg_email', SHA('$reg_pass'), '$date', '$ip');");
                        $home_url = 'http://'. $_SERVER['HTTP_HOST'];
                        header('location: ' . $home_url);

                    }
                }
            }
        ?>


        <div class="register-box">
            <form class="login-form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                <h1>Register</h1>
                <div class="textbox">
                    <i class="fas fa-user"></i>
                    <input type="text" name="reg_name" placeholder="Username" maxlength="32" required autocomplete="username">
                </div>
                <div class="textbox">
                    <i class="fas fa-envelope"></i>
                    <input type="email" name="reg_email" placeholder="E-mail" required autocomplete="email">
                </div>
                <div class="textbox">
                    <i class="fas fa-lock"></i>
                    <input type="password" name="reg_pass" placeholder="Password" required autocomplete="new-password">
                </div>
                <div class="textbox">
                    <i class="fas fa-lock"></i>
                    <input type="password" name="reg_conf_pass" placeholder="Confirm password" required autocomplete="new-password">
                </div>
                <input class="login-btn" type="submit" name="reg-btn" value="Register">
            </form>

        </div>

    </body>
</html>
