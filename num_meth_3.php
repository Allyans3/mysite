<!DOCTYPE html>
<html>
    <head>
        <?php
            include("part_of_site/head.php");
         ?>
        <link rel="stylesheet" type="text/css" href="/num_meth_3/main.css">
        <title>Numerical Methods | Third</title>
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
                    <div class="col-lg-12 d-flex justify-content-center">
                        <input class="form-control" id="a" type="text_val" placeholder="Enter a:">
                        <input class="form-control" id="b" type="text_val" placeholder="Enter b:">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="about-text">
                            <h3 id="head_descr"><b>Rectangle method</b></h3>
                            <table class="table table-dark" id="table1">
                              <thead>
                                <tr>
                                  <th data-field="S">S</th>
                                  <th data-field="Error">Error</th>
                                </tr>
                              </thead>
                            </table>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-text">
                            <h3 id="head_descr"><b>Trapezoidal rule</b></h3>
                            <table class="table table-dark" id="table2">
                              <thead>
                                  <tr>
                                    <th data-field="S">S</th>
                                    <th data-field="Error">Error</th>
                                  </tr>
                              </thead>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-6 ">
                        <div class="about-text">
                            <h3 id="head_descr"><b>Simpson's rule</b></h3>
                            <table class="table table-dark" id="table3">
                              <thead>
                                  <tr>
                                    <th data-field="S">S</th>
                                    <th data-field="Error">Error</th>
                                  </tr>
                              </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <script src="/num_meth_3/method.js"></script>
        <script src="/num_meth_3/index.js"></script>
    </body>
</html>
