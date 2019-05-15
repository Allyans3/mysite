<div class="nav-bar">
    <div class="logo">
        <a href="index.php"><b>Numerical Methods</b></a>
    </div>

    <nav>
        <ul>
            <li><a href="index.php"><i class="fas fa-home"></i> Home</a></li>
            <li><a href="#">About</a></li>
            <li class="sub-menu"><a href="#">Methods <i class="fas fa-caret-down"></i></a>
                <ul>
                    <li><a href="num_meth_1.php">First</a></li>
                    <li><a href="num_meth_2.php">Second</a></li>
                    <li><a href="num_meth_3.php">Third</a></li>
                    <li><a href="num_meth_4.php">Fourth</a></li>
                </ul>
            </li>
            <li><a href="#">Help</a></li>
        <?php
        if(empty($_COOKIE['u_email'])) {
            ?>
            <li><a class="show-login-btn" href="#"></i>Login</a></li>

        <?php
        }else {
         ?>
            <li><a class="show-login-btn" href="#"></i><?php echo $_COOKIE['u_name']?></a></li>
        <?php
        }
        ?>
            <li><a href="register.php">Register</a></li>
        </ul>
    </nav>

    <a class="btn_burger">
        <span></span>
        <span></span>
        <span></span>
    </a>

</div>
