<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="../account/sidebar.css">
        <link rel="stylesheet" type="text/css" href="../account/acc.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script type="text/javascript" src="js-account.js"></script>
        <script src="jquery.nicescroll.min.js"></script>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>

    <body>
        <div class="sidebar">

            <i class="fas fa-times"></i>

            <div class="sidebar-top">
                <a href="myaccount.php"><b>Numerical Methods</b></a>
            </div>

            <div class="sidebar-inner">
                <nav class="sidebar-nav">
                    <ul class="sidebar-nav-list">
                        <li class="sidebar-nav-list-item"><a class="sidebar-link js-nav-link current"href="#">Dashboard</a></li>
                        <li class="sidebar-nav-list-item">
                            <a class="sidebar-link js-nav-link"href="#">Profile</a>
                            <ul class="sidebar-nav-sublist js-subnav">
                                <li class="sidebar-nav-sublist-item"><a class="sidebar-sublist-link" href="#">Personal Data</a></li>
                                <li class="sidebar-nav-sublist-item"><a class="sidebar-sublist-link" href="#">Address Data</a></li>
                                <li class="sidebar-nav-sublist-item"><a class="sidebar-sublist-link" href="#">Account Data</a></li>
                                <li class="sidebar-nav-sublist-item"><a class="sidebar-sublist-link" href="#">History of login</a></li>
                            </ul>
                        </li>
                        <li class="sidebar-nav-list-item"><a class="sidebar-link js-nav-link"href="#">Help</a></li>
                        <li class="sidebar-nav-list-item"><a class="sidebar-link js-nav-link"href="#">Settings</a></li>
                        <li class="sidebar-nav-list-item"><a class="sidebar-link js-nav-link"href="../index.php">Back</a></li>
                    </ul>
                </nav>

            </div>
        </div>

        <div class="header-main">
            <header class="header">
                <div class="right-header">
                    <a class="burger-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                    <i class="fas fa-circle"></i>
                    <p>Online</p>
                </div>

                <div class="logout">
                    <p><?php echo $_COOKIE['u_email']?></p>
                    <a href="exit.php"><i class="fas fa-sign-out-alt"></i></a>
                </div>
            </header>

            <div class="content">
               <!-- <canvas id="myChart"></canvas> -->
               <span class="title">History of login</span>
               <div class="table-responsive">
                   <table class="table">
                        <thead>
                            <tr>
                                <th>Timestamp</th>
                                <th>Ip</th>
                                <th>Browser</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2019-05-09 14:09:28</td>
                                <td>46.149.93.138</td>
                                <td>Chrome</td>
                                <td>UA</td>
                            </tr>
                            <tr>
                                <td>2019-05-09 14:09:28</td>
                                <td>46.149.93.138</td>
                                <td>Chrome</td>
                                <td>UA</td>
                            </tr>
                            <tr>
                                <td>2019-05-09 14:09:28</td>
                                <td>46.149.93.138</td>
                                <td>Chrome</td>
                                <td>UA</td>
                            </tr>
                            <tr>
                                <td>2019-05-09 14:09:28</td>
                                <td>46.149.93.138</td>
                                <td>Chrome</td>
                                <td>UA</td>


                            </tr>
                        </tbody>
                   </table>
               </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium id tenetur esse odio quasi nobis cum vel quidem quibusdam dolorem, laborum, dolores, temporibus quisquam iure voluptate aperiam odit rem unde?</div>
                <div>Maiores porro, ipsa aperiam velit nisi debitis iure fuga repellendus in illo adipisci explicabo quisquam saepe eligendi at a harum assumenda nulla sequi, nam, deserunt itaque optio voluptatem. Earum, deserunt.</div>
                <div>Molestias expedita fuga tenetur vel. Et commodi aperiam, rerum illum. Fugit vitae deleniti minima est odio. Similique unde ex autem praesentium repellat pariatur, doloremque, dolores cumque. Ex, facere mollitia! Harum!</div>
                <div>Repellat id, dolore quam nemo quasi nihil saepe incidunt, rem quaerat natus iste assumenda molestias consequatur non debitis accusamus, eligendi iusto velit laudantium maxime ipsa! Quaerat similique sint rem porro.</div>
                <div>Nobis ratione ducimus magnam blanditiis assumenda natus reiciendis, ea hic quas, consequatur provident, magni totam amet. Eius eum adipisci reprehenderit consectetur illo. Iusto pariatur, magnam officia cum adipisci sit laborum.</div>
                <div>Asperiores ipsam hic incidunt repudiandae libero, ipsa voluptates voluptatum accusamus, repellendus fugiat. Omnis laboriosam possimus quasi ratione magni cumque, vitae voluptates, iure et dolore nisi quaerat, eaque nam quisquam quos.</div>
                <div>Quisquam ipsum enim minima, tenetur facere fuga pariatur, eaque commodi eveniet excepturi odit reprehenderit vel, unde adipisci aperiam debitis obcaecati quod a cum ea dolore repudiandae qui nemo dignissimos! Animi.</div>
                <div>Consequatur animi quas, odit corporis quibusdam aspernatur nihil illo sapiente optio in officiis quae consequuntur laudantium eveniet incidunt, enim deserunt laboriosam et tempore nemo deleniti repudiandae asperiores sint saepe. Optio.</div>
                <div>Iste magnam, consequatur quasi! Minima debitis, doloremque eius unde blanditiis quidem vel iusto voluptatum quos ex iste. Aspernatur voluptate porro, amet repudiandae, ex suscipit fugiat dicta dolor quae nesciunt dolore!</div>
                <div>Numquam aut nisi quas reiciendis, omnis delectus enim repellat quod cupiditate beatae sequi accusantium voluptas quo sapiente iusto odit quae, corrupti iste! Pariatur veritatis minus, mollitia facere quam, aliquid voluptate.</div>
           </div>
        </div>

    </body>

</html>
