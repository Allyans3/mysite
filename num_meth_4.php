<!DOCTYPE html>
<html>
    <head>
        <?php
            include("part_of_site/head.php");
         ?>
        <link rel="stylesheet" type="text/css" href="/num_meth_4/main.css">
        <title>Numerical Methods | Fourth</title>
    </head>

    <body>

        <?php
            include("part_of_site/header.php");
            include("account/login.php");
        ?>

        <section id="body_page" class="body_page">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 d-flex justify-content-center">
                        <input class="form-control" id="eq" type="text" placeholder="Enter an equation:">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="about-text">
                            <h3 id="head_descr"><b>Euler method</b></h3>
                            <table class="table table-dark" id="table1">
                              <thead>
                                <tr>
                                  <th data-field="x">x</th>
                                  <th data-field="y">y</th>
                                </tr>
                              </thead>
                            </table>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="about-text">
                            <h3 id="head_descr"><b>Runge-Kutta method</b></h3>
                            <table class="table table-dark" id="table2">
                              <thead>
                                  <tr>
                                    <th data-field="x">x</th>
                                    <th data-field="y">y</th>
                                  </tr>
                              </thead>
                            </table>
                        </div>
                    </div>
                    <div class="col-lg-4 ">
                        <div class="about-text">
                            <h3 id="head_descr"><b>Adams method</b></h3>
                            <table class="table table-dark" id="table3">
                                <thead>
                                    <tr>
                                        <th data-field="x">x</th>
                                        <th data-field="y">y</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <script src="/num_meth_4/methods.js"></script>
        <script src="/num_meth_4/index.js"></script>

    </body>
</html>
