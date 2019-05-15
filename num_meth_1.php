<!DOCTYPE html>
<html>
    <head>
        <?php
            include("part_of_site/head.php");
         ?>
        <link rel="stylesheet" type="text/css" href="/num_meth_1/main.css">
		<script src="https://cdn.plot.ly/plotly-1.35.2.min.js"></script>
        <title>Numerical Methods | First</title>
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
                        <div id="plot"></div>
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
                            <h3 id="head_descr"><b>Half-length method</b></h3>
                            <table class="table table-dark" id="table1">
                              <thead>
                                <tr>
                                  <th data-field="id">#</th>
                                  <th data-field="first">First</th>
                                  <th data-field="second">Last</th>
                                  <th data-field="third">Handle</th>
                                </tr>
                              </thead>
                              <tbody>
                              </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-text">
                            <h3 id="head_descr"><b>Chord method</b></h3>
                            <table class="table table-dark" id="table2">
                              <thead>
                                <tr>
                                  <th data-field="id">#</th>
                                  <th data-field="first">First</th>
                                  <th data-field="second">Last</th>
                                </tr>
                              </thead>
                              <tbody>
                              </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="about-text">
                            <h3 id="head_descr"><b>Newton's method</b></h3>
                            <table class="table table-dark" id="table3">
                              <thead>
                                <tr>
                                  <th data-field="id">#</th>
                                  <th data-field="first">First</th>
                                  <th data-field="second">Last</th>
                                </tr>
                              </thead>
                              <tbody>
                              </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-text">
                            <h3 id="head_descr"><b>Simple iteration method</b></h3>
                            <table class="table table-dark" id="table4">
                              <thead>
                                <tr>
                                  <th data-field="id">#</th>
                                  <th data-field="first">First</th>
                                  <th data-field="second">Last</th>
                                </tr>
                              </thead>
                              <tbody>
                              </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <script src="/num_meth_1/method.js"></script>
        <script src="/num_meth_1/index.js"></script>
    </body>
</html>
